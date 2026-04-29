import Link from 'next/link'
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
                TRUST NO ONE.
                <br />
                PROVE EVERYTHING.
              </h1>
              <p className="mt-4 max-w-3xl border-3 border-plague-black bg-plague-white p-4 font-mono text-sm shadow-brutal sm:text-lg">
                A high-stakes social deduction protocol where hidden roles, voting, and payout logic are enforced on-chain.
              </p>

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
            </div>
          </div>

          <aside className="hud-panel rise-in bg-plague-black p-5 text-plague-white sm:p-6" style={{ animationDelay: '120ms' }}>
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.2em]">Live Match Surface</p>
              <span className="status-dot alert" />
            </div>

            <div className="mt-5 rounded-[28px] border-3 border-plague-white bg-[#1b1717] p-5 shadow-[8px_8px_0px_#f5c518]">
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-plague-yellow">
                <span>Room alpha-7</span>
                <span>00:48 left</span>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {['A1', 'B2', 'C3', 'D4', 'E5', 'F6', 'G7', 'H8'].map((player, index) => (
                  <div
                    key={player}
                    className={[
                      'grid aspect-square place-items-center rounded-[20px] border-3 border-plague-white font-display text-2xl',
                      index === 2
                        ? 'bg-plague-red text-plague-white shadow-[4px_4px_0px_#f5c518]'
                        : index === 6
                          ? 'bg-[#6f6a64] text-white/70'
                          : 'bg-plague-yellow text-plague-black',
                    ].join(' ')}
                  >
                    {player}
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[18px] border-3 border-plague-white bg-plague-white p-3 text-plague-black">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em]">Action feed</p>
                  <p className="mt-2 font-mono text-sm">D4 voted. Proof phase opens in 18s.</p>
                </div>
                <div className="rounded-[18px] border-3 border-plague-white bg-plague-red p-3 text-plague-white">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em]">Stake pool</p>
                  <p className="mt-2 font-display text-3xl leading-none">84 XLM</p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="card-brutal rise-in bg-plague-black py-3 text-plague-yellow" style={{ animationDelay: '120ms' }}>
          <div className="overflow-hidden">
            <div className="ticker">
              OPEN SOURCE MULTIPLAYER PROTOCOL  |  ROOM ESCROW  |  VOTE RESOLUTION  |  ZK COMMITMENTS  |  OPEN SOURCE MULTIPLAYER PROTOCOL  |  ROOM ESCROW  |  VOTE RESOLUTION  |  ZK COMMITMENTS  |
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <article className="card-brutal rise-in p-5" style={{ animationDelay: '200ms' }}>
            <h2 className="font-display text-3xl leading-none">Verifiable Roles</h2>
            <p className="mt-3 font-mono text-sm">
              Assignment and commitment flow is designed for public auditability with private player identity.
            </p>
          </article>
          <article className="card-brutal rise-in bg-plague-red p-5 text-plague-white" style={{ animationDelay: '280ms' }}>
            <h2 className="font-display text-3xl leading-none">Escrow + Payout</h2>
            <p className="mt-3 font-mono text-sm text-plague-white/95">
              Pot management and outcomes are governed by contract state transitions, not manual moderation.
            </p>
          </article>
          <article className="card-brutal rise-in p-5" style={{ animationDelay: '360ms' }}>
            <h2 className="font-display text-3xl leading-none">ZK Expansion</h2>
            <p className="mt-3 font-mono text-sm">
              Noir circuits prepare the path for privacy-preserving infection and innocence proofs.
            </p>
          </article>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="card-brutal stage-panel p-6 sm:p-8">
            <h3 className="font-display text-4xl leading-none sm:text-5xl">Current Build Snapshot</h3>
            <div className="mt-5 grid gap-3 font-mono text-sm sm:grid-cols-3">
              <p className="border-3 border-plague-black bg-plague-white p-3">Frontend routes with styled lobby and match preview UI</p>
              <p className="border-3 border-plague-black bg-plague-white p-3">Backend room APIs and socket event scaffolding</p>
              <p className="border-3 border-plague-black bg-plague-white p-3">Soroban and Noir modules structured for iterative delivery</p>
            </div>
          </article>

          <aside className="card-brutal float-y bg-plague-green p-6 text-plague-white sm:p-8">
            <h4 className="font-display text-4xl leading-none">Now Building</h4>
            <ul className="mt-4 space-y-2 font-mono text-sm">
              <li>Wallet-authenticated room lifecycle</li>
              <li>Contract-coupled vote settlement</li>
              <li>ZK proof submission flow</li>
              <li>Public contribution roadmap</li>
            </ul>
          </aside>
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="hud-panel rise-in bg-plague-white p-6" style={{ animationDelay: '420ms' }}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-plague-black/70">Gameplay arc</p>
            <div className="mt-5 grid gap-3 md:grid-cols-4">
              {[
                ['1', 'Join + Stake'],
                ['2', 'Commit Role'],
                ['3', 'Discuss + Vote'],
                ['4', 'Resolve + Payout'],
              ].map(([step, label]) => (
                <div key={step} className="border-3 border-plague-black bg-plague-yellow p-4">
                  <p className="font-display text-4xl leading-none">{step}</p>
                  <p className="mt-2 font-mono text-sm">{label}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="hud-panel rise-in bg-plague-red p-6 text-plague-white" style={{ animationDelay: '500ms' }}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-plague-white/80">Why this matters</p>
                <h3 className="mt-2 font-display text-4xl leading-none">A Game That Shows The Stack</h3>
              </div>
              <span className="status-dot idle" />
            </div>
            <p className="mt-4 max-w-2xl font-mono text-sm text-plague-white/95">
              PlagueProtocol is not just a game concept. It is a contributor-friendly surface for wallet flows, Soroban game state, realtime coordination, and zero-knowledge primitives to meet in one open-source product.
            </p>
          </article>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <WalletPanel variant="light" />

          <article className="hud-panel rise-in bg-plague-black p-6 text-plague-white" style={{ animationDelay: '580ms' }}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-plague-white/70">Role deck preview</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rotate-[-4deg] border-3 border-plague-white bg-plague-yellow p-4 text-plague-black shadow-[6px_6px_0px_#f5f0e8]">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em]">Clean</p>
                <p className="mt-2 font-display text-4xl leading-none">CITIZEN</p>
                <p className="mt-3 font-mono text-xs">Work with the table, expose infection, survive the vote.</p>
              </div>
              <div className="translate-y-2 border-3 border-plague-white bg-plague-red p-4 text-plague-white shadow-[6px_6px_0px_#f5c518]">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em]">Hidden</p>
                <p className="mt-2 font-display text-4xl leading-none">PATIENT ZERO</p>
                <p className="mt-3 font-mono text-xs">Spread infection quietly and survive consensus long enough to win the pool.</p>
              </div>
              <div className="rotate-[3deg] border-3 border-plague-white bg-plague-white p-4 text-plague-black shadow-[6px_6px_0px_#e63329]">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em]">Proof</p>
                <p className="mt-2 font-display text-4xl leading-none">INNOCENCE</p>
                <p className="mt-3 font-mono text-xs">Use ZK flows to prove claims without revealing the underlying secret.</p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}
