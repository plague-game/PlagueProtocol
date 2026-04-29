import { SiteNav } from '@/components/ui/site-nav'

const topPlayers = [
  { name: 'CipherCrow', wins: 28, proofs: 119, reputation: 'Verified tactician', delta: '+3', badge: 'Tournament MVP' },
  { name: 'NovaLatch', wins: 24, proofs: 102, reputation: 'Fastest innocence proofs', delta: '+1', badge: 'Proof Specialist' },
  { name: 'HexMorrow', wins: 21, proofs: 97, reputation: 'High-pressure closer', delta: '-1', badge: 'Late Game Closer' },
  { name: 'QuietOrbit', wins: 18, proofs: 83, reputation: 'Consensus builder', delta: '+2', badge: 'Town Anchor' },
]

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <SiteNav currentPath="/leaderboard" />

        <header className="space-y-2">
          <h1 className="font-display text-4xl sm:text-5xl text-text-primary">Leaderboard</h1>
          <p className="text-sm text-text-secondary">Season Zero Rankings</p>
        </header>

        <section className="space-y-6">
          <div className="space-y-3">
            {topPlayers.map((player, index) => (
              <div key={player.name} className="border border-gray-700 bg-bg-secondary p-4 rounded-lg flex items-center gap-4">
                <div className="text-center font-display text-xl text-accent-yellow w-10 flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-text-primary">{player.name}</p>
                  <p className="text-xs text-text-muted mt-1">{player.reputation}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-display text-text-primary">{player.wins}</p>
                  <p className="text-xs text-text-muted">wins</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-display text-text-primary">{player.proofs}</p>
                  <p className="text-xs text-text-muted">proofs</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Season Stats */}
        <section className="grid gap-4 sm:grid-cols-3">
          <div className="border border-gray-700 bg-bg-secondary p-6 rounded-lg text-center">
            <p className="font-display text-3xl text-text-primary">146</p>
            <p className="text-xs font-mono uppercase tracking-wider text-text-muted mt-2">Matches</p>
          </div>
          <div className="border border-gray-700 bg-bg-secondary p-6 rounded-lg text-center">
            <p className="font-display text-3xl text-text-primary">824</p>
            <p className="text-xs font-mono uppercase tracking-wider text-text-muted mt-2">Proofs</p>
          </div>
          <div className="border border-gray-700 bg-bg-secondary p-6 rounded-lg text-center">
            <p className="font-display text-3xl text-text-primary">311</p>
            <p className="text-xs font-mono uppercase tracking-wider text-text-muted mt-2">Players</p>
          </div>
        </section>
      </div>
    </main>
  )
}
