/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        card: 'rgb(var(--color-card) / <alpha-value>)',
        primaryText: 'rgb(var(--color-primaryText) / <alpha-value>)',
        secondaryText: 'rgb(var(--color-secondaryText) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        accentHover: 'rgb(var(--color-accentHover) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        }
      }
    },
  },
  plugins: [],
}
// Trigger Vite recompile
