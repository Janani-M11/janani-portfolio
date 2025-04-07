/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#a855f7',
          dark: '#7e22ce',
        },
        background: {
          light: '#ffffff',
          dark: '#000000',
        },
      },
      keyframes: {
        bubble: {
          '0%': { transform: 'translateY(0)', opacity: '0.3' },
          '100%': { transform: 'translateY(-100vh)', opacity: '0' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        bubble: 'bubble 10s linear infinite',
        spinSlow: 'spinSlow 60s linear infinite',
      },
    },
  },
  plugins: [],
}
