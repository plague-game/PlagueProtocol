#![no_std]

//! PlagueGame - Main game room contract
//! Handles room creation, player joining, escrow, rounds, voting, and payouts
//!
//! TODO: Issue #40 - Implement full game room contract
//! TODO: Issue #41 - Implement escrow and payout logic
//! TODO: Issue #42 - Implement round management

use soroban_sdk::{
    contract, contractimpl, contracttype, contractclient,
    Env, Address, String, Vec, Map, Symbol,
    token, log, panic_with_error,
};

// ─── Storage Keys ──────────────────────────────────────────────────────────

#[contracttype]
pub enum DataKey {
    Room(u64),
    Player(u64, Address),
    RoomCount,
    Config,
}

// ─── Enums ─────────────────────────────────────────────────────────────────

#[contracttype]
#[derive(Clone, PartialEq)]
pub enum RoomStatus {
    Waiting,
    Starting,
    Active,
    Ended,
}

#[contracttype]
#[derive(Clone, PartialEq)]
pub enum RoundPhase {
    Infection,
    Discussion,
    Voting,
    Reveal,
    Ended,
}

#[contracttype]
#[derive(Clone, PartialEq)]
pub enum PlayerStatus {
    Clean,
    Infected,
    Eliminated,
}

// ─── Data Structures ───────────────────────────────────────────────────────

#[contracttype]
#[derive(Clone)]
pub struct RoomConfig {
    pub min_players: u32,
    pub max_players: u32,
    pub stake_amount: i128,
    pub max_rounds: u32,
    pub round_duration_secs: u64,
    pub discussion_duration_secs: u64,
    pub voting_duration_secs: u64,
}

#[contracttype]
#[derive(Clone)]
pub struct Room {
    pub id: u64,
    pub host: Address,
    pub status: RoomStatus,
    pub config: RoomConfig,
    pub players: Vec<Address>,
    pub current_round: u32,
    pub pot: i128,
    pub created_at: u64,
    pub started_at: u64,
}

#[contracttype]
#[derive(Clone)]
pub struct PlayerState {
    pub address: Address,
    pub status: PlayerStatus,
    /// Poseidon hash commitment of the player's role + secret
    /// ZK proof verifies this without revealing the role
    pub role_commitment: String,
    pub staked: i128,
    pub vote_target: Option<Address>,
    pub joined_at: u64,
}

#[contracttype]
#[derive(Clone)]
pub struct Round {
    pub number: u32,
    pub phase: RoundPhase,
    pub phase_ends_at: u64,
    pub votes: Map<Address, Address>,
    pub eliminated: Vec<Address>,
    pub drain_amount: i128,
}

// ─── Contract ──────────────────────────────────────────────────────────────

#[contract]
pub struct PlagueGame;

#[contractimpl]
impl PlagueGame {
    /// Initialize the contract (called once on deploy)
    pub fn initialize(env: Env, admin: Address) {
        admin.require_auth();
        // TODO: Issue #40 - Store admin, set initial config
        log!(&env, "PlagueGame initialized");
    }

    /// Create a new game room
    /// Returns the room ID
    ///
    /// TODO: Issue #40
    pub fn create_room(
        env: Env,
        host: Address,
        max_players: u32,
        stake_amount: i128,
    ) -> u64 {
        host.require_auth();
        // TODO: Issue #40
        // 1. Validate params (max_players 4–12, stake_amount > 0)
        // 2. Increment room counter
        // 3. Create Room struct and store it
        // 4. Emit room_created event
        panic_with_error!(&env, 1u32); // placeholder
    }

    /// Player joins a room and stakes XLM
    ///
    /// TODO: Issue #41
    pub fn join_room(env: Env, player: Address, room_id: u64) {
        player.require_auth();
        // TODO: Issue #41
        // 1. Load room, verify status is Waiting
        // 2. Check player not already in room
        // 3. Check room not full
        // 4. Transfer stake_amount from player to contract (escrow)
        // 5. Add player to room.players
        // 6. Update room pot
        // 7. Emit player_joined event
    }

