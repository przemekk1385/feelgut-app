/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
    extend: {
      backgroundImage: {
        "header-image": "url('/images/header.jpg')",
        "offer-card": "url('/images/offer-card.jpeg')",
      },
      colors: {
        // color names by https://colors.artyclick.com/color-name-finder/
        
        como: "#547A71",
        martini: "#A6A6A6",
        "silver-tree": "#55B99A",

        mimosa: "#FFFAD2",
        sahara: "#C9961A",
        supernova: "#FCCB00",
        
        ceramic: "#FFFCFC",
        platinium: "#E1E1E1",

        dark: "#161F36",
        "sherwood-green": "#073F31",
      },
      fontFamily: {
        lato: ["Lato"],
        "playfair-display": ["Playfair\\ Display"],
      },
      padding: {
        "1/10": "10%",
      }
    },
  },
  plugins: [],
};
