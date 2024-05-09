/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#871cf8",
        "background-100": "#B3C8CF",
        "background-200": "#BED7DC",
        "background-300": "#F1EEDC",
        "background-400": "#E5DDC5",
      }
    },
  },
  plugins: [],
}