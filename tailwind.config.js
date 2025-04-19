/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d946ef',   // bright pink-purple
          light: '#a855f7',
          dark: '#7e22ce',
        },
        secondary: '#a855f7',   // purple
        background: '#f8e1ff',  // soft lavender
        text: '#4b006e',        // deep purple
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
