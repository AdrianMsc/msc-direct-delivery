/** @type {import('tailwindcss').Config} */
const colors = require("./utilities/colors");

module.exports = {
  content: ["./slider.html"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
