type SceneChip = {
  label: string
  value: string
  tone: 'yellow' | 'red' | 'white'
}

const sceneChips: SceneChip[] = [
  { label: 'Players', value: '08', tone: 'yellow' },
  { label: 'Stake', value: '84', tone: 'red' },
  { label: 'Proofs', value: '12', tone: 'white' },
]

function chipClasses(tone: SceneChip['tone']) {
  if (tone === 'red') {
    return 'bg-plague-red text-plague-white shadow-[5px_5px_0px_#f5c518]'
  }

  if (tone === 'yellow') {
    return 'bg-plague-yellow text-plague-black shadow-[5px_5px_0px_#0a0a0a]'
  }

  return 'bg-plague-white text-plague-black shadow-[5px_5px_0px_#e63329]'
}

export function HeroScene() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-700 bg-bg-secondary p-4">
      <div className="relative z-10 grid gap-3">
        <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-text-muted">
          <span>Game Board</span>
          <span>Live</span>
        </div>

        <div className="rounded-lg border border-gray-700 bg-bg-tertiary p-2 max-w-xs">
          <svg viewBox="0 0 640 420" className="h-auto w-full" role="img" aria-label="Stylized plague protocol game board illustration">
            <defs>
              <linearGradient id="boardGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f5c518" />
                <stop offset="100%" stopColor="#e63329" />
              </linearGradient>
              <linearGradient id="nodeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f5f0e8" />
                <stop offset="100%" stopColor="#f5c518" />
              </linearGradient>
            </defs>

            <rect x="40" y="28" width="560" height="360" rx="28" fill="#15110f" stroke="#f5f0e8" strokeWidth="6" />
            <rect x="76" y="62" width="488" height="292" rx="24" fill="#211c18" stroke="#3d332d" strokeWidth="4" />

            <path d="M320 126 L435 192 L390 304 L250 304 L205 192 Z" fill="none" stroke="url(#boardGlow)" strokeWidth="10" strokeLinejoin="round" />
            <circle cx="320" cy="218" r="56" fill="#e63329" stroke="#f5f0e8" strokeWidth="8" />
            <circle cx="320" cy="218" r="26" fill="#0a0a0a" stroke="#f5c518" strokeWidth="8" />

            <line x1="320" y1="162" x2="320" y2="92" stroke="#f5f0e8" strokeWidth="5" />
            <line x1="375" y1="182" x2="462" y2="132" stroke="#f5f0e8" strokeWidth="5" />
            <line x1="380" y1="248" x2="472" y2="286" stroke="#f5f0e8" strokeWidth="5" />
            <line x1="260" y1="248" x2="170" y2="292" stroke="#f5f0e8" strokeWidth="5" />
            <line x1="262" y1="182" x2="174" y2="130" stroke="#f5f0e8" strokeWidth="5" />

            {[
              { x: 320, y: 82, fill: '#f5c518', label: 'A1' },
              { x: 482, y: 120, fill: '#f5f0e8', label: 'B2' },
              { x: 494, y: 294, fill: '#e63329', label: 'C3' },
              { x: 150, y: 298, fill: '#f5f0e8', label: 'D4' },
              { x: 156, y: 118, fill: '#f5c518', label: 'E5' },
            ].map((node) => (
              <g key={node.label}>
                <circle cx={node.x} cy={node.y} r="28" fill={node.fill} stroke="#0a0a0a" strokeWidth="6" />
                <circle cx={node.x} cy={node.y} r="12" fill="#0a0a0a" opacity="0.16" />
                <text
                  x={node.x}
                  y={node.y + 8}
                  textAnchor="middle"
                  fontFamily="var(--font-mono)"
                  fontSize="20"
                  fontWeight="700"
                  fill={node.fill === '#e63329' ? '#f5f0e8' : '#0a0a0a'}
                >
                  {node.label}
                </text>
              </g>
            ))}

            <rect x="88" y="308" width="128" height="34" rx="10" fill="#f5c518" stroke="#0a0a0a" strokeWidth="4" />
            <text x="152" y="330" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="16" fontWeight="700" fill="#0a0a0a">
              84 XLM POOL
            </text>

            <rect x="436" y="78" width="126" height="34" rx="10" fill="#f5f0e8" stroke="#0a0a0a" strokeWidth="4" />
            <text x="499" y="100" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="16" fontWeight="700" fill="#0a0a0a">
              PROOF READY
            </text>
          </svg>
        </div>

      </div>
    </div>
  )
}

