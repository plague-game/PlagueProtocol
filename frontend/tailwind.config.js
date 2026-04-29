/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark game palette
        'bg': {
          primary: '#0f0f0f',
          secondary: '#1a1a1a',
          tertiary: '#242424',
        },
        'text': {
          primary: '#ffffff',
          secondary: '#b8b8b8',
          muted: '#777777',
        },
        'accent': {
          red: '#ef4444',
          yellow: '#eab308',
          green: '#22c55e',
          purple: '#a855f7',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 20px rgba(239, 68, 68, 0.4)',
        'glow-yellow': '0 0 20px rgba(234, 179, 8, 0.3)',
        'glow-green': '0 0 20px rgba(34, 197, 94, 0.3)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
      },
      borderWidth: {
        3: '3px',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'glow-flicker': 'glow-flicker 0.15s ease-in-out infinite',
        'infect': 'infect 0.6s ease-out forwards',
        'shake': 'shake 0.4s ease-in-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(239, 68, 68, 0.6)' },
        },
        'glow-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'infect': {
          '0%': { transform: 'scale(1)', backgroundColor: '#242424' },
          '50%': { transform: 'scale(1.1)', backgroundColor: '#ef4444' },
          '100%': { transform: 'scale(1)', backgroundColor: '#ef4444' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' },
        },
      },
    },
  },
  plugins: [],
}
