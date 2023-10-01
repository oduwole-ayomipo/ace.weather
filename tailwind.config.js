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
        white: "#FFFFFF",
        black: "#000000",
        primary: "#F1F0EA",
        secondary: "#474448",
        accent: "#534B52"
      }
    }
  },
  plugins: [],
}

