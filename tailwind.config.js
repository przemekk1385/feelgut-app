/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./formkit.config.{js,mjs,ts}",
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        // color names by https://colors.artyclick.com/color-name-finder/

        como: "#547A71",

        mimosa: "#FFFAD2",
        sahara: "#C9961A",
        supernova: "#FCCB00",

        platinium: "#E1E1E1",
        dark: "#161F36",
      },
      fontFamily: {
        lato: ["Lato"],
        "playfair-display": ["Playfair\\ Display"],
      },
    },
  },
  plugins: [],
};
