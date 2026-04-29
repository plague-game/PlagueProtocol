import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:gap-10">
        <section className="stage-panel rise-in card-brutal bg-plague-yellow p-6 sm:p-10">
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
              <a
                href="https://github.com/plague-game/PlagueProtocol"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal bg-plague-white px-6 py-3 text-base text-plague-black sm:px-8 sm:text-lg"
              >
                Source Code
              </a>
            </div>
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
      </div>
    </main>
  )
}
