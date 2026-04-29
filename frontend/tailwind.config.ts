import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        background: 'var(--bg-primary)',
        'background-secondary': 'var(--bg-secondary)',
        'background-tertiary': 'var(--bg-tertiary)',
        'background-card': 'var(--bg-card)',
        foreground: 'var(--text-primary)',
        'foreground-secondary': 'var(--text-secondary)',
        'foreground-muted': 'var(--text-muted)',
        'accent-purple': 'var(--accent-purple)',
        'accent-cyan': 'var(--accent-cyan)',
        'accent-lime': 'var(--accent-lime)',
        'accent-coral': 'var(--accent-coral)',
        'accent-pink': 'var(--accent-pink)',
      },
      spacing: {
        full: '100%',
      },
      boxShadow: {
        'glow-purple': 'var(--glow-purple)',
        'glow-cyan': 'var(--glow-cyan)',
        'glow-lime': 'var(--glow-lime)',
        'glow-coral': 'var(--glow-coral)',
        premium: '0 10px 30px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float-up': 'float-up 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'scale-in': 'scale-in 0.6s ease-out',
      },
      backgroundImage: {
        'gradient-purple-pink': 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
        'gradient-cyan-purple': 'linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)',
        'gradient-lime-cyan': 'linear-gradient(135deg, #84cc16 0%, #06b6d4 100%)',
      },
    },
  },
  plugins: [],
}

export default config
