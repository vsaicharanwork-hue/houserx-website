import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A1F2E',
        'ink-soft': '#1A3447',
        teal: {
          DEFAULT: '#0D9488',
          deep: '#0B7B71',
          soft: '#5EEAD4',
          light: '#E1F0F3',
        },
        cream: '#FAF7F2',
        paper: '#FFFFFF',
        rust: '#C2410C',
        'text-mid': '#475569',
        'text-mute': '#94A3B8',
        line: '#E2E8F0',
        'line-soft': '#F1F5F9',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '80px', letterSpacing: '-0.03em' }],
        'display-lg': ['56px', { lineHeight: '64px', letterSpacing: '-0.025em' }],
        'display-md': ['40px', { lineHeight: '48px', letterSpacing: '-0.02em' }],
        h1: ['32px', { lineHeight: '40px', letterSpacing: '-0.015em' }],
        h2: ['24px', { lineHeight: '32px', letterSpacing: '-0.01em' }],
        h3: ['18px', { lineHeight: '26px' }],
        'body-lg': ['18px', { lineHeight: '30px' }],
        body: ['16px', { lineHeight: '26px' }],
        caption: ['14px', { lineHeight: '20px' }],
        small: ['12px', { lineHeight: '16px' }],
      },
      spacing: {
        '4xl': '160px',
        '5xl': '200px',
      },
      maxWidth: {
        prose: '680px',
        content: '1200px',
      },
      animation: {
        'fade-up': 'fadeUp 600ms ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
