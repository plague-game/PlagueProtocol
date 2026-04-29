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
    <header className="hud-panel rise-in bg-bg-secondary px-5 py-4 backdrop-blur border-accent-purple glow-purple rounded-lg">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="grid h-14 w-14 place-items-center border-2 border-accent-red bg-accent-red/10 font-display text-2xl text-accent-red rounded-lg glow-red">
            P
          </div>
          <div>
            <p className="font-display text-2xl leading-tight text-text-primary">PlagueProtocol</p>
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mt-1">
              social deduction on stellar
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-3">
          {navItems.map((item) => {
            const isActive = currentPath === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  'btn-brutal px-4 py-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wide transition-all',
                  isActive
                    ? 'border-accent-purple bg-accent-purple/20 text-accent-purple glow-purple'
                    : 'border-gray-600 bg-bg-tertiary text-text-secondary hover:border-accent-purple hover:text-accent-purple',
                ].join(' ')}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
