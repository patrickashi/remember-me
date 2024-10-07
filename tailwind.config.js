/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 1.5s ease-out forwards',
      },
    },
    fontFamily: {
      yatra: ['Yatra One', 'sans-serif'],
      bangers: ['"Bangers"', 'cursive'],
      luckiest: ['"Luckiest Guy"', 'cursive'],
      oleo: ['Oleo Script', 'cursive'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

