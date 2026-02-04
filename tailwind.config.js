/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
  "./src/**/*.{html,ts}",
  ],
  theme: {
  extend: {
    colors: {
      'cyber-cyan': '#D9E33F',
      'cyber-black': '#000000',
      'nav-grey': '#94A3B8',
    },
    fontFamily: {
      'cyber': ['Syne', 'sans-serif'],
      'base': ['Plus Jakarta Sans', 'sans-serif'],
    },
  },
},
  plugins: [],
}

