/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EEEDEB',
        secondary: '#FFFF',
        accent1: '#EEEDEB',
        accent2: '#FFFF',
      },
    },
  },
  plugins: [require('daisyui')],
}

