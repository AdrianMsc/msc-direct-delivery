/** @type {import('tailwindcss').Config} */
const colors = require("./utilities/colors");

module.exports = {
  content: ["./lab-pages/**/*.{html,js}"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
