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
     * Proof submission during a voting tie.
     *
     * Players pre-generate proofs at round start using:
     *   nullifier = H(secret, roomId, round)
     * Proofs are only submitted when a tie is detected and the player
     * is one of the tied top-vote candidates.
     *
     * Contract enforces:
     *   - 1 free proof per game (free_proof_used flag)
     *   - proof_fee charged for subsequent proofs (added to pot)
     *   - max 1 submission per player per round (nullifier set)
     *   - only CLEAN players can produce a valid proof
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
      // 1. Verify tie is active this round and player is a tied candidate
      // 2. Forward to contract: submitInnocenceProof(...)
      // 3. On success, internally mark player as proof-protected this round
      //    (used in resolve_round tie logic)
      //    Do NOT broadcast proof acceptance to room
    })

    /**
     * Round resolution — called after voting phase ends.
     *
     * Tie resolution (see contract spec for full algorithm):
     *   - Protected candidates (valid proof this round) are shielded from
     *     elimination IF unprotected tied candidates exist.
     *   - If ALL tied are protected → no elimination; one survivor receives
     *     infection next round (pending_infection_next_round = true).
     *   - Public 'tie_resolved' event carries only a generic message — no
     *     indication of which players had proofs (prevents clean-role inference).
     *
     * Endgame check after each resolve:
     *   infected_alive == 0            → clean_win
     *   infected_alive >= clean_alive  → infected_win  (includes 1 vs 1)
     *   round == max_rounds            → max_rounds_draw
     *
     * TODO: Issue #46
     */
    socket.on('resolve_round', async ({ roomId }: { roomId: string }) => {
      // TODO: Issue #46
      // 1. Call contract resolveRound(roomId)
      // 2. Broadcast elimination event (if any)
      // 3. Broadcast generic tie_resolved event (no role hints)
      // 4. If game over → broadcast game_ended with outcome + payout breakdown
      // 5. If continuing → start next round (assign_infection for new round)
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
