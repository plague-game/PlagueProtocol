import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/lobby', label: 'Lobby' },
  { href: '/game', label: 'Match' },
  { href: '/leaderboard', label: 'Leaderboard' },
] as const

type SiteNavProps = {
  currentPath: string
}

export function SiteNav({ currentPath }: SiteNavProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-accent-purple/30">
      <div className="mx-auto px-6 py-4 max-w-7xl">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center font-display text-xl font-bold text-white shadow-glow-purple">
              P
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-lg font-bold text-text-primary">PlagueProtocol</p>
              <p className="font-mono text-xs text-text-muted">Social Deduction Game</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPath === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'bg-accent-purple/30 text-accent-purple shadow-glow-purple border border-accent-purple/50'
                      : 'text-text-secondary hover:text-accent-cyan hover:bg-accent-cyan/10 border border-transparent'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Connect Wallet Button */}
          <button className="btn-premium px-4 py-2 text-xs hidden sm:block">
            Connect
          </button>
        </div>
      </div>
    </header>
  )
}