    /// Host starts the game — triggers VRF role assignment off-chain
    /// Players must submit role commitments before first round begins
    ///
    /// TODO: Issue #42
    pub fn start_game(env: Env, host: Address, room_id: u64) {
        host.require_auth();
        // TODO: Issue #42
        // 1. Verify caller is host
        // 2. Verify min_players reached
        // 3. Set room status to Starting
        // 4. Emit game_starting event (backend picks this up for VRF)
    }

    /// Player submits their ZK role commitment
    /// Must be called by all players during Starting phase
    ///
    /// TODO: Issue #43 - ZK commitment submission
    pub fn submit_role_commitment(
        env: Env,
        player: Address,
        room_id: u64,
        commitment: String,
        zk_proof: String, // serialised proof
    ) {
        player.require_auth();
        // TODO: Issue #43
        // 1. Verify game is in Starting phase
        // 2. Call ZKVerifier contract to verify the proof
        // 3. Store commitment in PlayerState
        // 4. If all players committed, start Round 1
    }

    /// Cast a vote to eliminate a player during Voting phase
    ///
    /// TODO: Issue #44
    pub fn cast_vote(
        env: Env,
        voter: Address,
        room_id: u64,
        target: Address,
    ) {
        voter.require_auth();
        // TODO: Issue #44
        // 1. Verify phase is Voting
        // 2. Verify voter is alive (not eliminated)
        // 3. Verify target is alive
        // 4. Record vote (one vote per voter; overwrites if called again)
        // 5. Emit vote_cast event
    }

    /// Submit an innocence proof during a voting tie.
    ///
    /// Eligibility:
    ///   - Player must be alive and a tied top-vote candidate this round.
    ///   - Max 1 submission per player per round (nullifier enforced).
    ///   - First submission per game is free; subsequent require proof_fee payment.
    ///   - Only CLEAN players can produce a valid proof (circuit rejects infected).
    ///
    /// TODO: Issue #45
    pub fn submit_innocence_proof(
        env: Env,
        player: Address,
        room_id: u64,
        commitment: String,
        nullifier: String,  // H(secret, roomId, round) — unique per player/round
        zk_proof: String,
    ) {
        player.require_auth();
        // TODO: Issue #45
        // 1. Verify phase is Voting AND a tie has been detected this round
        // 2. Verify player is one of the tied top-vote candidates
        // 3. Verify nullifier has not been used in this room before
        // 4. Call ZKVerifier to verify zk_proof against commitment + nullifier
        // 5. If player.free_proof_used == false:
        //      mark free_proof_used = true (no charge)
        //    else:
        //      charge proof_fee from player, add to pot
        // 6. Mark proof as accepted for this round (used in resolve_round)
        // 7. Add nullifier to UsedNullifiers(room_id) set
        // 8. Increment player.proofs_submitted_total
    }

    /// Resolve round after voting phase ends.
    ///
    /// Tie resolution algorithm:
    ///   1. Tally votes; find top vote count.
    ///   2. Collect tied candidates.
    ///   3. Separate into protected (valid proof this round) and unprotected.
    ///   4a. If unprotected exist → eliminate unprotected candidate
    ///       (deterministic if multiple: lowest hash(address)).
    ///   4b. If ALL tied are protected:
    ///       - No elimination this round.
    ///       - Select one deterministically: hash(roomId, round, prevTxHash) % len
    ///       - Set selected player.pending_infection_next_round = true
    ///       - Emit generic "tie_resolved" event (no role hints in payload)
    ///
    /// Endgame check (after elimination / tie resolution):
    ///   infected_alive == 0        → CleanWin     → payout clean survivors
    ///   infected_alive >= clean_alive → InfectedWin → payout infected survivors
    ///   current_round == max_rounds  → MaxRoundsDraw → survivors split pot
    ///
    /// TODO: Issue #46
    pub fn resolve_round(env: Env, room_id: u64) {
        // TODO: Issue #46
        // 1. Tally votes
        // 2. Tie resolution (see above)
        // 3. Apply pending_infection from previous round
        // 4. Run endgame check
        // 5. If game over → distribute pot to winners, set room.status = Ended
        // 6. Else → start next round (infection phase, assign new infection target)
    }

