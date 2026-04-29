export default function LobbyPage() {
  return (
    <main className="min-h-screen p-4 sm:p-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <header className="stage-panel card-brutal rise-in bg-plague-yellow p-5 sm:p-7">
          <p className="inline-block border-3 border-plague-black bg-plague-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.2em]">
            Lobby Control Panel
          </p>
          <div className="mt-3 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="font-display text-5xl leading-none sm:text-7xl">ACTIVE ROOMS</h1>
            <p className="max-w-md border-3 border-plague-black bg-plague-white p-3 font-mono text-xs sm:text-sm">
              UI is wired as a demo shell while wallet auth and room actions are integrated with backend and contracts.
            </p>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <article className="card-brutal rise-in bg-plague-black p-5 text-plague-white" style={{ animationDelay: '100ms' }}>
            <h2 className="font-display text-3xl leading-none">Create Room</h2>
            <div className="mt-4 space-y-3">
              <input
                className="input-brutal w-full border-plague-white bg-plague-white text-plague-black"
                value="Night Shift"
                readOnly
                aria-label="Room name"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  className="input-brutal w-full border-plague-white bg-plague-white text-plague-black"
                  value="6 players"
                  readOnly
                  aria-label="Max players"
                />
                <input
                  className="input-brutal w-full border-plague-white bg-plague-white text-plague-black"
                  value="10 XLM"
                  readOnly
                  aria-label="Stake"
                />
              </div>
              <button className="btn-brutal w-full bg-plague-red px-4 py-3 font-mono text-plague-white">
                Create Room (Demo)
              </button>
              <button className="btn-brutal w-full bg-plague-yellow px-4 py-3 font-mono text-plague-black">
                Connect Freighter (Next)
              </button>
            </div>
          </article>

          <article className="card-brutal rise-in p-5" style={{ animationDelay: '180ms' }}>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-3xl leading-none">Join Existing</h2>
              <span className="border-3 border-plague-black px-2 py-1 font-mono text-xs">3 rooms online</span>
            </div>
            <ul className="mt-4 space-y-3 font-mono text-sm">
              <li className="grid gap-3 border-3 border-plague-black bg-plague-white p-3 sm:grid-cols-[1fr_auto_auto] sm:items-center">
                <span className="font-bold">Genesis Lobby</span>
                <span>4 / 8</span>
                <button className="btn-brutal bg-plague-red px-3 py-2 text-xs text-plague-white">Join</button>
              </li>
              <li className="grid gap-3 border-3 border-plague-black bg-plague-white p-3 sm:grid-cols-[1fr_auto_auto] sm:items-center">
                <span className="font-bold">Infection Testnet</span>
                <span>2 / 6</span>
                <button className="btn-brutal bg-plague-black px-3 py-2 text-xs text-plague-white">Spectate</button>
              </li>
              <li className="grid gap-3 border-3 border-plague-black bg-plague-white p-3 sm:grid-cols-[1fr_auto_auto] sm:items-center">
                <span className="font-bold">Zero Proof Squad</span>
                <span>5 / 10</span>
                <button className="btn-brutal bg-plague-yellow px-3 py-2 text-xs text-plague-black">Queue</button>
              </li>
            </ul>
          </article>
        </section>

        <section className="card-brutal rise-in bg-plague-green p-5 text-plague-white sm:p-6" style={{ animationDelay: '260ms' }}>
          <h3 className="font-display text-3xl leading-none">Integration Roadmap</h3>
          <p className="mt-3 font-mono text-sm">
            Next milestone connects wallet state, room creation, and participation flows to backend APIs, then moves stake escrow and room state transitions into Soroban contracts.
          </p>
        </section>
      </div>
    </main>
  )
}
