import { MatchArenaGraphic } from '@/components/game/illustrations'
import { SiteNav } from '@/components/ui/site-nav'

export default function GamePage({ params }: { params: { roomId: string } }) {
  return (
    <main className="min-h-screen p-4 sm:p-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <SiteNav currentPath="/game" />

        <header className="rise-in space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-block border-2 border-accent-red px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-accent-red glow-red">
                Match Preview
              </p>
              <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl lg:text-7xl text-text-primary">ROUND 1</h1>
            </div>
            <div className="border-2 border-accent-yellow bg-bg-secondary p-4 font-mono text-sm text-text-secondary rounded-lg glow-yellow">
              <p>Room: alpha-7</p>
              <p>Timer: 00:48</p>
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[0.25fr_1fr_0.3fr]">
          <aside className="hud-panel rise-in bg-bg-secondary p-5 border-accent-yellow glow-yellow rounded-lg" style={{ animationDelay: '110ms' }}>
            <p className="font-mono text-xs uppercase tracking-widest text-accent-yellow">Telemetry</p>
            <div className="mt-6 space-y-4 font-mono text-sm">
              <div className="border-2 border-accent-yellow bg-bg-tertiary p-4 rounded-lg glow-yellow">
                <p className="text-xs uppercase tracking-widest text-accent-yellow">Pot</p>
                <p className="mt-2 font-display text-4xl leading-tight text-text-primary">84</p>
              </div>
              <div className="border-2 border-accent-red bg-bg-tertiary p-4 rounded-lg glow-red">
                <p className="text-xs uppercase tracking-widest text-accent-red">Infected</p>
                <p className="mt-2 font-display text-4xl leading-tight text-text-primary">2</p>
              </div>
              <div className="border-2 border-accent-green bg-bg-tertiary p-4 rounded-lg glow-green">
                <p className="text-xs uppercase tracking-widest text-accent-green">Proof Window</p>
                <p className="mt-2 font-display text-4xl leading-tight text-text-primary">18s</p>
              </div>
            </div>
          </aside>

          <article className="hud-panel rise-in bg-bg-secondary p-6 border-accent-purple glow-purple rounded-lg" style={{ animationDelay: '130ms' }}>
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="font-display text-3xl leading-tight text-text-primary">Containment Board</h2>
              <span className="border-2 border-accent-purple px-3 py-2 font-mono text-xs uppercase tracking-widest text-accent-purple rounded bg-bg-tertiary">
                zone delta
              </span>
            </div>

            <div className="mb-6">
              <MatchArenaGraphic />
            </div>

            <div className="rounded-lg border-2 border-accent-purple bg-bg-tertiary p-6 glow-purple">
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 mb-6">
                {['A1', 'B2', 'C3', 'D4', 'E5', 'F6', 'G7', 'H8'].map((player, index) => (
                  <button
                    key={player}
                    className={`player-token h-16 w-full font-mono text-sm ${
                      index === 2 ? 'infected' : index === 6 ? 'eliminated' : 'clean'
                    }`}
                  >
                    {player}
                  </button>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border-2 border-accent-green bg-bg-tertiary p-4 glow-green">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent-green">Evidence Log</p>
                  <ul className="mt-3 space-y-2 font-mono text-sm text-text-secondary">
                    <li>C3 flagged by consensus heatmap.</li>
                    <li>E5 submitted innocence proof.</li>
                    <li>Drain trigger pending vote finality.</li>
                  </ul>
                </div>
                <div className="rounded-lg border-2 border-accent-red bg-bg-tertiary p-4 glow-red">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent-red">Phase</p>
                  <p className="mt-2 font-display text-4xl leading-tight text-text-primary">DISCUSS</p>
                  <p className="mt-2 font-mono text-sm text-text-muted">Players coordinate off-chain, settle on-chain.</p>
                </div>
              </div>
            </div>
          </article>

          <article className="hud-panel rise-in bg-bg-secondary p-6 border-accent-red glow-red rounded-lg" style={{ animationDelay: '200ms' }}>
            <h3 className="font-display text-3xl leading-tight text-text-primary">Vote Panel</h3>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-accent-red">Select Suspected Patient Zero</p>
            <div className="mt-6 space-y-3 font-mono text-sm">
              <button className="btn-brutal w-full border-accent-red px-3 py-2 text-accent-red bg-accent-red/10 hover:bg-accent-red hover:text-white glow-red">Vote A1</button>
              <button className="btn-brutal w-full border-accent-red px-3 py-2 text-accent-red bg-accent-red/10 hover:bg-accent-red hover:text-white glow-red">Vote C3</button>
              <button className="btn-brutal w-full border-accent-red px-3 py-2 text-accent-red bg-accent-red/10 hover:bg-accent-red hover:text-white glow-red">Vote F6</button>
            </div>
            <p className="mt-4 border-2 border-accent-yellow p-3 font-mono text-xs text-text-muted rounded bg-bg-tertiary">
              Contract integration pending: vote submission, tally, and settlement.
            </p>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="hud-panel rise-in bg-bg-secondary p-6 border-accent-yellow glow-yellow rounded-lg" style={{ animationDelay: '270ms' }}>
            <h4 className="font-display text-3xl leading-tight text-text-primary">Round Feed</h4>
            <ul className="mt-4 space-y-2 font-mono text-sm">
              <li className="border-2 border-accent-yellow bg-bg-tertiary p-3 text-text-secondary rounded">[00:12] Discussion opened for 60 seconds.</li>
              <li className="border-2 border-accent-yellow bg-bg-tertiary p-3 text-text-secondary rounded">[00:29] Player D4 cast a vote.</li>
              <li className="border-2 border-accent-yellow bg-bg-tertiary p-3 text-text-secondary rounded">[00:44] Infection phase locked for proof submission.</li>
            </ul>
          </article>

          <article className="hud-panel rise-in bg-bg-secondary p-6 border-accent-green glow-green rounded-lg" style={{ animationDelay: '340ms' }}>
            <p className="font-mono text-xs uppercase tracking-widest text-accent-green">Team Roster</p>
            <div className="mt-6 flex flex-wrap gap-4">
              {['AM', 'ZR', 'NX', 'KQ', 'VT', 'RA'].map((player) => (
                <div key={player} className="avatar-chip border-accent-green glow-green">
                  {player}
                </div>
              ))}
            </div>
            <p className="mt-6 font-mono text-sm text-text-muted">
              This surface shows connected player presence, vote state, and proof readiness in one match view.
            </p>
          </article>
        </section>
      </div>
    </main>
  )
}
