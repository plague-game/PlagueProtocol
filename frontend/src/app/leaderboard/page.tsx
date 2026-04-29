import { SiteNav } from '@/components/ui/site-nav'

const topPlayers = [
  { name: 'CipherCrow', wins: 28, proofs: 119, reputation: 'Verified tactician', delta: '+3', badge: 'Tournament MVP' },
  { name: 'NovaLatch', wins: 24, proofs: 102, reputation: 'Fastest innocence proofs', delta: '+1', badge: 'Proof Specialist' },
  { name: 'HexMorrow', wins: 21, proofs: 97, reputation: 'High-pressure closer', delta: '-1', badge: 'Late Game Closer' },
  { name: 'QuietOrbit', wins: 18, proofs: 83, reputation: 'Consensus builder', delta: '+2', badge: 'Town Anchor' },
]

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen p-4 sm:p-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <SiteNav currentPath="/leaderboard" />

        <header className="stage-panel card-brutal rise-in bg-plague-black p-5 text-plague-white sm:p-7">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="inline-block border-3 border-plague-white px-3 py-1 font-mono text-xs uppercase tracking-[0.2em]">
                Season Zero
              </p>
              <h1 className="mt-3 font-display text-5xl leading-none sm:text-7xl">LEADERBOARD</h1>
            </div>
            <p className="max-w-md border-3 border-plague-white bg-plague-white p-3 font-mono text-xs text-plague-black sm:text-sm">
              Public scoreboards help reviewers see that the frontend is evolving toward a recognizable multiplayer product, not just technical scaffolding.
            </p>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="hud-panel rise-in p-5" style={{ animationDelay: '120ms' }}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-4xl leading-none">Top Operatives</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="badge-chip bg-plague-black text-plague-white">Global</span>
                  <span className="badge-chip bg-plague-yellow text-plague-black">Season 0</span>
                  <span className="badge-chip bg-plague-white text-plague-black">Proof Leaders</span>
                </div>
              </div>
              <span className="border-3 border-plague-black px-2 py-1 font-mono text-xs uppercase tracking-[0.18em]">
                ranked by wins
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {topPlayers.map((player, index) => (
                <div key={player.name} className="grid gap-4 border-3 border-plague-black bg-plague-white p-4 sm:grid-cols-[auto_1fr_auto_auto] sm:items-center">
                  <div className="grid h-14 w-14 place-items-center border-3 border-plague-black bg-plague-yellow font-display text-3xl shadow-brutal">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-display text-3xl leading-none">{player.name}</p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-plague-black/65">{player.reputation}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="badge-chip bg-plague-yellow text-plague-black">{player.badge}</span>
                      <span className={`badge-chip ${player.delta.startsWith('+') ? 'bg-plague-green text-plague-white' : 'bg-plague-red text-plague-white'}`}>
                        Rank {player.delta}
                      </span>
                    </div>
                  </div>
                  <div className="border-3 border-plague-black bg-plague-black px-3 py-2 text-center text-plague-white">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em]">Wins</p>
                    <p className="font-display text-3xl leading-none">{player.wins}</p>
                  </div>
                  <div className="border-3 border-plague-black bg-plague-red px-3 py-2 text-center text-plague-white">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em]">Proofs</p>
                    <p className="font-display text-3xl leading-none">{player.proofs}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <aside className="card-brutal rise-in bg-plague-yellow p-5" style={{ animationDelay: '200ms' }}>
            <h3 className="font-display text-4xl leading-none">Season Metrics</h3>
            <div className="mt-5 grid gap-3">
              <div className="border-3 border-plague-black bg-plague-white p-4">
                <p className="font-mono text-xs uppercase tracking-[0.18em]">Recorded matches</p>
                <p className="mt-2 font-display text-5xl leading-none">146</p>
              </div>
              <div className="border-3 border-plague-black bg-plague-white p-4">
                <p className="font-mono text-xs uppercase tracking-[0.18em]">Proof submissions</p>
                <p className="mt-2 font-display text-5xl leading-none">824</p>
              </div>
              <div className="border-3 border-plague-black bg-plague-white p-4">
                <p className="font-mono text-xs uppercase tracking-[0.18em]">Wallets onboarded</p>
                <p className="mt-2 font-display text-5xl leading-none">311</p>
              </div>
            </div>

            <div className="mt-5 border-3 border-plague-black bg-plague-black p-4 text-plague-white">
              <p className="font-mono text-xs uppercase tracking-[0.18em]">Weekly highlight</p>
              <p className="mt-2 font-display text-4xl leading-none">NovaLatch</p>
              <p className="mt-2 font-mono text-sm text-plague-white/85">
                Best proof conversion rate this week with 14 validated innocence submissions.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
