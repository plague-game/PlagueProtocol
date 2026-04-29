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
        // Premium dark palette
        'bg': {
          primary: '#0a0e27',
          secondary: '#111a35',
          tertiary: '#1a2847',
        },
        'text': {
          primary: '#ffffff',
          secondary: '#a0aec0',
          muted: '#718096',
        },
        'accent': {
          purple: '#a855f7',
          cyan: '#06b6d4',
          lime: '#84cc16',
          coral: '#ff6b6b',
          pink: '#ec4899',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 30px rgba(168, 85, 247, 0.5)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.5)',
        'glow-lime': '0 0 30px rgba(132, 204, 22, 0.4)',
        'glow-coral': '0 0 30px rgba(255, 107, 107, 0.5)',
        'premium': '0 10px 40px rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        3: '3px',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'glow-flicker': 'glow-flicker 0.15s ease-in-out infinite',
        'float-up': 'float-up 0.6s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(168, 85, 247, 0.8)' },
        },
        'glow-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'float-up': {
          '0%': { transform: 'translateY(0px)', opacity: '0' },
          '100%': { transform: 'translateY(-20px)', opacity: '1' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
