/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Semantische Design-Tokens, gespeist aus CSS-Variablen (siehe src/index.css).
        // Dadurch sind Live-Theme-Wechsel möglich, ohne Komponenten zu duplizieren.
        // espresso = primäre Dunkelfarbe (Text & dunkle Sektionen)
        // cream    = helle Hintergrundfarbe
        // terracotta = Akzentfarbe · olive = Sekundärakzent · sand = warmes Neutral
        espresso: {
          DEFAULT: 'rgb(var(--color-espresso) / <alpha-value>)',
          light: 'rgb(var(--color-espresso-light) / <alpha-value>)',
          dark: 'rgb(var(--color-espresso-dark) / <alpha-value>)',
        },
        cream: {
          DEFAULT: 'rgb(var(--color-cream) / <alpha-value>)',
          dark: 'rgb(var(--color-cream-dark) / <alpha-value>)',
        },
        terracotta: {
          DEFAULT: 'rgb(var(--color-terracotta) / <alpha-value>)',
          dark: 'rgb(var(--color-terracotta-dark) / <alpha-value>)',
          light: 'rgb(var(--color-terracotta-light) / <alpha-value>)',
        },
        olive: 'rgb(var(--color-olive) / <alpha-value>)',
        sand: 'rgb(var(--color-sand) / <alpha-value>)',
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
