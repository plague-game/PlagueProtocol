import Link from 'next/link'
import { SiteNav } from '@/components/ui/site-nav'

export default function LobbyPage() {
  const activeRooms = [
    { id: 1, name: 'Genesis Lobby', players: '4/8', status: 'online', theme: 'purple' },
    { id: 2, name: 'Infection Testnet', players: '2/6', status: 'idle', theme: 'cyan' },
    { id: 3, name: 'Zero Proof Squad', players: '5/10', status: 'alert', theme: 'lime' },
    { id: 4, name: 'Stellar Champions', players: '6/8', status: 'online', theme: 'pink' },
    { id: 5, name: 'Noir Protocols', players: '3/8', status: 'idle', theme: 'coral' },
    { id: 6, name: 'Deduction Masters', players: '7/10', status: 'online', theme: 'purple' },
  ]

  const getAccentColor = (theme: string) => {
    const colors: Record<string, { accent: string; glow: string }> = {
      purple: { accent: 'accent-purple', glow: 'shadow-glow-purple' },
      cyan: { accent: 'accent-cyan', glow: 'shadow-glow-cyan' },
      lime: { accent: 'accent-lime', glow: 'shadow-glow-lime' },
      pink: { accent: 'accent-pink', glow: 'shadow-glow-purple' },
      coral: { accent: 'accent-coral', glow: 'shadow-glow-coral' },
    }
    return colors[theme] || colors.purple
  }

  return (
    <main className="min-h-screen">
      <SiteNav currentPath="/lobby" />

      {/* Hero Header */}
      <section className="relative overflow-hidden px-4 py-16 sm:py-24 border-b border-accent-purple/30">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-text-primary">
            Active Rooms
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Create a new room or join an existing game. Choose your strategy and compete for the prize pool.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[350px_1fr] gap-12">
            {/* Create Room Panel */}
            <div className="space-y-6">
              <div className="card-premium p-8 space-y-6">
                <div>
                  <h2 className="font-display text-2xl font-bold text-text-primary mb-2">
                    Start a Game
                  </h2>
                  <p className="text-sm text-text-muted">Set up a new room</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                      Room Name
                    </label>
                    <input
                      type="text"
                      placeholder="Night Shift Lobby"
                      className="input-premium w-full"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                        Players
                      </label>
                      <input
                        type="text"
                        placeholder="6"
                        className="input-premium w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
                        Stake
                      </label>
                      <input
                        type="text"
                        placeholder="10 XLM"
                        className="input-premium w-full"
                      />
                    </div>
                  </div>

                  <button className="btn-premium w-full rounded-lg">
                    Create Room
                  </button>

                  <button className="btn-secondary w-full rounded-lg">
                    Connect Wallet
                  </button>
                </div>

                {/* Stats */}
                <div className="border-t border-accent-purple/30 pt-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono uppercase tracking-wider text-text-muted">Skill Level</span>
                    <span className="font-display text-lg text-accent-purple">Intermediate</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono uppercase tracking-wider text-text-muted">Rounds</span>
                    <span className="font-display text-lg text-accent-cyan">7</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-text-muted">Your Stats</h3>
                <div className="card-premium p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-text-secondary">Games Played</span>
                    <span className="font-bold text-accent-cyan">24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-text-secondary">Win Rate</span>
                    <span className="font-bold text-accent-lime">62%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-text-secondary">Total Earnings</span>
                    <span className="font-bold text-accent-pink">245.8 XLM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Games Grid */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl font-bold text-text-primary">
                  Join a Game
                </h2>
                <span className="text-sm text-text-muted">{activeRooms.length} rooms available</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {activeRooms.map((room) => {
                  const colors = getAccentColor(room.theme)
                  return (
                    <div
                      key={room.id}
                      className={`card-premium p-6 group hover:scale-105 transition-transform cursor-pointer space-y-4 border-2 border-${colors.accent}/50`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h3 className="font-display text-xl font-bold text-text-primary group-hover:text-accent-purple transition-colors">
                            {room.name}
                          </h3>
                          <p className={`text-xs font-mono uppercase tracking-wider text-${colors.accent}`}>
                            {room.status === 'online' && '🟢 Active'}
                            {room.status === 'idle' && '🟡 Waiting'}
                            {room.status === 'alert' && '🔴 Joining'}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-display text-lg text-accent-cyan">{room.players}</p>
                          <p className="text-xs text-text-muted">players</p>
                        </div>
                      </div>

                      <div className="h-1 w-8 bg-gradient-to-r from-accent-purple to-accent-pink group-hover:w-full transition-all" />

                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="space-y-1">
                          <p className="text-xs font-mono uppercase tracking-wider text-text-muted">Stake</p>
                          <p className="font-display text-lg text-text-primary">10 XLM</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-mono uppercase tracking-wider text-text-muted">Prize</p>
                          <p className="font-display text-lg text-accent-lime">80 XLM</p>
                        </div>
                      </div>

                      <Link
                        href={`/game?room=${room.id}`}
                        className="btn-secondary w-full rounded-lg mt-4 block text-center"
                      >
                        Join Game
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-4 py-16 border-t border-accent-purple/30 bg-gradient-to-r from-accent-purple/5 via-accent-cyan/5 to-accent-pink/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-display text-3xl font-bold text-text-primary">
            First Time Playing?
          </h2>
          <p className="text-lg text-text-secondary">
            Learn the rules and strategies before joining a competitive game.
          </p>
          <Link href="/#features" className="btn-secondary rounded-lg inline-block">
            Read the Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
