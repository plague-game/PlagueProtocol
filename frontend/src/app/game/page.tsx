'use client'

import { SiteNav } from '@/components/ui/site-nav'
import Link from 'next/link'

export default function GamePage() {
  const players = [
    { id: 1, name: 'Player1', status: 'voted', color: 'purple' },
    { id: 2, name: 'You', status: 'voting', color: 'cyan' },
    { id: 3, name: 'Player3', status: 'idle', color: 'pink' },
    { id: 4, name: 'Player4', status: 'idle', color: 'lime' },
    { id: 5, name: 'Player5', status: 'voted', color: 'coral' },
    { id: 6, name: 'Player6', status: 'idle', color: 'purple' },
    { id: 7, name: 'Player7', status: 'voted', color: 'cyan' },
    { id: 8, name: 'Player8', status: 'idle', color: 'pink' },
  ]

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      purple: 'shadow-glow-purple border-accent-purple/50',
      cyan: 'shadow-glow-cyan border-accent-cyan/50',
      pink: 'border-accent-pink/50',
      lime: 'border-accent-lime/50',
      coral: 'shadow-glow-coral border-accent-coral/50',
    }
    return colors[color] || colors.purple
  }

  return (
    <main className="min-h-screen">
      <SiteNav currentPath="/game" />

      {/* Game Header */}
      <section className="border-b border-accent-purple/30 px-4 py-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-8">
            <div className="space-y-3">
              <p className="text-accent-lime font-mono uppercase tracking-widest font-bold text-sm">Live Game</p>
              <h1 className="font-display text-5xl sm:text-6xl font-bold text-text-primary">
                Genesis Lobby
              </h1>
              <p className="text-lg text-text-muted font-mono uppercase tracking-wider">Phase 2: Vote & Discuss</p>
            </div>
            <div className="card-premium px-10 py-8 text-center rounded-xl border-2 border-accent-cyan/40">
              <p className="text-xs font-mono uppercase tracking-wider text-text-muted font-bold">Time Remaining</p>
              <p className="font-display text-5xl text-accent-cyan mt-3">02:34</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Game Area */}
      <section className="px-4 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Circular Player Grid */}
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            {/* Center Board - LARGE AND PROMINENT */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-[480px] h-[480px] rounded-full border-4 border-accent-purple/40 flex items-center justify-center shadow-lg">
                {/* Center Circle */}
                <div className="absolute w-40 h-40 rounded-full border-4 border-accent-cyan/60 bg-accent-cyan/10 flex items-center justify-center shadow-glow-cyan">
                  <div className="text-center space-y-3">
                    <p className="text-sm font-mono uppercase tracking-wider text-text-muted font-bold">Phase</p>
                    <p className="font-display text-6xl text-accent-cyan">2</p>
                  </div>
                </div>

                {/* Players arranged in circle */}
                {players.map((player, index) => {
                  const angle = (index / players.length) * 2 * Math.PI
                  const radius = 180
                  const x = radius * Math.cos(angle)
                  const y = radius * Math.sin(angle)

                  return (
                    <div
                      key={player.id}
                      style={{
                        position: 'absolute',
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <div className={`card-premium p-5 w-24 text-center border-3 rounded-xl ${getColorClass(player.color)} transition-all hover:scale-125 group`}>
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-purple to-accent-pink mx-auto mb-3 flex items-center justify-center text-sm font-bold shadow-lg">
                            P{player.id}
                          </div>
                          <p className="text-xs font-bold text-text-primary truncate">
                            {player.name}
                          </p>
                          {player.status === 'voted' && (
                            <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent-lime rounded-full flex items-center justify-center text-[10px]">
                              ✓
                            </span>
                          )}
                          {player.status === 'voting' && (
                            <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent-cyan rounded-full animate-pulse" />
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Sidebar - PROMINENT */}
            <div className="w-full lg:w-96 space-y-8">
              {/* Vote Panel */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-purple to-accent-pink rounded-2xl opacity-0 group-hover:opacity-100 transition-all blur" />
                <div className="card-premium p-8 space-y-6 relative rounded-2xl border-2 border-accent-purple/40">
                  <h2 className="font-display text-2xl font-bold text-text-primary">
                    Vote Now
                  </h2>
                  <div className="space-y-3">
                    {players.slice(0, 4).map((player) => (
                      <button
                        key={player.id}
                        className="w-full p-4 rounded-xl border-2 border-accent-purple/30 bg-accent-purple/8 hover:bg-accent-purple/20 hover:border-accent-purple/60 transition-all text-left group/item"
                      >
                        <p className="text-sm font-bold text-text-primary group-hover/item:text-accent-cyan">{player.name}</p>
                        <p className="text-xs text-text-muted">Player {player.id}</p>
                      </button>
                    ))}
                  </div>
                  <button className="btn-premium w-full rounded-xl py-4 font-bold">
                    Submit Vote
                  </button>
                </div>
              </div>

              {/* Chat Section */}
              <div className="card-premium p-8 space-y-6 max-h-96 flex flex-col rounded-2xl border-2 border-accent-cyan/40">
                <h2 className="font-display text-2xl font-bold text-text-primary">
                  Discussion
                </h2>
                <div className="flex-1 space-y-4 overflow-y-auto">
                  <div className="bg-accent-purple/15 p-4 rounded-xl border-l-4 border-accent-purple">
                    <p className="text-xs font-bold text-accent-purple mb-2 uppercase tracking-wider">Player3</p>
                    <p className="text-sm text-text-secondary">Something seems off about Player5...</p>
                  </div>
                  <div className="bg-accent-cyan/15 p-4 rounded-xl border-l-4 border-accent-cyan">
                    <p className="text-xs font-bold text-accent-cyan mb-2 uppercase tracking-wider">You</p>
                    <p className="text-sm text-text-secondary">I agree, let's vote them out</p>
                  </div>
                  <div className="bg-accent-pink/15 p-4 rounded-xl border-l-4 border-accent-pink">
                    <p className="text-xs font-bold text-accent-pink mb-2 uppercase tracking-wider">Player6</p>
                    <p className="text-sm text-text-secondary">Wait, I think player5 is innocent!</p>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="input-premium w-full rounded-xl"
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="card-premium p-6 text-center space-y-3 rounded-xl border-2 border-accent-cyan/40">
                  <p className="text-xs font-mono uppercase text-text-muted font-bold">Votes Cast</p>
                  <p className="font-display text-3xl font-bold text-accent-cyan">6/8</p>
                </div>
                <div className="card-premium p-6 text-center space-y-3 rounded-xl border-2 border-accent-lime/40">
                  <p className="text-xs font-mono uppercase text-text-muted font-bold">Your Vote</p>
                  <p className="font-display text-2xl font-bold text-accent-lime">P5</p>
                </div>
                <div className="card-premium p-6 text-center space-y-3 rounded-xl border-2 border-accent-pink/40">
                  <p className="text-xs font-mono uppercase text-text-muted font-bold">Stake</p>
                  <p className="font-display text-2xl font-bold text-accent-pink">10</p>
                </div>
              </div>

              {/* Actions */}
              <Link
                href="/lobby"
                className="btn-secondary w-full rounded-xl py-4 block text-center font-bold"
              >
                Back to Lobby
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
