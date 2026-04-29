'use client'

import Link from 'next/link'
import { SiteNav } from '@/components/ui/site-nav'

export default function LobbyPage() {
  const activeRooms = [
    { id: 1, name: 'Genesis Lobby', players: '4/8', stake: '10 XLM', prize: '80 XLM', status: 'online' },
    { id: 2, name: 'Infection Testnet', players: '2/6', stake: '5 XLM', prize: '30 XLM', status: 'idle' },
    { id: 3, name: 'Zero Proof Squad', players: '5/10', stake: '20 XLM', prize: '200 XLM', status: 'online' },
    { id: 4, name: 'Stellar Champions', players: '6/8', stake: '15 XLM', prize: '120 XLM', status: 'online' },
    { id: 5, name: 'Noir Protocols', players: '3/8', stake: '10 XLM', prize: '80 XLM', status: 'idle' },
    { id: 6, name: 'Deduction Masters', players: '7/10', stake: '25 XLM', prize: '250 XLM', status: 'online' },
  ]

  return (
    <main className="min-h-screen">
      <SiteNav currentPath="/lobby" />

      {/* HERO HEADER - LARGE AND INVITING */}
      <section className="relative overflow-hidden px-4 py-32 border-b border-accent-purple/30">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-float-up" style={{ animationDelay: '0s' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/15 rounded-full blur-3xl animate-float-up" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-accent-lime font-mono uppercase tracking-[0.2em] font-bold text-sm">Enter The Arena</p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-black leading-tight text-text-primary">
              Active <span className="bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent">Rooms</span>
            </h1>
          </div>
          <p className="text-xl sm:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Create a new room or join an existing game. Choose your strategy, stake your assets, and compete for real rewards.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[380px_1fr] gap-12">
            {/* CREATE ROOM PANEL - PROMINENT AND INVITING */}
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-purple to-accent-pink rounded-2xl opacity-0 group-hover:opacity-100 transition-all blur" />
                <div className="card-premium p-10 space-y-8 relative rounded-2xl border-2 border-accent-purple/40">
                  <div>
                    <h2 className="font-display text-3xl font-bold text-text-primary mb-2">
                      Start a Game
                    </h2>
                    <p className="text-sm text-text-muted">Create a new room and invite players</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-3 font-bold">
                        Room Name
                      </label>
                      <input
                        type="text"
                        placeholder="Night Shift Lobby"
                        className="input-premium w-full rounded-lg"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-3 font-bold">
                          Players
                        </label>
                        <select className="input-premium w-full rounded-lg">
                          <option>6</option>
                          <option>8</option>
                          <option>10</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-text-muted mb-3 font-bold">
                          Stake
                        </label>
                        <select className="input-premium w-full rounded-lg">
                          <option>5 XLM</option>
                          <option>10 XLM</option>
                          <option>20 XLM</option>
                        </select>
                      </div>
                    </div>

                    <button className="btn-premium w-full rounded-xl py-4 text-base font-bold shadow-premium hover:shadow-glow-purple transition-all">
                      Create Room
                    </button>

                    <button className="btn-secondary w-full rounded-xl py-4 text-base font-bold shadow-premium">
                      Connect Wallet
                    </button>
                  </div>

                  <div className="pt-4 border-t border-accent-purple/20 space-y-3">
                    <p className="text-xs text-text-muted uppercase tracking-wider font-bold">Quick Stats</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-text-muted">Your Balance</span>
                        <span className="font-bold text-accent-cyan">245.32 XLM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-text-muted">Total Wagered</span>
                        <span className="font-bold text-accent-lime">1,240 XLM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GAME ROOMS GRID */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-3xl font-bold text-text-primary">
                  Available Games
                </h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-lg border border-accent-purple/30 text-sm font-bold text-text-secondary hover:border-accent-purple/60 transition-all">
                    Active
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-accent-purple/30 text-sm font-bold text-text-secondary hover:border-accent-purple/60 transition-all">
                    All
                  </button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {activeRooms.map((room) => (
                  <div
                    key={room.id}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-purple to-accent-pink rounded-xl opacity-0 group-hover:opacity-100 transition-all blur" />
                    <Link
                      href={`/game`}
                      className="card-premium p-8 space-y-6 group-hover:scale-105 transition-transform relative rounded-xl border-2 border-accent-purple/30 group-hover:border-accent-purple/80 block h-full"
                    >
                      {/* Room Header */}
                      <div className="flex items-start justify-between">
                        <div className="space-y-2 flex-1">
                          <h3 className="font-display text-2xl font-bold text-text-primary">
                            {room.name}
                          </h3>
                          <p className="text-sm text-text-muted flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${room.status === 'online' ? 'bg-accent-lime animate-pulse' : 'bg-text-muted'}`} />
                            {room.status === 'online' ? 'Live Now' : 'Waiting'}
                          </p>
                        </div>
                        <div className="text-2xl">🎮</div>
                      </div>

                      {/* Player Progress */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-text-muted">Players</span>
                          <span className="font-bold text-accent-cyan">{room.players}</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-accent-purple/20">
                          <div className="h-full rounded-full bg-gradient-to-r from-accent-purple to-accent-pink w-[60%]" />
                        </div>
                      </div>

                      {/* Stats Row */}
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="bg-accent-purple/10 rounded-lg p-3 text-center">
                          <p className="text-xs text-text-muted mb-1">Stake</p>
                          <p className="font-bold text-accent-cyan">{room.stake}</p>
                        </div>
                        <div className="bg-accent-lime/10 rounded-lg p-3 text-center">
                          <p className="text-xs text-text-muted mb-1">Prize Pool</p>
                          <p className="font-bold text-accent-lime">{room.prize}</p>
                        </div>
                      </div>

                      {/* CTA */}
                      <button className="w-full py-3 rounded-lg bg-gradient-to-r from-accent-purple to-accent-pink font-bold uppercase tracking-wide text-sm group-hover:shadow-glow-purple transition-all mt-4">
                        Join Game
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="px-4 py-24 border-t border-accent-purple/30 bg-gradient-to-b from-accent-purple/5 to-transparent">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="font-display text-4xl font-bold text-center text-text-primary">
            How to Play
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Create or Join', desc: 'Start a new room or enter an active game with other players.' },
              { num: '2', title: 'Stake & Play', desc: 'Place your XLM stake and prepare for three rounds of strategy.' },
              { num: '3', title: 'Win & Earn', desc: 'Outwit your opponents and claim your share of the prize pool.' },
            ].map((step) => (
              <div key={step.num} className="card-premium p-8 rounded-xl space-y-4 border-2 border-accent-purple/30 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-purple to-accent-pink mx-auto flex items-center justify-center">
                  <span className="font-display text-3xl font-bold text-white">{step.num}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-text-primary">{step.title}</h3>
                <p className="text-text-secondary text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
