/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Comfortaa': ['Comfortaa', "cursive"],
        'Coiny': ['Coiny', 'cursive'],
      },
    },
    colors: {
      custom: {
        deep: '#08203E',
        light: '#34546E',
        white: "#DDE5EF",
        accent: "#17283A",
      }
    }
  },
  plugins: [],
}

