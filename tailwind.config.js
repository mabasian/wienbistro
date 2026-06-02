/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Re-skin these tokens per client.
        espresso: {
          DEFAULT: '#2E2018',
          light: '#4A372B',
          dark: '#1C130D',
        },
        cream: {
          DEFAULT: '#FAF4EC',
          dark: '#F1E7D8',
        },
        terracotta: {
          DEFAULT: '#C8612F',
          dark: '#A94D22',
          light: '#E08A55',
        },
        olive: '#6B7244',
        sand: '#E7D7C1',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}
