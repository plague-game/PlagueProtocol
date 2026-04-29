import { SiteNav } from '@/components/ui/site-nav'

export default function GamePage({ params }: { params: { roomId: string } }) {
  return (
    <main className="min-h-screen p-4 sm:p-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <SiteNav currentPath="/game" />

        <header className="stage-panel card-brutal rise-in bg-plague-red p-5 text-plague-white sm:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-block border-3 border-plague-white px-2 py-1 font-mono text-xs uppercase tracking-[0.2em]">
                Match Preview
              </p>
              <h1 className="mt-3 font-display text-5xl leading-none sm:text-7xl">ROUND 1</h1>
            </div>
            <div className="border-3 border-plague-white bg-plague-black p-3 font-mono text-sm">
              <p>Room: alpha-7</p>
              <p>Timer: 00:48</p>
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[0.25fr_1fr_0.32fr]">
          <aside className="hud-panel rise-in bg-plague-white p-4" style={{ animationDelay: '90ms' }}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-plague-black/70">Telemetry</p>
            <div className="mt-4 space-y-3 font-mono text-sm">
              <div className="border-3 border-plague-black bg-plague-yellow p-3">
                <p className="text-[10px] uppercase tracking-[0.16em]">Pot</p>
                <p className="mt-1 font-display text-4xl leading-none">84</p>
              </div>
              <div className="border-3 border-plague-black bg-plague-white p-3">
                <p className="text-[10px] uppercase tracking-[0.16em]">Infected</p>
                <p className="mt-1 font-display text-4xl leading-none">2</p>
              </div>
              <div className="border-3 border-plague-black bg-plague-white p-3">
                <p className="text-[10px] uppercase tracking-[0.16em]">Proof window</p>
                <p className="mt-1 font-display text-4xl leading-none">18s</p>
              </div>
            </div>
          </aside>

          <article className="hud-panel rise-in bg-plague-black p-5 text-plague-white" style={{ animationDelay: '110ms' }}>
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-3xl leading-none">Containment Board</h2>
              <span className="border-3 border-plague-white px-2 py-1 font-mono text-xs uppercase tracking-[0.18em]">
                zone delta
              </span>
            </div>

            <div className="mt-5 rounded-[32px] border-3 border-plague-white bg-[#1c1714] p-4 sm:p-6">
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {['A1', 'B2', 'C3', 'D4', 'E5', 'F6', 'G7', 'H8'].map((player, index) => (
                <button
                  key={player}
                  className={`player-token h-20 w-full font-mono text-base ${
                    index === 2 ? 'infected' : index === 6 ? 'eliminated' : 'clean'
                  }`}
                >
                  {player}
                </button>
              ))}
            </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <div className="rounded-[20px] border-3 border-plague-white bg-plague-white p-4 text-plague-black">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em]">Evidence log</p>
                  <ul className="mt-2 space-y-2 font-mono text-sm">
                    <li>C3 flagged by consensus heatmap.</li>
                    <li>E5 submitted innocence proof.</li>
                    <li>Drain trigger pending vote finality.</li>
                  </ul>
                </div>
                <div className="rounded-[20px] border-3 border-plague-white bg-plague-red p-4 text-plague-white">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em]">Phase</p>
                  <p className="mt-2 font-display text-4xl leading-none">DISCUSS</p>
                  <p className="mt-2 font-mono text-sm text-plague-white/85">Players coordinate off-chain, settle on-chain.</p>
                </div>
              </div>
            </div>
          </article>

          <article className="card-brutal rise-in bg-plague-black p-5 text-plague-white" style={{ animationDelay: '190ms' }}>
            <h3 className="font-display text-3xl leading-none">Vote Panel</h3>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em]">Select suspected Patient Zero</p>
            <div className="mt-4 space-y-2 font-mono text-sm">
              <button className="btn-brutal w-full bg-plague-white px-3 py-2 text-plague-black">Vote A1</button>
              <button className="btn-brutal w-full bg-plague-white px-3 py-2 text-plague-black">Vote C3</button>
              <button className="btn-brutal w-full bg-plague-white px-3 py-2 text-plague-black">Vote F6</button>
            </div>
            <p className="mt-4 border-3 border-plague-white p-3 font-mono text-xs">
              Contract integration pending: vote submission, tally, and elimination settlement.
            </p>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="card-brutal rise-in bg-plague-yellow p-5" style={{ animationDelay: '260ms' }}>
            <h4 className="font-display text-3xl leading-none">Round Feed</h4>
            <ul className="mt-4 space-y-2 font-mono text-sm">
              <li className="border-3 border-plague-black bg-plague-white p-2">[00:12] Discussion opened for 60 seconds.</li>
              <li className="border-3 border-plague-black bg-plague-white p-2">[00:29] Player D4 cast a vote.</li>
              <li className="border-3 border-plague-black bg-plague-white p-2">[00:44] Infection phase locked for proof submission.</li>
            </ul>
          </article>

          <article className="hud-panel rise-in p-5" style={{ animationDelay: '320ms' }}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-plague-black/70">Team roster</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {['AM', 'ZR', 'NX', 'KQ', 'VT', 'RA'].map((player) => (
                <div key={player} className="avatar-chip">
                  {player}
                </div>
              ))}
            </div>
            <p className="mt-4 font-mono text-sm opacity-75">
              This mock presents how connected player presence, vote state, and proof readiness can live in one round surface.
            </p>
          </article>
        </section>
      </div>
    </main>
  )
}
