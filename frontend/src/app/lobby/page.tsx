import { LobbyPosters } from '@/components/game/illustrations'
import { SiteNav } from '@/components/ui/site-nav'
import { WalletPanel } from '@/components/wallet/wallet-panel'

export default function LobbyPage() {
  return (
    <main className="min-h-screen p-4 sm:p-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <SiteNav currentPath="/lobby" />

        <header className="rise-in space-y-4">
          <p className="inline-block border-2 border-accent-purple px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-accent-purple glow-purple">
            Lobby Control Panel
          </p>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="font-display text-5xl leading-tight sm:text-6xl lg:text-7xl text-text-primary">
              ACTIVE ROOMS
            </h1>
            <p className="max-w-md border-2 border-gray-700 bg-bg-secondary p-4 font-mono text-sm text-text-secondary rounded-lg glow-purple">
              Connected to Stellar network. Room creation and participation flows sync with backend APIs and Soroban contracts.
            </p>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <article className="hud-panel rise-in bg-bg-secondary p-6 border-accent-red glow-red rounded-lg" style={{ animationDelay: '120ms' }}>
              <h2 className="font-display text-3xl leading-tight text-text-primary">Create Room</h2>
              <div className="mt-6 space-y-4">
                <input
                  className="input-brutal w-full border-accent-red focus:border-accent-red"
                  value="Night Shift"
                  readOnly
                  aria-label="Room name"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    className="input-brutal border-accent-yellow focus:border-accent-yellow"
                    value="6 players"
                    readOnly
                    aria-label="Max players"
                  />
                  <input
                    className="input-brutal border-accent-purple focus:border-accent-purple"
                    value="10 XLM"
                    readOnly
                    aria-label="Stake"
                  />
                </div>
                <button className="btn-brutal w-full border-accent-red px-4 py-3 font-mono text-accent-red bg-accent-red/10 hover:bg-accent-red hover:text-white glow-red">
                  Create Room
                </button>
                <button className="btn-brutal w-full border-accent-purple px-4 py-3 font-mono text-accent-purple bg-accent-purple/10 hover:bg-accent-purple hover:text-white glow-purple">
                  Connect Freighter
                </button>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="border-2 border-accent-red p-4 rounded-lg glow-red bg-bg-tertiary">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent-red">Stake</p>
                  <p className="mt-3 font-display text-3xl leading-tight text-text-primary">10</p>
                </div>
                <div className="border-2 border-accent-yellow p-4 rounded-lg glow-yellow bg-bg-tertiary">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent-yellow">Rounds</p>
                  <p className="mt-3 font-display text-3xl leading-tight text-text-primary">7</p>
                </div>
                <div className="border-2 border-accent-purple p-4 rounded-lg glow-purple bg-bg-tertiary">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent-purple">Mode</p>
                  <p className="mt-3 font-display text-3xl leading-tight text-text-primary">ZK</p>
                </div>
              </div>
            </article>

            <WalletPanel variant="dark" />
          </div>

          <article className="hud-panel rise-in p-6 border-accent-yellow glow-yellow rounded-lg" style={{ animationDelay: '200ms' }}>
            <div className="flex items-end justify-between gap-4 mb-6">
              <h2 className="font-display text-3xl leading-tight text-text-primary">Join Existing</h2>
              <span className="border-2 border-accent-yellow px-3 py-2 font-mono text-xs text-accent-yellow rounded bg-bg-tertiary">3 rooms online</span>
            </div>
            <ul className="space-y-3 font-mono text-sm">
              <li className="grid gap-4 border-2 border-accent-green bg-bg-tertiary p-4 sm:grid-cols-[1fr_auto_auto] sm:items-center rounded-lg glow-green">
                <div>
                  <span className="font-bold text-text-primary">Genesis Lobby</span>
                  <p className="mt-1 text-xs text-text-muted">Fast room for onboarding testers</p>
                </div>
                <span className="flex items-center gap-2 text-text-secondary"><span className="status-dot online" />4 / 8</span>
                <button className="btn-brutal border-accent-green px-3 py-2 text-xs text-accent-green bg-accent-green/10 hover:bg-accent-green hover:text-black glow-green">Join</button>
              </li>
              <li className="grid gap-4 border-2 border-accent-yellow bg-bg-tertiary p-4 sm:grid-cols-[1fr_auto_auto] sm:items-center rounded-lg glow-yellow">
                <div>
                  <span className="font-bold text-text-primary">Infection Testnet</span>
                  <p className="mt-1 text-xs text-text-muted">Contract event replay room</p>
                </div>
                <span className="flex items-center gap-2 text-text-secondary"><span className="status-dot idle" />2 / 6</span>
                <button className="btn-brutal border-accent-yellow px-3 py-2 text-xs text-accent-yellow bg-accent-yellow/10 hover:bg-accent-yellow hover:text-black glow-yellow">Spectate</button>
              </li>
              <li className="grid gap-4 border-2 border-accent-red bg-bg-tertiary p-4 sm:grid-cols-[1fr_auto_auto] sm:items-center rounded-lg glow-red">
                <div>
                  <span className="font-bold text-text-primary">Zero Proof Squad</span>
                  <p className="mt-1 text-xs text-text-muted">Noir proof pipeline dry run</p>
                </div>
                <span className="flex items-center gap-2 text-text-secondary"><span className="status-dot alert" />5 / 10</span>
                <button className="btn-brutal border-accent-red px-3 py-2 text-xs text-accent-red bg-accent-red/10 hover:bg-accent-red hover:text-white glow-red">Queue</button>
              </li>
            </ul>
          </article>
        </section>

        <section className="rise-in" style={{ animationDelay: '250ms' }}>
          <LobbyPosters />
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="hud-panel rise-in bg-bg-secondary p-6 border-accent-green glow-green rounded-lg" style={{ animationDelay: '300ms' }}>
            <h3 className="font-display text-3xl leading-tight text-text-primary">Integration Roadmap</h3>
            <p className="mt-4 font-mono text-sm text-text-secondary">
              Next milestone connects wallet state, room creation, and participation flows to backend APIs, then moves stake escrow and room state transitions into Soroban contracts.
            </p>
          </article>

          <article className="hud-panel rise-in bg-bg-secondary p-6 border-accent-purple glow-purple rounded-lg" style={{ animationDelay: '380ms' }}>
            <p className="font-mono text-xs uppercase tracking-widest text-accent-purple">Party Queue</p>
            <div className="mt-6 flex flex-wrap gap-4">
              {['AM', 'ZR', 'NX', 'KQ', 'VT'].map((player) => (
                <div key={player} className="avatar-chip border-accent-purple glow-purple">
                  {player}
                </div>
              ))}
            </div>
            <p className="mt-6 font-mono text-sm text-text-muted">Players appear here once wallet auth and room subscriptions are connected.</p>
          </article>
        </section>
      </div>
    </main>
  )
}
