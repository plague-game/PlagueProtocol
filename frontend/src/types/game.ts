// ─── Player ────────────────────────────────────────────────────────────────

export type PlayerStatus = 'clean' | 'infected' | 'eliminated'
export type PlayerRole = 'patient_zero' | 'infected' | 'clean' | 'unknown'

export interface Player {
  id: string
  walletAddress: string
  displayName: string
  status: PlayerStatus
  /** Only revealed at game end; clients only ever receive their own role */
  role: PlayerRole
  isEliminated: boolean
  stakedAmount: bigint
  joinedAt: number
  /**
   * Proof economy:
   * - Each player gets exactly 1 free proof per game.
   * - Additional proofs require a fee (proofFee from RoomConfig).
   * - Max 1 proof submitted per player per round (enforced by nullifier).
   * - Proofs are pre-generated client-side; submitted only during a voting
   *   tie where the player is one of the tied top-vote candidates.
   * - Only CLEAN players can generate a valid innocence proof.
   *   Infected players fail the circuit's role == ROLE_CLEAN assertion.
   */
  freeProofUsed: boolean
  proofsSubmittedTotal: number
  /**
   * Set by contract at end of a round where player survived an
   * all-protected tie. Player becomes infected at the START of the
   * following round. Backend uses this flag to assign infection.
   */
  pendingInfectionNextRound: boolean
}

// ─── Room ──────────────────────────────────────────────────────────────────

export type RoomStatus = 'waiting' | 'starting' | 'active' | 'ended'

export interface Room {
  id: string
  contractAddress: string
  hostAddress: string
  players: Player[]
  maxPlayers: number
  minPlayers: number
  stakeAmount: bigint
  status: RoomStatus
  currentRound: number
  maxRounds: number
  createdAt: number
  startedAt?: number
  endedAt?: number
}

// ─── Round ─────────────────────────────────────────────────────────────────

export type RoundPhase = 'infection' | 'discussion' | 'voting' | 'reveal' | 'ended'

export interface Round {
  number: number
  phase: RoundPhase
  /**
   * Address of player newly infected this round.
   * Assigned deterministically by backend:
   *   target = eligible_clean_players[ hash(roomId, round, prevTxHash) % count ]
   * Special case: if previous round ended in an all-protected tie, target is
   * selected from among those tied protected survivors instead.
   * Players are notified of their OWN infection status only (not who infected them).
   */
  infectedThisRound: string[]
  eliminatedThisRound: string[]
  votes: Vote[]
  /**
   * Proof submissions this round.
   * Only accepted during Voting phase when player is a tied top-vote candidate.
   * Proof is generated client-side any time before submission.
   */
  proofSubmissions: ProofSubmission[]
  /**
   * Tie resolution outcome, if a tie occurred.
   * nullifier-protected; does not reveal which player had proof.
   */
  tieResolution?: TieResolution
  drainAmount: bigint
  startedAt: number
  phaseEndsAt: number
}

// ─── Tie Resolution ────────────────────────────────────────────────────────

export type TieOutcome =
  | 'eliminated_unprotected'   // tie broken by eliminating unprotected candidate
  | 'all_protected_penalty'    // all tied had proofs; nobody eliminated, penalty applied
  | 'all_protected_infection'  // deterministic infection assigned to one tied survivor

export interface TieResolution {
  outcome: TieOutcome
  /** Addresses that were tied at top votes */
  tiedCandidates: string[]
  /**
   * Address selected for infection next round (only set when outcome
   * is all_protected_infection). Revealed only after round ends.
   */
  infectionTarget?: string
  /**
   * Generic protocol message broadcast to all players — does NOT
   * identify which players had proof protection.
   */
  publicMessage: string
}

// ─── Vote ──────────────────────────────────────────────────────────────────

export interface Vote {
  voterAddress: string
  targetAddress: string
  timestamp: number
}

// ─── ZK Proof ──────────────────────────────────────────────────────────────

export interface ZKProof {
  proof: {
    pi_a: string[]
    pi_b: string[][]
    pi_c: string[]
  }
  publicSignals: string[]
}

export interface RoleCommitment {
  commitment: string
  nullifier: string
}

/**
 * Innocence proof submission.
 * Circuit: innocence_proof.nr
 * Public:  commitment, nullifier
 * Private: role (must equal ROLE_CLEAN = 0), secret, round_number
 * Nullifier = Poseidon(secret, roomId, round) — prevents cross-round replay.
 * Infected players CANNOT produce a valid proof (circuit rejects role != 0).
 */
export interface ProofSubmission {
  playerAddress: string
  commitment: string
  /** H(secret, roomId, round) — unique per player per round */
  nullifier: string
  zkProof: ZKProof
  /** true = free proof slot used; false = paid proof (fee charged) */
  isFreeProof: boolean
  submittedAt: number
}

// ─── Endgame ───────────────────────────────────────────────────────────────

/**
 * Win conditions (checked after every Reveal phase):
 *   CLEAN_WIN  : infected_alive === 0
 *   INFECTED_WIN: infected_alive >= clean_alive (parity = inevitable spread)
 *   INFECTED_WIN: 1 infected vs 1 clean alive (parity rule, game over)
 * alive counts = ONLY currently alive players (eliminated don't count).
 */
export type GameOutcome = 'clean_win' | 'infected_win' | 'max_rounds_draw'

export interface GameResult {
  outcome: GameOutcome
  winners: string[]   // wallet addresses of winning faction alive players
  losers: string[]    // all other players
  potPerWinner: bigint
  totalPot: bigint
  rounds: number
}

// ─── Game State ────────────────────────────────────────────────────────────

export interface GameState {
  room: Room | null
  localPlayer: Player | null
  currentRound: Round | null
  result: GameResult | null
  isConnected: boolean
  isLoading: boolean
  error: string | null
}

// ─── Contract ──────────────────────────────────────────────────────────────

export interface ContractConfig {
  contractId: string
  network: 'testnet' | 'mainnet'
  rpcUrl: string
}

// ─── Events (Socket) ───────────────────────────────────────────────────────

export type GameEventType =
  | 'player_joined'
  | 'player_left'
  | 'game_started'
  | 'round_started'
  | 'phase_changed'
  | 'vote_cast'
  | 'player_eliminated'
  | 'player_infected'          // only sent to the infected player (private)
  | 'proof_window_open'        // broadcast: proof generation window started
  | 'tie_detected'             // broadcast: tie at top votes, proof submissions accepted
  | 'tie_resolved'             // broadcast: generic resolution message, no role hints
  | 'infection_assigned'       // only sent to newly infected player (private)
  | 'game_ended'
  | 'pot_drained'

export interface GameEvent {
  type: GameEventType
  roomId: string
  payload: Record<string, unknown>
  timestamp: number
}