    /// Payout winners after game ends.
    /// pot_per_winner = total_pot / winners.len()
    /// Eliminated and losing-faction players receive 0.
    ///
    /// TODO: Issue #41
    pub fn distribute_pot(env: Env, room_id: u64) {
        // TODO: Issue #41
        // 1. Load room, verify status is Ended
        // 2. Identify winning faction alive players
        // 3. Transfer pot / winners.len() to each winner via token contract
        // 4. Emit pot_drained event per winner
    }
}
        // 4. Store vote (one vote per player per round)
        // 5. If all non-eliminated players voted, trigger vote resolution
    }

    /// Submit an innocence proof during a voting tie.
    ///
    /// Eligibility:
    ///   - Player must be alive and a tied top-vote candidate this round.
    ///   - Max 1 submission per player per round (nullifier enforced by UsedNullifiers set).
    ///   - First submission per game is free; subsequent require proof_fee payment.
    ///   - Only CLEAN players can produce a valid proof (ZK circuit rejects infected).
    ///
    /// TODO: Issue #45
    pub fn submit_innocence_proof(
        env: Env,
        player: Address,
        room_id: u64,
        commitment: String,
        nullifier: String,   // H(secret, roomId, round) — unique per player/round
        zk_proof: String,
    ) {
        player.require_auth();
        // TODO: Issue #45
        // 1. Verify phase is Voting AND a tie has been detected this round
        // 2. Verify player is a tied top-vote candidate
        // 3. Verify nullifier not in UsedNullifiers(room_id)
        // 4. Call ZKVerifier to verify zk_proof against commitment + nullifier
        // 5. If player.free_proof_used == false:
        //      mark free_proof_used = true (no charge)
        //    else:
        //      charge proof_fee from player, add to pot
        // 6. Store proof acceptance for this round
        // 7. Add nullifier to UsedNullifiers(room_id) set
        // 8. Increment player.proofs_submitted_total
    }

    /// Resolve round after voting phase ends.
    ///
    /// Tie resolution algorithm:
    ///   1. Tally votes; find top vote count.
    ///   2. Collect tied candidates.
    ///   3. Separate into protected (valid proof this round) and unprotected.
    ///   4a. If unprotected exist → eliminate the unprotected candidate
    ///       (deterministic if multiple: lowest hash(address)).
    ///   4b. If ALL tied are protected:
    ///       - No elimination this round.
    ///       - Select one: hash(roomId, round, prevTxHash) % len
    ///       - Set selected player.pending_infection_next_round = true
    ///       - Emit generic "tie_resolved" event (no role hints in payload).
    ///
    /// Endgame check (after elimination / tie resolution, alive counts only):
    ///   infected_alive == 0           → CleanWin      → payout clean survivors
    ///   infected_alive >= clean_alive → InfectedWin   → payout infected survivors
    ///   current_round == max_rounds   → MaxRoundsDraw → survivors split pot equally
    ///
    /// TODO: Issue #46
    pub fn resolve_round(env: Env, room_id: u64) {
        // TODO: Issue #46
        // 1. Tally votes
        // 2. Tie resolution (see above)
        // 3. Apply pending_infection from previous round if set
        // 4. Endgame check
        // 5. If game over → distribute pot to winners, set room.status = Ended
        // 6. Else → start next round (infection phase, assign new infection target)
    }

    /// Distribute pot to winning faction survivors after game ends.
    /// pot_per_winner = total_pot / winners.len()
    /// Eliminated and losing-faction players receive 0.
    /// Auto-called by resolve_round; no manual claim required.
    ///
    /// TODO: Issue #41
    pub fn distribute_pot(env: Env, room_id: u64) {
        // TODO: Issue #41
        // 1. Load room, verify status is Ended
        // 2. Identify winning faction alive players
        // 3. Transfer pot / winners.len() to each winner via token contract
        // 4. Emit pot_drained event per winner
    }

    /// Read-only: Get room state
    pub fn get_room(env: Env, room_id: u64) -> Room {
        env.storage()
            .persistent()
            .get(&DataKey::Room(room_id))
            .expect("Room not found")
    }

    /// Read-only: Get player state within a room
    pub fn get_player(env: Env, room_id: u64, player: Address) -> PlayerState {
        env.storage()
            .persistent()
            .get(&DataKey::Player(room_id, player))
            .expect("Player not found")
    }
}
