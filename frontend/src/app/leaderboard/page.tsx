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
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <SiteNav currentPath="/leaderboard" />

        <header className="rise-in space-y-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="inline-block border-2 border-accent-green px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-accent-green glow-green">
                Season Zero
              </p>
              <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl lg:text-7xl text-text-primary">LEADERBOARD</h1>
            </div>
            <p className="max-w-md border-2 border-gray-700 bg-bg-secondary p-4 font-mono text-sm text-text-secondary rounded-lg glow-purple">
              Leaderboards showcase player reputation, proof expertise, and seasonal achievements across the network.
            </p>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="hud-panel rise-in bg-bg-secondary p-6 border-accent-purple glow-purple rounded-lg" style={{ animationDelay: '130ms' }}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h2 className="font-display text-4xl leading-tight text-text-primary">Top Operatives</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="badge-chip border-accent-purple bg-accent-purple/10 text-accent-purple">Global</span>
                  <span className="badge-chip border-accent-yellow bg-accent-yellow/10 text-accent-yellow">Season 0</span>
                  <span className="badge-chip border-accent-green bg-accent-green/10 text-accent-green">Proof Leaders</span>
                </div>
              </div>
              <span className="border-2 border-accent-purple px-3 py-2 font-mono text-xs uppercase tracking-widest text-accent-purple rounded bg-bg-tertiary">
                ranked by wins
              </span>
            </div>

            <div className="space-y-4">
              {topPlayers.map((player, index) => (
                <div key={player.name} className="grid gap-4 border-2 border-gray-700 bg-bg-tertiary p-5 sm:grid-cols-[auto_1fr_auto_auto] sm:items-center rounded-lg hover:border-accent-purple transition-colors">
                  <div className="grid h-16 w-16 place-items-center border-2 border-accent-yellow bg-accent-yellow/10 font-display text-3xl text-accent-yellow rounded-lg glow-yellow">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-display text-3xl leading-tight text-text-primary">{player.name}</p>
                    <p className="mt-2 font-mono text-xs uppercase tracking-widest text-text-muted">{player.reputation}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="badge-chip border-accent-yellow bg-accent-yellow/10 text-accent-yellow">{player.badge}</span>
                      <span className={`badge-chip ${player.delta.startsWith('+') ? 'border-accent-green bg-accent-green/10 text-accent-green' : 'border-accent-red bg-accent-red/10 text-accent-red'}`}>
                        Rank {player.delta}
                      </span>
                    </div>
                  </div>
                  <div className="border-2 border-accent-purple bg-bg-secondary px-4 py-3 text-center rounded-lg glow-purple">
                    <p className="font-mono text-xs uppercase tracking-widest text-accent-purple">Wins</p>
                    <p className="mt-2 font-display text-3xl leading-tight text-text-primary">{player.wins}</p>
                  </div>
                  <div className="border-2 border-accent-red bg-bg-secondary px-4 py-3 text-center rounded-lg glow-red">
                    <p className="font-mono text-xs uppercase tracking-widest text-accent-red">Proofs</p>
                    <p className="mt-2 font-display text-3xl leading-tight text-text-primary">{player.proofs}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <aside className="hud-panel rise-in bg-bg-secondary p-6 border-accent-yellow glow-yellow rounded-lg" style={{ animationDelay: '200ms' }}>
            <h3 className="font-display text-4xl leading-tight text-text-primary">Season Metrics</h3>
            <div className="mt-8 grid gap-4">
              <div className="border-2 border-accent-yellow bg-bg-tertiary p-5 rounded-lg glow-yellow">
                <p className="font-mono text-xs uppercase tracking-widest text-accent-yellow">Recorded Matches</p>
                <p className="mt-3 font-display text-5xl leading-tight text-text-primary">146</p>
              </div>
              <div className="border-2 border-accent-green bg-bg-tertiary p-5 rounded-lg glow-green">
                <p className="font-mono text-xs uppercase tracking-widest text-accent-green">Proof Submissions</p>
                <p className="mt-3 font-display text-5xl leading-tight text-text-primary">824</p>
              </div>
              <div className="border-2 border-accent-purple bg-bg-tertiary p-5 rounded-lg glow-purple">
                <p className="font-mono text-xs uppercase tracking-widest text-accent-purple">Wallets Onboarded</p>
                <p className="mt-3 font-display text-5xl leading-tight text-text-primary">311</p>
              </div>
            </div>

            <div className="mt-6 border-2 border-accent-red bg-bg-tertiary p-5 rounded-lg glow-red">
              <p className="font-mono text-xs uppercase tracking-widest text-accent-red">Weekly Highlight</p>
              <p className="mt-3 font-display text-4xl leading-tight text-text-primary">NovaLatch</p>
              <p className="mt-3 font-mono text-sm text-text-muted">
                Best proof conversion rate this week with 14 validated innocence submissions.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
