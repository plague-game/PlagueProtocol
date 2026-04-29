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
    <header className="card-brutal rise-in bg-plague-white/95 px-4 py-3 backdrop-blur sm:px-5">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center border-3 border-plague-black bg-plague-red font-display text-2xl text-plague-white shadow-brutal">
            P
          </div>
          <div>
            <p className="font-display text-3xl leading-none">PlagueProtocol</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-plague-black/70">
              social deduction on stellar
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => {
            const isActive = currentPath === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  'btn-brutal px-4 py-2 text-xs sm:text-sm',
                  isActive
                    ? 'bg-plague-black text-plague-white'
                    : 'bg-plague-white text-plague-black',
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
