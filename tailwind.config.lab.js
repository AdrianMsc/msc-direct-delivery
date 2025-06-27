/** @type {import('tailwindcss').Config} */
const colors = require("./utilities/colors");

module.exports = {
  content: ["./pages/home-page.html.html"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
