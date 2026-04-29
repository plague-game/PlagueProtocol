import Link from 'next/link'
import { FactionBanner, HeroScene, ModeCard } from '@/components/game/illustrations'
import { SiteNav } from '@/components/ui/site-nav'
import { WalletPanel } from '@/components/wallet/wallet-panel'

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 lg:gap-12">
        <SiteNav currentPath="/" />

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="rise-in space-y-8">
            <div>
              <p className="mb-6 inline-block border-2 border-accent-purple px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-accent-purple glow-purple">
                Stellar × Soroban × Noir
              </p>
              <h1 className="max-w-3xl font-display text-5xl leading-tight sm:text-6xl lg:text-7xl text-text-primary">
                INFECT
                <br />
                THE ROOM
              </h1>
              <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-2xl">
                A decentralized social deduction game powered by ZK proofs and Stellar smart contracts. Hunt for Patient Zero or spread the plague before the truth is revealed.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/lobby"
                className="btn-brutal border-accent-red px-8 py-3 text-base font-bold uppercase bg-accent-red/10 text-accent-red hover:bg-accent-red hover:text-white glow-red transition-all"
              >
                Enter Lobby
              </Link>
              <Link
                href="/game"
                className="btn-brutal border-accent-purple px-8 py-3 text-base font-bold uppercase bg-accent-purple/10 text-accent-purple hover:bg-accent-purple hover:text-white glow-purple transition-all"
              >
                View Game
              </Link>
              <Link
                href="/leaderboard"
                className="btn-brutal border-accent-yellow px-8 py-3 text-base font-bold uppercase bg-accent-yellow/10 text-accent-yellow hover:bg-accent-yellow hover:text-black glow-yellow transition-all"
              >
                Leaderboard
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="bg-bg-secondary border-2 border-gray-700 p-4 glow-red rounded-lg space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent-red">Room Escrow</p>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-[82%] bg-accent-red glow-red" />
                </div>
              </div>
              <div className="bg-bg-secondary border-2 border-gray-700 p-4 glow-purple rounded-lg space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent-purple">Vote Sync</p>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-[68%] bg-accent-purple glow-purple" />
                </div>
              </div>
              <div className="bg-bg-secondary border-2 border-gray-700 p-4 glow-green rounded-lg space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent-green">ZK Proofs</p>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-[56%] bg-accent-green glow-green" />
                </div>
              </div>
            </div>
          </div>

          <div className="rise-in" style={{ animationDelay: '150ms' }}>
            <HeroScene />
          </div>
        </section>

        <section className="border-2 border-gray-700 bg-bg-secondary py-4 glow-purple rounded-lg overflow-hidden" style={{ animationDelay: '150ms' }}>
          <div className="overflow-hidden">
            <div className="ticker text-accent-purple">
              DECENTRALIZED  |  ZK PROOFS  |  SOCIAL DEDUCTION  |  ROOM ESCROW  |  VOTE RESOLUTION  |  DECENTRALIZED  |  ZK PROOFS  |  SOCIAL DEDUCTION  |  ROOM ESCROW  |  VOTE RESOLUTION  |
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rise-in" style={{ animationDelay: '200ms' }}>
            <ModeCard title="Room Hunt" eyebrow="Lobby Flow" tone="yellow" />
          </div>
          <div className="rise-in" style={{ animationDelay: '280ms' }}>
            <ModeCard title="Vote Panic" eyebrow="Live Round" tone="red" />
          </div>
          <div className="rise-in" style={{ animationDelay: '360ms' }}>
            <ModeCard title="Proof Stack" eyebrow="ZK Layer" tone="purple" />
          </div>
        </section>

        <div className="rise-in" style={{ animationDelay: '440ms' }}>
          <FactionBanner />
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <WalletPanel variant="dark" />

          <article className="hud-panel border-2 border-accent-red bg-bg-secondary p-8 rise-in glow-red rounded-lg" style={{ animationDelay: '600ms' }}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-accent-red">Protocol Status</p>
                <h3 className="mt-3 font-display text-4xl leading-tight text-text-primary">Ready to Deploy</h3>
              </div>
              <span className="status-dot online" />
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="bg-bg-tertiary border-2 border-accent-purple p-4 rounded-lg glow-purple">
                <p className="font-mono text-xs uppercase tracking-widest text-accent-purple">Available Routes</p>
                <div className="mt-4 grid grid-cols-2 gap-3 font-display text-lg leading-tight text-text-primary">
                  <span>HOME</span>
                  <span>LOBBY</span>
                  <span>MATCH</span>
                  <span>RANKS</span>
                </div>
              </div>
              <div className="bg-bg-tertiary border-2 border-accent-yellow p-4 rounded-lg glow-yellow">
                <p className="font-mono text-xs uppercase tracking-widest text-accent-yellow">Currently Building</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="badge-chip border-accent-yellow bg-accent-yellow/10 text-accent-yellow">wallet flow</span>
                  <span className="badge-chip border-accent-purple bg-accent-purple/10 text-accent-purple">vote sync</span>
                  <span className="badge-chip border-accent-red bg-accent-red/10 text-accent-red">proof UI</span>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}
