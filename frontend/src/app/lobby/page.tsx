import { SiteNav } from '@/components/ui/site-nav'

export default function LobbyPage() {
  const rooms = [
    { name: 'Genesis Lobby', players: '4/8', status: 'online' },
    { name: 'Infection Testnet', players: '2/6', status: 'idle' },
    { name: 'Zero Proof Squad', players: '5/10', status: 'alert' },
  ]

  return (
    <main className="min-h-screen px-4 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-16">
        <SiteNav currentPath="/lobby" />

        <header className="space-y-2">
          <h1 className="font-display text-4xl sm:text-5xl text-text-primary">Active Rooms</h1>
          <p className="text-sm text-text-secondary">Create a new game or join an existing room.</p>
        </header>

        <section className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          {/* Create Room Card */}
          <div className="space-y-4">
            <h2 className="font-display text-xl text-text-primary">Create Room</h2>
            <div className="border border-gray-700 bg-bg-secondary p-6 rounded-lg space-y-4">
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Night Shift"
                  className="w-full border border-gray-700 bg-bg-tertiary px-3 py-2 text-sm text-text-primary placeholder-text-muted rounded focus:outline-none focus:border-accent-red"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="6 players"
                    className="border border-gray-700 bg-bg-tertiary px-3 py-2 text-sm text-text-primary placeholder-text-muted rounded focus:outline-none focus:border-accent-yellow"
                  />
                  <input
                    type="text"
                    placeholder="10 XLM"
                    className="border border-gray-700 bg-bg-tertiary px-3 py-2 text-sm text-text-primary placeholder-text-muted rounded focus:outline-none focus:border-accent-purple"
                  />
                </div>
              </div>
              <button className="w-full border border-accent-red px-4 py-2 text-sm font-bold uppercase text-accent-red hover:bg-accent-red hover:text-white transition-colors">
                Create Room
              </button>
              <button className="w-full border border-accent-purple px-4 py-2 text-sm font-bold uppercase text-accent-purple hover:bg-accent-purple hover:text-white transition-colors">
                Connect Wallet
              </button>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                <div className="text-center">
                  <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">Stake</p>
                  <p className="font-display text-2xl text-text-primary">10</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">Max Players</p>
                  <p className="font-display text-2xl text-text-primary">8</p>
                </div>
              </div>
            </div>
          </div>

          {/* Join Room Card */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl text-text-primary">Join a Room</h2>
              <span className="text-xs font-mono text-text-muted">{rooms.length} online</span>
            </div>
            <div className="space-y-3">
              {rooms.map((room) => (
                <div key={room.name} className="border border-gray-700 bg-bg-secondary p-4 rounded-lg flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-bold text-text-primary">{room.name}</p>
                    <p className="text-xs text-text-muted mt-1">{room.players} players</p>
                  </div>
                  <button className="ml-4 border border-accent-green px-3 py-1 text-xs font-bold uppercase text-accent-green hover:bg-accent-green hover:text-black transition-colors">
                    Join
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
