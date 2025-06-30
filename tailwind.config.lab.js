/** @type {import('tailwindcss').Config} */
const colors = require("./utilities/colors");

module.exports = {
  content: ["./pages/**/*.{html,js}"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
