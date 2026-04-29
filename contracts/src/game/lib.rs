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

    /// Submit an innocence proof during the Discussion phase.
    ///
    /// Submission window: Discussion phase ONLY. Closes when Voting opens.
    /// This is a deliberate strategic gamble — player commits before seeing
    /// who will accumulate the most votes.
    ///
    /// Eligibility:
    ///   - Player must be alive.
    ///   - Phase must be Discussion (not Voting, Reveal, or any other).
    ///   - Max 1 submission per player per round (nullifier-enforced).
    ///   - First submission per game is free; subsequent require proof_fee.
    ///   - Only CLEAN players can produce a valid proof (circuit rejects infected).
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
        // 1. Verify phase is Discussion
        // 2. Verify player is alive
        // 3. Verify nullifier not in UsedNullifiers(room_id)
        // 4. Call ZKVerifier to verify zk_proof against commitment + nullifier
        // 5. If player.free_proof_used == false:
        //      mark free_proof_used = true (no charge)
        //    else:
        //      charge proof_fee from player, add to pot
        // 6. Record that player has active proof this round
        // 7. Add nullifier to UsedNullifiers(room_id) set
        // 8. Increment player.proofs_submitted_total
        // 9. Emit proof_submitted event (address visible, proof details not)
    }

    /// Resolve round after voting phase ends.
    ///
    /// Proof window already closed when voting began. Resolution uses
    /// whatever proofs players chose to submit during discussion.
    ///
    /// Vote resolution algorithm:
    ///   1. Tally votes (absent/no-vote counts as self-vote, see below).
    ///   2. Find top vote count. Collect all players at that count.
    ///
    ///   Case A — single top candidate, no proof:
    ///     Eliminate the player. Emit player_eliminated.
    ///
    ///   Case B — single top candidate, has active proof:
    ///     Player is saved. Emit player_saved_by_proof (address known,
    ///     public message only — no outcome reason). No elimination.
    ///     Normal system infection continues next round.
    ///
    ///   Case C — tied candidates, at least one has no proof:
    ///     Eliminate the unprotected candidate.
    ///     If multiple unprotected: deterministic — lowest hash(address).
    ///     Protected candidates survive. Emit player_eliminated + vote_resolved.
    ///
    ///   Case D — tied candidates, ALL have active proofs:
    ///     Nobody eliminated. Immediately infect one tied player at random:
    ///       target = tied[ hash(roomId, round, prevTxHash) % len(tied) ]
    ///     Emit infection_assigned (private) to target.
    ///     Emit generic vote_resolved to room (no proof hints, no names).
    ///
    /// Absent vote handling:
    ///   Player who did not cast a vote before timer expired:
    ///   their vote is cast for the current leading target (most votes so far);
    ///   if no leading target yet, treated as a vote for themselves.
    ///   This prevents infected players colluding via mass abstention.
    ///
    /// Endgame check (after case resolution, alive counts only):
    ///   infected_alive == 0           → CleanWin
    ///   infected_alive >= clean_alive → InfectedWin  (includes 1v1)
    ///   current_round == max_rounds   → InfectedWin  (clean ran out of time)
    ///
    /// TODO: Issue #46
    pub fn resolve_round(env: Env, room_id: u64) {
        // TODO: Issue #46
        // 1. Apply absent-vote rule
        // 2. Tally votes, determine resolution case (A/B/C/D above)
        // 3. Apply elimination or infection accordingly
        // 4. Run endgame check
        // 5. If game over → distribute pot to winners, set room.status = Ended
        // 6. Else → start next round (assign system infection for new round)
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
