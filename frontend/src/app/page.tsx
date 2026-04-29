import Link from 'next/link'
import { SiteNav } from '@/components/ui/site-nav'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SiteNav currentPath="/" />

      {/* HERO SECTION - MASSIVE AND CAPTIVATING */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
        {/* Animated dramatic background */}
        <div className="absolute inset-0 -z-10 w-full h-full">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent-purple/30 rounded-full blur-3xl" style={{ animation: 'float-up 6s ease-in-out infinite' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/25 rounded-full blur-3xl" style={{ animation: 'float-up 6s ease-in-out infinite 1.5s' }} />
          <div className="absolute top-1/2 -right-32 w-96 h-96 bg-accent-pink/15 rounded-full blur-3xl" />
          <div className="absolute -top-32 right-1/3 w-80 h-80 bg-accent-lime/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center gap-16">
          {/* Super Eye-catching Badge */}
          <div className="flex justify-center w-full">
            <div className="card-premium px-8 py-4 rounded-lg">
              <p className="font-mono text-sm uppercase tracking-widest font-bold text-accent-cyan">
                ⚡ The Game Begins Now
              </p>
            </div>
          </div>

          {/* MASSIVE HERO HEADING - CENTERED */}
          <h1 className="font-display text-7xl sm:text-8xl lg:text-9xl font-black leading-tight w-full text-center">
            <span className="bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan bg-clip-text text-transparent block">
              Infect
            </span>
            <span className="bg-gradient-to-r from-accent-cyan via-accent-lime to-accent-purple bg-clip-text text-transparent block">
              The Room
            </span>
          </h1>

          {/* Rich Description - CENTERED */}
          <div className="space-y-6 w-full max-w-2xl flex flex-col items-center">
            <p className="text-xl sm:text-2xl text-foreground-secondary leading-relaxed font-light text-center">
              A decentralized social deduction game where strategy, deception, and cryptographic proof collide. Hunt for Patient Zero or spread the plague before the truth is revealed.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-accent-purple to-accent-pink" />
          </div>

          {/* BOLD CTA BUTTONS - CENTERED */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full">
            <Link href="/lobby" className="btn-premium rounded-lg px-10 py-5 text-lg font-bold hover:shadow-glow-purple transition-all transform hover:-translate-y-1 text-center">
              Play Now
            </Link>
            <Link href="#features" className="btn-secondary rounded-lg px-10 py-5 text-lg font-bold hover:shadow-glow-cyan transition-all transform hover:-translate-y-1 text-center">
              Explore Game
            </Link>
          </div>

          {/* PREMIUM STATS SHOWCASE - CENTERED */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-3xl pt-12">
            <div className="card-premium p-8 rounded-lg space-y-4 border-2 border-accent-cyan/40 flex flex-col items-center text-center">
              <div className="text-5xl">🎮</div>
              <p className="font-display text-5xl font-bold text-accent-cyan">8</p>
              <p className="text-xs font-mono uppercase tracking-widest text-foreground-muted">Players Per Game</p>
            </div>
            <div className="card-premium p-8 rounded-lg space-y-4 border-2 border-accent-lime/40 flex flex-col items-center text-center">
              <div className="text-5xl">⚙️</div>
              <p className="font-display text-5xl font-bold text-accent-lime">3</p>
              <p className="text-xs font-mono uppercase tracking-widest text-foreground-muted">Strategic Phases</p>
            </div>
            <div className="card-premium p-8 rounded-lg space-y-4 border-2 border-accent-purple/40 flex flex-col items-center text-center">
              <div className="text-5xl">🔐</div>
              <p className="font-display text-5xl font-bold text-accent-purple">ZK</p>
              <p className="text-xs font-mono uppercase tracking-widest text-foreground-muted">Cryptographic Proof</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION - HOW IT WORKS */}
      <section id="features" className="w-full py-32 px-6 bg-gradient-to-b from-transparent via-accent-purple/8 to-transparent">
        <div className="w-full max-w-7xl mx-auto space-y-24">
          {/* Section Header */}
          <div className="w-full flex flex-col items-center gap-6">
            <p className="text-accent-cyan font-mono uppercase tracking-widest font-bold text-sm">How The Game Works</p>
            <h2 className="font-display text-6xl sm:text-7xl font-black text-foreground leading-tight text-center max-w-4xl">
              Three Phases of <span className="bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">Deception</span>
            </h2>
            <p className="text-xl text-foreground-secondary text-center max-w-2xl">
              Master the art of social deduction in a strategic, blockchain-verified game
            </p>
          </div>

          {/* Phase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { phase: '01', icon: '🎮', title: 'Room Creation', desc: 'Create or join a game room. Connect your wallet and stake your assets. Gather your adversaries.' },
              { phase: '02', icon: '💬', title: 'Vote & Discuss', desc: 'Discuss with players and vote to identify who is infected. Strategy, deception, and intuition collide.' },
              { phase: '03', icon: '🔐', title: 'ZK Proofs', desc: 'Submit cryptographic proofs to prove your innocence on-chain. The truth is revealed, winners earn.' },
            ].map((item, idx) => (
              <div
                key={item.phase}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-purple to-accent-pink rounded-lg opacity-0 group-hover:opacity-100 transition-all blur" />
                <div className="card-premium p-10 space-y-6 group-hover:scale-105 transition-transform relative rounded-lg border-2 border-accent-purple/30 group-hover:border-accent-purple/80">
                  <div className="flex items-start justify-between">
                    <div className="text-5xl">{item.icon}</div>
                    <p className="font-mono text-4xl font-black text-accent-cyan/20">
                      {item.phase}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-foreground-secondary text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="h-1 w-12 bg-gradient-to-r from-accent-purple to-accent-pink group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GAME MECHANICS - FEATURE SHOWCASE */}
      <section className="w-full py-32 px-6">
        <div className="w-full max-w-7xl mx-auto space-y-24">
          {/* Section Header */}
          <div className="w-full flex flex-col items-center gap-6">
            <p className="text-accent-lime font-mono uppercase tracking-widest font-bold text-sm">Core Features</p>
            <h2 className="font-display text-6xl sm:text-7xl font-black text-foreground leading-tight text-center max-w-4xl">
              Built for <span className="bg-gradient-to-r from-accent-cyan to-accent-lime bg-clip-text text-transparent">Strategy</span>
            </h2>
            <p className="text-xl text-foreground-secondary text-center max-w-2xl">
              Advanced game mechanics powered by blockchain technology
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {[
              {
                icon: '🎭',
                title: 'Dynamic Roles',
                desc: 'Be assigned as either a Citizen hunting for Patient Zero, or the infected trying to hide in plain sight. Every game is unique.',
                color: 'from-accent-purple to-accent-pink'
              },
              {
                icon: '🔐',
                title: 'ZK Cryptography',
                desc: 'Use Noir zero-knowledge proofs to prove your innocence without revealing your role. Privacy meets transparency.',
                color: 'from-accent-cyan to-accent-lime'
              },
              {
                icon: '💰',
                title: 'Stake & Earn',
                desc: 'Stake your XLM tokens with confidence. Winners claim the escrow pool. Fair, transparent, on-chain settlement.',
                color: 'from-accent-coral to-accent-pink'
              },
              {
                icon: '⛓️',
                title: 'Smart Contracts',
                desc: 'Powered by Stellar Soroban. Trustless, automated game settlement with immutable on-chain records.',
                color: 'from-accent-lime to-accent-cyan'
              },
            ].map((feature, idx) => (
              <div
                key={feature.title}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-50 transition-all blur rounded-lg from-accent-purple to-accent-pink" />
                <div className="card-premium p-10 space-y-6 group-hover:translate-y-[-4px] transition-all relative rounded-lg border-2 border-transparent group-hover:border-accent-purple/50">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform bg-gradient-to-br from-accent-purple/20 to-accent-pink/20">
                    {feature.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-foreground-secondary text-base leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                  <div className={`h-1 w-12 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-500`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - LARGE AND DRAMATIC */}
      <section className="w-full py-40 px-6 bg-gradient-to-b from-accent-purple/12 via-accent-cyan/8 to-transparent relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10 w-full h-full">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent-cyan/15 rounded-full blur-3xl" />
        </div>

        <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-12">
          <div className="space-y-6 w-full flex flex-col items-center">
            <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl font-black text-foreground leading-tight text-center">
              Ready to Join the <span className="bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">Battle</span>?
            </h2>
            <p className="text-2xl text-foreground-secondary text-center max-w-2xl">
              Step into a world of deception, strategy, and cryptographic proof. Play now and compete for real rewards.
            </p>
          </div>

          <div className="h-1 w-24 bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan" />

          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full">
            <Link href="/lobby" className="btn-premium rounded-lg px-12 py-6 text-lg font-bold hover:shadow-glow-purple transition-all transform hover:-translate-y-2 text-center">
              Play Now
            </Link>
            <Link href="/leaderboard" className="btn-secondary rounded-lg px-12 py-6 text-lg font-bold hover:shadow-glow-cyan transition-all transform hover:-translate-y-2 text-center">
              View Leaderboard
            </Link>
          </div>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl">
            <div className="space-y-3 flex flex-col items-center text-center">
              <p className="font-display text-4xl font-bold text-accent-cyan">1.2K+</p>
              <p className="text-sm text-foreground-muted uppercase tracking-wider">Active Players</p>
            </div>
            <div className="space-y-3 flex flex-col items-center text-center">
              <p className="font-display text-4xl font-bold text-accent-lime">847</p>
              <p className="text-sm text-foreground-muted uppercase tracking-wider">Games Played</p>
            </div>
            <div className="space-y-3 flex flex-col items-center text-center">
              <p className="font-display text-4xl font-bold text-accent-purple">$420K</p>
              <p className="text-sm text-foreground-muted uppercase tracking-wider">Total Wagered</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
