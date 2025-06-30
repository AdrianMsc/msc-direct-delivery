/** @type {import('tailwindcss').Config} */
const colors = require("./utilities/colors");

module.exports = {
  content: ["./pages/index-lab.html"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
