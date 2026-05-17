/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /** Tema: cores primárias da marca */
        foreground: '#020202',
        /** Branco da marca — nome `paper` evita conflito com utilitários CSS `background` do Tailwind */
        paper: '#FFFFFF',
        muted: '#667085',
        primary: {
          DEFAULT: '#03484C',
          hover: '#022a2d',
        },
        secondary: {
          DEFAULT: '#538A95',
        },
        surface: {
          muted: '#F5F7F8',
          subtle: '#F2F4F7',
        },
        emphasis: '#344054',
        border: {
          DEFAULT: '#EAECF0',
          strong: '#D0D5DD',
        },
        card: '#FFFFFF', /* igual a paper; cards sólidos */
        positive: '#12B76A',
        warning: '#FEC84B',
        danger: '#F04438',
        tertiary: '#98A2B3',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        hero: ['64px', { lineHeight: '72px' }],
        'hero-md': ['48px', { lineHeight: '56px' }],
        'hero-sm': ['36px', { lineHeight: '44px' }],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 1px 3px rgba(2, 2, 2, 0.06), 0 1px 2px rgba(2, 2, 2, 0.04)',
        'card-lg': '0 4px 16px rgba(2, 2, 2, 0.08)',
        'btn-primary': '0 4px 12px rgba(3, 72, 76, 0.18)',
        'btn-nav': '0 2px 8px rgba(3, 72, 76, 0.14)',
        nav: '0 1px 3px rgba(2, 2, 2, 0.06)',
      },
      keyframes: {
        'nav-cta-border': {
          to: { transform: 'rotate(360deg)' },
        },
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'nav-cta-border': 'nav-cta-border 2.4s linear infinite',
        'marquee-left': 'marquee-left 42s linear infinite',
        'marquee-right': 'marquee-right 42s linear infinite',
      },
    },
  },
  plugins: [],
}
