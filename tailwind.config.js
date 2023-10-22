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
        purple: '#C6BAF6',
        orange: '#F1C2C2',
        white: "#FFFFFF",
        accent: "#4C424B",
        primary: "#F1F0EA",
        secondary: "#474448",
      }
    }
  },
  plugins: [],
}

