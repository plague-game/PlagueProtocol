import Link from 'next/link'
import { HeroScene } from '@/components/game/illustrations'
import { SiteNav } from '@/components/ui/site-nav'

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20">
        <SiteNav currentPath="/" />

        {/* Hero Section */}
        <section className="grid gap-12 lg:grid-cols-[1fr_0.6fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-mono uppercase tracking-wider text-accent-purple">
                Social deduction on Stellar
              </p>
              <h1 className="max-w-2xl font-display text-5xl leading-tight sm:text-6xl text-text-primary">
                Infect The Room
              </h1>
              <p className="max-w-lg text-base text-text-secondary">
                A decentralized game where you hunt for Patient Zero or spread the plague before the truth is revealed.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/lobby"
                className="px-6 py-2 text-sm font-bold uppercase border-2 border-accent-red text-accent-red hover:bg-accent-red hover:text-white transition-colors"
              >
                Play Now
              </Link>
              <Link
                href="/leaderboard"
                className="px-6 py-2 text-sm font-bold uppercase border-2 border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white transition-colors"
              >
                Leaderboard
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="scale-75 origin-top-right">
              <HeroScene />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="space-y-6">
          <h2 className="font-display text-2xl text-text-primary">How It Works</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="border border-gray-700 bg-bg-secondary p-6 rounded-lg">
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent-red mb-2">Phase 1</h3>
              <p className="text-sm text-text-secondary">Create or join a game room. Stake your assets and prepare for deduction.</p>
            </div>
            <div className="border border-gray-700 bg-bg-secondary p-6 rounded-lg">
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent-yellow mb-2">Phase 2</h3>
              <p className="text-sm text-text-secondary">Vote and discuss to identify the infected player among you.</p>
            </div>
            <div className="border border-gray-700 bg-bg-secondary p-6 rounded-lg">
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent-purple mb-2">Phase 3</h3>
              <p className="text-sm text-text-secondary">Submit ZK proofs to reveal your status and win the game.</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border border-gray-700 bg-bg-secondary p-8 rounded-lg">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <div>
              <p className="font-display text-3xl text-accent-red">8 Players</p>
              <p className="mt-2 text-xs font-mono uppercase tracking-wider text-text-muted">per round</p>
            </div>
            <div>
              <p className="font-display text-3xl text-accent-yellow">3 Phases</p>
              <p className="mt-2 text-xs font-mono uppercase tracking-wider text-text-muted">per game</p>
            </div>
            <div>
              <p className="font-display text-3xl text-accent-purple">ZK Proofs</p>
              <p className="mt-2 text-xs font-mono uppercase tracking-wider text-text-muted">verified on-chain</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="space-y-6">
          <div className="border border-accent-green bg-bg-secondary p-8 rounded-lg">
            <h2 className="font-display text-2xl text-text-primary mb-3">Ready to Play?</h2>
            <p className="text-sm text-text-secondary mb-6 max-w-lg">
              Join the network of players hunting for Patient Zero. Connect your Stellar wallet and start playing today.
            </p>
            <Link
              href="/lobby"
              className="inline-block px-6 py-3 text-sm font-bold uppercase border-2 border-accent-green text-accent-green hover:bg-accent-green hover:text-black transition-colors"
            >
              Enter Lobby
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
