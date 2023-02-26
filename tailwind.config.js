/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
    extend: {
      backgroundImage: {
        "header-image": "url('images/header.jpg')",
        "offer-card": "url('images/offer-card.jpeg')",
      },
      colors: {
        primary: {
          light: "#55B99A",
          strong: "#547A71",
        },
        secondary: "#A6A6A6",
      },
      fontFamily: {
        lato: ["Lato"],
        "playfair-display": ["Playfair\\ Display"],
      },
    },
  },
  plugins: [],
};
