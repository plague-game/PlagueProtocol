type WalletPanelProps = {
  variant?: 'dark' | 'light'
}

export function WalletPanel({ variant = 'dark' }: WalletPanelProps) {
  return (
    <section className="hud-panel p-6 bg-bg-secondary border-accent-green glow-green rounded-lg">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent-green">Wallet Status</p>
          <h3 className="mt-3 font-display text-4xl leading-tight text-text-primary">Freighter</h3>
        </div>
        <span className="status-dot online" />
      </div>

      <div className="grid gap-4 sm:grid-cols-3 mb-6">
        <div className="border-2 border-accent-yellow bg-bg-tertiary p-4 rounded-lg glow-yellow">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-yellow">Address</p>
          <p className="mt-3 font-mono text-sm text-text-primary">GB3A...QJ7N</p>
        </div>
        <div className="border-2 border-accent-purple bg-bg-tertiary p-4 rounded-lg glow-purple">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-purple">Network</p>
          <p className="mt-3 font-mono text-sm text-text-primary">Stellar Testnet</p>
        </div>
        <div className="border-2 border-accent-red bg-bg-tertiary p-4 rounded-lg glow-red">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-red">Balance</p>
          <p className="mt-3 font-display text-4xl leading-tight text-text-primary">128 XLM</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <button className="btn-brutal px-5 py-3 text-xs font-mono font-bold border-accent-yellow text-accent-yellow bg-accent-yellow/10 hover:bg-accent-yellow hover:text-black glow-yellow">
          Connect Wallet
        </button>
        <button className="btn-brutal px-5 py-3 text-xs font-mono font-bold border-accent-green text-accent-green bg-accent-green/10 hover:bg-accent-green hover:text-black glow-green">
          View Session
        </button>
      </div>
    </section>
  )
}
