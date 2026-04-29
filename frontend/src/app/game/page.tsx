export default function GamePage({ params }: { params: { roomId: string } }) {
  return (
    <main className="min-h-screen p-4 sm:p-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <header className="stage-panel card-brutal rise-in bg-plague-red p-5 text-plague-white sm:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-block border-3 border-plague-white px-2 py-1 font-mono text-xs uppercase tracking-[0.2em]">
                Match Preview
              </p>
              <h1 className="mt-3 font-display text-5xl leading-none sm:text-7xl">ROUND 1</h1>
            </div>
            <div className="border-3 border-plague-white bg-plague-black p-3 font-mono text-sm">
              <p>Room: alpha-7</p>
              <p>Timer: 00:48</p>
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="card-brutal rise-in p-5" style={{ animationDelay: '110ms' }}>
            <h2 className="font-display text-3xl leading-none">Player Grid</h2>
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {['A1', 'B2', 'C3', 'D4', 'E5', 'F6', 'G7', 'H8'].map((player, index) => (
                <button
                  key={player}
                  className={`player-token h-16 w-full font-mono text-base ${
                    index === 2 ? 'infected' : index === 6 ? 'eliminated' : 'clean'
                  }`}
                >
                  {player}
                </button>
              ))}
            </div>
            <p className="mt-4 font-mono text-xs opacity-70">
              Visual state mock: clean (yellow), infected alert (red pulse), eliminated (muted).
            </p>
          </article>

          <article className="card-brutal rise-in bg-plague-black p-5 text-plague-white" style={{ animationDelay: '190ms' }}>
            <h3 className="font-display text-3xl leading-none">Vote Panel</h3>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em]">Select suspected Patient Zero</p>
            <div className="mt-4 space-y-2 font-mono text-sm">
              <button className="btn-brutal w-full bg-plague-white px-3 py-2 text-plague-black">Vote A1</button>
              <button className="btn-brutal w-full bg-plague-white px-3 py-2 text-plague-black">Vote C3</button>
              <button className="btn-brutal w-full bg-plague-white px-3 py-2 text-plague-black">Vote F6</button>
            </div>
            <p className="mt-4 border-3 border-plague-white p-3 font-mono text-xs">
              Contract integration pending: vote submission, tally, and elimination settlement.
            </p>
          </article>
        </section>

        <section className="card-brutal rise-in bg-plague-yellow p-5" style={{ animationDelay: '260ms' }}>
          <h4 className="font-display text-3xl leading-none">Round Feed</h4>
          <ul className="mt-4 space-y-2 font-mono text-sm">
            <li className="border-3 border-plague-black bg-plague-white p-2">[00:12] Discussion opened for 60 seconds.</li>
            <li className="border-3 border-plague-black bg-plague-white p-2">[00:29] Player D4 cast a vote.</li>
            <li className="border-3 border-plague-black bg-plague-white p-2">[00:44] Infection phase locked for proof submission.</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
