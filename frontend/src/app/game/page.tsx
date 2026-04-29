import { MatchArenaGraphic } from '@/components/game/illustrations'
import { SiteNav } from '@/components/ui/site-nav'

export default function GamePage() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SiteNav currentPath="/game" />

        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl text-text-primary">Round 1</h1>
            <p className="mt-2 text-sm text-text-secondary">Discuss & vote phase</p>
          </div>
          <div className="text-right border border-gray-700 bg-bg-secondary px-4 py-2 rounded-lg">
            <p className="font-mono text-xs text-text-muted">Room alpha-7</p>
            <p className="font-mono text-sm text-text-primary mt-1">00:48</p>
          </div>
        </div>

        <section className="grid gap-8 lg:grid-cols-[80px_1fr_120px]">
          {/* Telemetry Sidebar */}
          <div className="space-y-3">
            <div className="border border-gray-700 bg-bg-secondary p-3 rounded-lg text-center">
              <p className="text-xs font-mono text-text-muted mb-1">Pot</p>
              <p className="font-display text-2xl text-accent-yellow">84</p>
            </div>
            <div className="border border-gray-700 bg-bg-secondary p-3 rounded-lg text-center">
              <p className="text-xs font-mono text-text-muted mb-1">Infected</p>
              <p className="font-display text-2xl text-accent-red">2</p>
            </div>
            <div className="border border-gray-700 bg-bg-secondary p-3 rounded-lg text-center">
              <p className="text-xs font-mono text-text-muted mb-1">Proofs</p>
              <p className="font-display text-2xl text-accent-green">18s</p>
            </div>
          </div>

          {/* Game Board */}
          <div className="space-y-6">
            <div className="scale-75 origin-center -m-12">
              <MatchArenaGraphic />
            </div>
            <div className="space-y-4">
              <p className="text-xs font-mono uppercase tracking-wider text-text-muted">Players</p>
              <div className="grid grid-cols-4 gap-2">
                {['A1', 'B2', 'C3', 'D4', 'E5', 'F6', 'G7', 'H8'].map((player, index) => (
                  <button
                    key={player}
                    className={`h-12 font-mono text-xs font-bold border rounded transition-colors ${
                      index === 2 
                        ? 'bg-accent-red text-white border-accent-red' 
                        : index === 6 
                        ? 'bg-gray-700 text-gray-400 border-gray-700'
                        : 'border-gray-700 text-text-secondary hover:border-accent-yellow'
                    }`}
                  >
                    {player}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Vote Panel */}
          <div className="space-y-4">
            <h2 className="font-display text-lg text-text-primary">Vote</h2>
            <div className="space-y-2">
              {['A1', 'C3', 'F6'].map((player) => (
                <button
                  key={player}
                  className="w-full border border-accent-red px-3 py-2 text-xs font-bold uppercase text-accent-red hover:bg-accent-red hover:text-white transition-colors rounded"
                >
                  {player}
                </button>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 mt-4">
              <p className="text-xs text-text-muted">Phase: Discuss</p>
              <p className="text-xs text-text-muted mt-2">Time: 48 seconds left</p>
            </div>
          </div>
        </section>

        {/* Activity Feed */}
        <section className="border border-gray-700 bg-bg-secondary p-6 rounded-lg">
          <h2 className="font-display text-xl text-text-primary mb-4">Activity</h2>
          <ul className="space-y-3 text-xs text-text-secondary font-mono">
            <li>[00:12] Discussion phase started (60 sec)</li>
            <li>[00:29] Player D4 voted for C3</li>
            <li>[00:44] Locked for proof submission</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
