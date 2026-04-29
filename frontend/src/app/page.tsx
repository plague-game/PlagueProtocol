import Link from 'next/link'
import { FactionBanner, HeroScene, ModeCard } from '@/components/game/illustrations'
import { SiteNav } from '@/components/ui/site-nav'
import { WalletPanel } from '@/components/wallet/wallet-panel'

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:gap-10">
        <SiteNav currentPath="/" />

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="stage-panel rise-in card-brutal bg-plague-yellow p-6 sm:p-10">
            <div className="pointer-events-none absolute -right-10 top-8 h-28 w-28 rotate-12 border-3 border-plague-black bg-plague-red sm:h-36 sm:w-36" />
            <div className="pointer-events-none absolute -bottom-12 left-[42%] h-24 w-24 -rotate-6 border-3 border-plague-black bg-plague-white sm:h-32 sm:w-32" />

            <div className="relative z-10">
              <p className="mb-4 inline-block border-3 border-plague-black bg-plague-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.2em] sm:text-sm">
                PlagueProtocol | Stellar x Soroban x Noir
              </p>
              <h1 className="max-w-4xl font-display text-[3.2rem] leading-[0.88] sm:text-[5.6rem] lg:text-[7.4rem]">
                INFECT THE ROOM.
                <br />
                OUTPLAY THE TABLE.
              </h1>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="badge-chip bg-plague-black text-plague-white">Stellar</span>
                <span className="badge-chip bg-plague-white text-plague-black">Soroban</span>
                <span className="badge-chip bg-plague-red text-plague-white">Noir ZK</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/lobby"
                  className="btn-brutal bg-plague-red px-6 py-3 text-base text-plague-white sm:px-8 sm:text-lg"
                >
                  Enter Lobby
                </Link>
                <Link
                  href="/game"
                  className="btn-brutal bg-plague-black px-6 py-3 text-base text-plague-white sm:px-8 sm:text-lg"
                >
                  View Match UI
                </Link>
                <Link
                  href="/leaderboard"
                  className="btn-brutal bg-plague-white px-6 py-3 text-base text-plague-black sm:px-8 sm:text-lg"
                >
                  Leaderboard
                </Link>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[18px] border-3 border-plague-black bg-plague-white p-3 shadow-brutal">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em]">Room Escrow</p>
                  <div className="mt-3 h-2 rounded-full bg-plague-black/10">
                    <div className="h-2 w-[82%] rounded-full bg-plague-red" />
                  </div>
                </div>
                <div className="rounded-[18px] border-3 border-plague-black bg-plague-white p-3 shadow-brutal">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em]">Vote Sync</p>
                  <div className="mt-3 h-2 rounded-full bg-plague-black/10">
                    <div className="h-2 w-[68%] rounded-full bg-plague-black" />
                  </div>
                </div>
                <div className="rounded-[18px] border-3 border-plague-black bg-plague-white p-3 shadow-brutal">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em]">Proof Flow</p>
                  <div className="mt-3 h-2 rounded-full bg-plague-black/10">
                    <div className="h-2 w-[56%] rounded-full bg-plague-yellow" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rise-in" style={{ animationDelay: '120ms' }}>
            <HeroScene />
          </div>
        </section>

        <section className="card-brutal rise-in bg-plague-black py-3 text-plague-yellow" style={{ animationDelay: '120ms' }}>
          <div className="overflow-hidden">
            <div className="ticker">
              OPEN SOURCE MULTIPLAYER PROTOCOL  |  ROOM ESCROW  |  VOTE RESOLUTION  |  ZK COMMITMENTS  |  OPEN SOURCE MULTIPLAYER PROTOCOL  |  ROOM ESCROW  |  VOTE RESOLUTION  |  ZK COMMITMENTS  |
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <div className="rise-in" style={{ animationDelay: '180ms' }}>
            <ModeCard title="Room Hunt" eyebrow="Lobby Flow" tone="yellow" />
          </div>
          <div className="rise-in" style={{ animationDelay: '260ms' }}>
            <ModeCard title="Vote Panic" eyebrow="Live Round" tone="red" />
          </div>
          <div className="rise-in" style={{ animationDelay: '340ms' }}>
            <ModeCard title="Proof Stack" eyebrow="ZK Layer" tone="black" />
          </div>
        </section>

        <div className="rise-in" style={{ animationDelay: '420ms' }}>
          <FactionBanner />
        </div>

        <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <WalletPanel variant="light" />

          <article className="hud-panel rise-in bg-plague-red p-6 text-plague-white" style={{ animationDelay: '580ms' }}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-plague-white/75">Build Snapshot</p>
                <h3 className="mt-2 font-display text-4xl leading-none">Visual Product Surface</h3>
              </div>
              <span className="status-dot idle" />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[18px] border-3 border-plague-white bg-plague-white p-4 text-plague-black">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em]">Live Routes</p>
                <div className="mt-3 grid grid-cols-2 gap-2 font-display text-2xl leading-none">
                  <span>HOME</span>
                  <span>LOBBY</span>
                  <span>MATCH</span>
                  <span>RANKS</span>
                </div>
              </div>
              <div className="rounded-[18px] border-3 border-plague-white bg-plague-black p-4 text-plague-white">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em]">Now Building</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="badge-chip border-plague-white bg-plague-yellow text-plague-black shadow-none">wallet flow</span>
                  <span className="badge-chip border-plague-white bg-plague-white text-plague-black shadow-none">vote sync</span>
                  <span className="badge-chip border-plague-white bg-plague-red text-plague-white shadow-none">proof UI</span>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}