type ModeCardProps = {
  title: string
  eyebrow: string
  tone: 'yellow' | 'red' | 'black'
}

export function ModeCard({ title, eyebrow, tone }: ModeCardProps) {
  const toneClass = {
    yellow: 'border-accent-yellow text-accent-yellow',
    red: 'border-accent-red text-accent-red',
    black: 'border-gray-700 text-text-secondary',
  }[tone]

  return (
    <article className={`border rounded-lg bg-bg-secondary p-4 ${toneClass}`}>
      <p className="font-mono text-xs uppercase tracking-wider opacity-80">{eyebrow}</p>
      <h3 className="mt-2 font-display text-xl leading-tight">{title}</h3>
    </article>
  )
}

export function FactionBanner() {
  return (
    <div className="border border-gray-700 bg-bg-secondary p-6 rounded-lg">
      <h2 className="font-display text-xl text-text-primary mb-4">Roles</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ['Citizen', 'accent-yellow'],
          ['Patient Zero', 'accent-red'],
          ['Verifier', 'text-gray-300'],
        ].map(([label]) => (
          <div key={label} className="border border-gray-700 bg-bg-tertiary p-3 rounded-lg text-center">
            <p className="text-sm text-text-secondary">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

type RoomPoster = {
  name: string
  status: 'open' | 'filling' | 'full'
  accent: 'yellow' | 'red' | 'black'
}

const roomPosters: RoomPoster[] = [
  { name: 'Genesis Lobby', status: 'open', accent: 'yellow' },
  { name: 'Infection Testnet', status: 'filling', accent: 'black' },
  { name: 'Zero Proof Squad', status: 'full', accent: 'red' },
]

function posterClass(accent: RoomPoster['accent']) {
  if (accent === 'red') {
    return 'bg-plague-red text-plague-white'
  }

  if (accent === 'black') {
    return 'bg-plague-black text-plague-white'
  }

  return 'bg-plague-yellow text-plague-black'
}

export function LobbyPosters() {
  return (
    <div className="space-y-3">
      {roomPosters.map((room) => (
        <div key={room.name} className="border border-gray-700 bg-bg-secondary p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <p className="font-bold text-text-primary">{room.name}</p>
            <span className="text-xs text-text-muted capitalize">{room.status}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export function MatchArenaGraphic() {
  return (
    <div className="border border-gray-700 bg-bg-tertiary p-3 rounded-lg max-w-sm mx-auto">
      <svg viewBox="0 0 700 420" className="h-auto w-full" role="img" aria-label="Stylized tactical arena for plague match">
        <rect x="22" y="24" width="656" height="372" rx="34" fill="#171310" stroke="#f5f0e8" strokeWidth="8" />
        <circle cx="350" cy="210" r="78" fill="#f5c518" stroke="#f5f0e8" strokeWidth="8" />
        <circle cx="350" cy="210" r="34" fill="#e63329" stroke="#0a0a0a" strokeWidth="8" />

        <path d="M350 132 L486 196 L434 324 L266 324 L214 196 Z" fill="none" stroke="#e63329" strokeWidth="10" strokeLinejoin="round" />

        {[
          [350, 96, '#f5c518', 'A1'],
          [520, 166, '#f5f0e8', 'B2'],
          [508, 304, '#e63329', 'C3'],
          [192, 304, '#f5f0e8', 'D4'],
          [184, 166, '#f5c518', 'E5'],
          [350, 350, '#f5f0e8', 'F6'],
        ].map(([x, y, color, label]) => (
          <g key={String(label)}>
            <circle cx={Number(x)} cy={Number(y)} r="30" fill={String(color)} stroke="#0a0a0a" strokeWidth="6" />
            <text
              x={Number(x)}
              y={Number(y) + 8}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="20"
              fontWeight="700"
              fill={String(color) === '#e63329' ? '#f5f0e8' : '#0a0a0a'}
            >
              {String(label)}
            </text>
          </g>
        ))}

        <rect x="58" y="58" width="156" height="38" rx="12" fill="#f5f0e8" stroke="#0a0a0a" strokeWidth="5" />
        <text x="136" y="82" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="16" fontWeight="700" fill="#0a0a0a">
          TIMER 00:48
        </text>

        <rect x="480" y="58" width="164" height="38" rx="12" fill="#e63329" stroke="#0a0a0a" strokeWidth="5" />
        <text x="562" y="82" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="16" fontWeight="700" fill="#f5f0e8">
          PROOF WINDOW
        </text>
      </svg>
    </div>
  )
}
