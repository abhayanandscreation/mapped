/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          light: '#FFFFF4',
          DEFAULT: '#FDFBD4',
          card: '#FAF7C5',
          dark: '#F3EFA8',
          border: 'rgba(56, 36, 13, 0.15)',
        },
        burnt: {
          DEFAULT: '#C05800',
          hover: '#A34A00',
          light: '#DC6807',
          subtle: 'rgba(192, 88, 0, 0.12)',
          ring: 'rgba(192, 88, 0, 0.35)',
        },
        brown: {
          DEFAULT: '#713600',
          hover: '#5A2B00',
          light: '#8E4502',
          card: '#FAF4E3',
          border: 'rgba(113, 54, 0, 0.25)',
          subtle: 'rgba(113, 54, 0, 0.08)',
        },
        deep: {
          DEFAULT: '#38240D',
          surface: '#291A09',
          card: '#442C10',
          hover: '#4A3114',
          border: 'rgba(56, 36, 13, 0.25)',
          subtle: 'rgba(56, 36, 13, 0.08)',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 1px 3px rgba(56, 36, 13, 0.08)',
        'warm': '0 4px 14px rgba(56, 36, 13, 0.08)',
        'warm-lg': '0 10px 25px rgba(56, 36, 13, 0.12)',
        'warm-xl': '0 20px 40px rgba(56, 36, 13, 0.16)',
        'glow-orange': '0 0 20px rgba(192, 88, 0, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
