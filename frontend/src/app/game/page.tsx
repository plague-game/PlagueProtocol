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
      <section className="border-b border-accent-purple/30 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="font-display text-4xl font-bold text-text-primary">
                Genesis Lobby
              </h1>
              <p className="text-sm text-text-muted mt-2">Phase 2: Vote & Discuss</p>
            </div>
            <div className="card-premium px-6 py-4 text-center">
              <p className="text-xs font-mono uppercase tracking-wider text-text-muted">Time Remaining</p>
              <p className="font-display text-3xl text-accent-cyan mt-1">02:34</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Game Area */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Circular Player Grid */}
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Center Board */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-96 h-96 rounded-full border-2 border-accent-purple/30 flex items-center justify-center">
                {/* Center Circle */}
                <div className="absolute w-24 h-24 rounded-full border-2 border-accent-cyan/50 bg-accent-cyan/5 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xs font-mono uppercase tracking-wider text-text-muted">Phase</p>
                    <p className="font-display text-2xl text-accent-cyan">2</p>
                  </div>
                </div>

                {/* Players arranged in circle */}
                {players.map((player, index) => {
                  const angle = (index / players.length) * 2 * Math.PI
                  const radius = 140
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
                      <div className={`card-premium p-4 w-20 text-center border-2 ${getColorClass(player.color)} transition-all hover:scale-110`}>
                        <div className="relative">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple to-accent-pink mx-auto mb-2 flex items-center justify-center text-xs font-bold">
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

            {/* Right Sidebar */}
            <div className="w-full lg:w-80 space-y-6">
              {/* Vote Panel */}
              <div className="card-premium p-6 space-y-4">
                <h2 className="font-display text-xl font-bold text-text-primary">
                  Vote Now
                </h2>
                <div className="space-y-2">
                  {players.slice(0, 4).map((player) => (
                    <button
                      key={player.id}
                      className="w-full p-3 rounded-lg border border-accent-purple/30 bg-accent-purple/5 hover:bg-accent-purple/15 transition-all text-left"
                    >
                      <p className="text-sm font-bold text-text-primary">{player.name}</p>
                      <p className="text-xs text-text-muted">Player {player.id}</p>
                    </button>
                  ))}
                </div>
                <button className="btn-premium w-full rounded-lg">
                  Submit Vote
                </button>
              </div>

              {/* Chat Section */}
              <div className="card-premium p-6 space-y-4 max-h-80 flex flex-col">
                <h2 className="font-display text-lg font-bold text-text-primary">
                  Discussion
                </h2>
                <div className="flex-1 space-y-3 overflow-y-auto">
                  <div className="bg-accent-purple/10 p-3 rounded-lg">
                    <p className="text-xs font-bold text-accent-purple mb-1">Player3</p>
                    <p className="text-sm text-text-secondary">Something seems off about Player5...</p>
                  </div>
                  <div className="bg-accent-cyan/10 p-3 rounded-lg">
                    <p className="text-xs font-bold text-accent-cyan mb-1">You</p>
                    <p className="text-sm text-text-secondary">I agree, let's vote them out</p>
                  </div>
                  <div className="bg-accent-pink/10 p-3 rounded-lg">
                    <p className="text-xs font-bold text-accent-pink mb-1">Player6</p>
                    <p className="text-sm text-text-secondary">Wait, I think player5 is innocent!</p>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="input-premium w-full"
                />
              </div>

              {/* Stats */}
              <div className="card-premium p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono uppercase text-text-muted">Votes Cast</span>
                  <span className="font-bold text-accent-cyan">6/8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono uppercase text-text-muted">Your Vote</span>
                  <span className="font-bold text-accent-lime">Player5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono uppercase text-text-muted">Stake</span>
                  <span className="font-bold text-accent-pink">10 XLM</span>
                </div>
              </div>

              {/* Actions */}
              <Link
                href="/lobby"
                className="btn-secondary w-full rounded-lg block text-center"
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
