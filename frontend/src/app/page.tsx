import Link from 'next/link'
import { SiteNav } from '@/components/ui/site-nav'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SiteNav currentPath="/" />

      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 py-20">
        {/* Animated background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-float-up" style={{ animationDelay: '0s' }} />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent-cyan/15 rounded-full blur-3xl animate-float-up" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-scale-in">
          {/* Badge */}
          <div className="inline-block">
            <div className="card-premium px-6 py-3">
              <p className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
                Decentralized Social Deduction Game
              </p>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight max-w-4xl mx-auto">
            <span className="bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan bg-clip-text text-transparent">
              Infect The Room
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            Deceive, deduce, and defeat in a blockchain-powered game of hidden identities. Hunt for Patient Zero or spread the plague before the truth is revealed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/lobby" className="btn-premium rounded-lg">
              Play Now
            </Link>
            <Link href="#features" className="btn-secondary rounded-lg">
              Learn More
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto">
            <div className="card-premium p-4">
              <p className="font-display text-3xl text-accent-cyan">8</p>
              <p className="text-xs text-text-muted mt-2 uppercase">Players</p>
            </div>
            <div className="card-premium p-4">
              <p className="font-display text-3xl text-accent-lime">3</p>
              <p className="text-xs text-text-muted mt-2 uppercase">Phases</p>
            </div>
            <div className="card-premium p-4">
              <p className="font-display text-3xl text-accent-purple">ZK</p>
              <p className="text-xs text-text-muted mt-2 uppercase">Proofs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-slide-in-left">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary">
              How It Works
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Three phases of deception, discussion, and proof
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { phase: '01', title: 'Room Creation', desc: 'Create or join a game room. Connect your wallet and stake your assets.' },
              { phase: '02', title: 'Vote & Discuss', desc: 'Discuss with players and vote to identify who is infected.' },
              { phase: '03', title: 'ZK Proofs', desc: 'Submit cryptographic proofs to prove your innocence on-chain.' },
            ].map((item, idx) => (
              <div
                key={item.phase}
                className="card-premium p-8 space-y-4 group hover:scale-105 transition-transform"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <p className="font-mono text-sm text-accent-cyan group-hover:text-accent-pink transition-colors">
                  Phase {item.phase}
                </p>
                <h3 className="font-display text-2xl font-bold text-text-primary">
                  {item.title}
                </h3>
                <p className="text-text-secondary">
                  {item.desc}
                </p>
                <div className="h-1 w-12 bg-gradient-to-r from-accent-purple to-accent-pink group-hover:w-full transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Mechanics */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-slide-in-right">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary">
              Game Mechanics
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-premium p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center text-2xl">
                🎭
              </div>
              <h3 className="font-display text-2xl font-bold">Roles</h3>
              <p className="text-text-secondary">
                Be assigned as either a Citizen hunting for Patient Zero, or the infected trying to hide in plain sight.
              </p>
            </div>

            <div className="card-premium p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-lime flex items-center justify-center text-2xl">
                🔐
              </div>
              <h3 className="font-display text-2xl font-bold">Cryptographic Proofs</h3>
              <p className="text-text-secondary">
                Use Noir zero-knowledge proofs to prove your innocence without revealing your role.
              </p>
            </div>

            <div className="card-premium p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-coral to-accent-pink flex items-center justify-center text-2xl">
                💰
              </div>
              <h3 className="font-display text-2xl font-bold">Stake & Earn</h3>
              <p className="text-text-secondary">
                Stake your XLM tokens. Winners claim the escrow pool. Fair, transparent, and on-chain.
              </p>
            </div>

            <div className="card-premium p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-lime to-accent-cyan flex items-center justify-center text-2xl">
                ⛓️
              </div>
              <h3 className="font-display text-2xl font-bold">Soroban Contracts</h3>
              <p className="text-text-secondary">
                Powered by Stellar Soroban smart contracts for trustless, automated game settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-accent-purple/10 via-accent-cyan/10 to-accent-pink/10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-float-up">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-primary">
            Ready to Play?
          </h2>
          <p className="text-lg text-text-secondary">
            Join thousands of players in the world's first decentralized social deduction game.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/lobby" className="btn-premium rounded-lg px-8 py-4">
              Start Playing
            </Link>
            <Link href="/leaderboard" className="btn-secondary rounded-lg px-8 py-4">
              View Rankings
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
