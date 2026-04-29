export type PlayerStatus = 'clean' | 'infected' | 'eliminated'
export type RoomStatus = 'waiting' | 'starting' | 'active' | 'ended'
export type RoundPhase = 'infection' | 'discussion' | 'voting' | 'reveal' | 'ended'
export type GameOutcome = 'clean_win' | 'infected_win' | 'max_rounds_draw'

/**
 * Win conditions (checked after every Reveal phase, alive counts only):
 *   clean_win    : infected_alive === 0
 *   infected_win : infected_alive >= clean_alive  (includes 1v1)
 *   max_rounds_draw: max_rounds reached without either above
 */

export type GameEventType =
  | 'player_joined'
  | 'player_left'
  | 'game_started'
  | 'round_started'
  | 'phase_changed'
  | 'vote_cast'
  | 'player_eliminated'
  | 'player_infected'          // private — only sent to the infected player
  | 'proof_window_open'        // broadcast: pre-generate window started
  | 'tie_detected'             // broadcast: tie found, proof submissions open
  | 'tie_resolved'             // broadcast: generic resolution, no role hints
  | 'infection_assigned'       // private — only sent to newly infected player
  | 'game_ended'
  | 'pot_drained'

export interface GameEvent {
  type: GameEventType
  roomId: string
  payload: Record<string, unknown>
  timestamp: number
}
