import { Server, Socket } from 'socket.io'
import { logger } from '../lib/logger'
import type { GameEvent } from '../types/game'

// TODO: Issue #20 - Implement full socket event handlers
// TODO: Issue #21 - Implement room state sync via Redis

export function setupSocketHandlers(io: Server) {
  io.on('connection', (socket: Socket) => {
    logger.info(`Client connected: ${socket.id}`)

    /**
     * Player joins a socket room for real-time updates
     * TODO: Issue #20
     */
    socket.on('join_room', async ({ roomId, playerAddress }: { roomId: string; playerAddress: string }) => {
      // TODO: Issue #20
      // 1. Validate roomId exists in DB/Redis
      // 2. Verify playerAddress is in the room
      // 3. socket.join(roomId)
      // 4. Broadcast player_joined to room
      // 5. Send current room state to connecting player
      socket.join(roomId)
      logger.info(`${socket.id} joined room ${roomId}`)
    })

    /**
     * Player leaves a room
     * TODO: Issue #20
     */
    socket.on('leave_room', ({ roomId }: { roomId: string }) => {
      socket.leave(roomId)
    })

    /**
     * Phase timer tick — backend manages phase transitions
     * TODO: Issue #23
     */
    socket.on('request_phase_advance', async ({ roomId }: { roomId: string }) => {
      // TODO: Issue #23
      // 1. Check if phase timer has expired
      // 2. Advance to next phase
      // 3. Broadcast phase_changed event
    })

    /**
     * Infection assignment — system assigns each round, NOT player-chosen.
     *
     * Normal case:
     *   target = eligible_clean_alive_players[
     *     hash(roomId, round, prevTxHash) % count
     *   ]
     *
     * All-protected-tie case:
     *   target is selected from among the previous round's tied protected
     *   survivors (stored in pending_infection_next_round flag on PlayerState).
     *
     * Only the infected player receives the private 'infection_assigned' event.
     * No event reveals who caused the infection.
     *
     * TODO: Issue #22
     */
    socket.on('assign_infection', async ({ roomId, round }: { roomId: string; round: number }) => {
      // TODO: Issue #22
      // 1. Load alive clean players for this room
      // 2. Check if any player has pending_infection_next_round = true
      //    a. If yes → infect that player (clear the flag)
      //    b. If no  → deterministic pick: hash(roomId, round, prevTxHash) % count
      // 3. Update player status to Infected in DB
      // 4. Emit private 'infection_assigned' only to that player's socket:
      //      socket.to(playerSocketId).emit('game_event', { type: 'infection_assigned', ... })
      // 5. Do NOT broadcast who was infected to the room
    })

    /**
     * Proof submission during the Discussion phase.
     *
     * The window opens at the start of discussion and closes the moment
     * voting begins. No proofs are accepted after that.
     *
     * This is a strategic bet: the player commits BEFORE knowing who
     * will be the top-voted target. Key rules:
     *   - 1 free proof per player per game (free_proof_used flag)
     *   - proof_fee charged for subsequent proofs (added to pot)
     *   - max 1 per player per round (nullifier-enforced)
     *   - only CLEAN players can produce a valid proof (infected fail circuit)
     *
     * What the proof does at resolve time:
     *   - Sole top-voted + has proof → saved, no elimination
     *   - Tied top-voted, some have proofs → unprotected eliminated
     *   - Tied top-voted, all have proofs → one randomly infected (not eliminated)
     *
     * TODO: Issue #45
     */
    socket.on('submit_proof', async (payload: {
      roomId: string
      playerAddress: string
      commitment: string
      nullifier: string
      zkProof: string
      isFreeProof: boolean
    }) => {
      // TODO: Issue #45
      // 1. Verify current phase is Discussion
      // 2. Verify player is alive
      // 3. Forward to contract: submitInnocenceProof(...)
      // 4. On success, broadcast proof_submitted event (address only, no outcome)
      // 5. Lock out further submissions from this player this round
    })

    /**
     * Round resolution — called after voting phase ends.
     *
     * Proof window was closed before voting began. Resolution uses
     * whatever proofs players chose to submit during discussion.
     *
     * Resolution cases (see contract spec for full algorithm):
     *   A: Single top candidate, no proof → eliminated
     *   B: Single top candidate, has proof → saved, no elimination
     *   C: Tied, some unprotected → unprotected candidate eliminated
     *   D: Tied, all have proofs → one randomly infected (not eliminated)
     *
     * Absent vote rule:
     *   Players who didn't vote get their vote cast for the current
     *   leading target (prevents mass-abstention collusion by infected).
     *
     * Endgame check after each resolve:
     *   infected_alive == 0            → clean_win
     *   infected_alive >= clean_alive  → infected_win  (includes 1 vs 1)
     *   round == max_rounds            → infected_win (time expired)
     *
     * TODO: Issue #46
     */
    socket.on('resolve_round', async ({ roomId }: { roomId: string }) => {
      // TODO: Issue #46
      // 1. Apply absent-vote rule before tallying
      // 2. Call contract resolveRound(roomId)
      // 3. Broadcast appropriate event:
      //    - Case A: player_eliminated
      //    - Case B: player_saved_by_proof (address known, no outcome reason)
      //    - Case C: player_eliminated + vote_resolved (generic)
      //    - Case D: infection_assigned (private to target) + vote_resolved (generic)
      // 4. If game over → broadcast game_ended with outcome + payout breakdown
      // 5. If continuing → start next round, assign_infection
    })

    socket.on('disconnect', () => {
      logger.info(`Client disconnected: ${socket.id}`)
    })
  })
}

/**
 * Broadcast a game event to all players in a room
 */
export function broadcastEvent(io: Server, roomId: string, event: GameEvent) {
  io.to(roomId).emit('game_event', event)
}
