/** @type {import('tailwindcss').Config} */
const colors = require("./utilities/colors");

module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./index.html",
    "./utilities/index.js",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors,
      keyframes: {
        dotFlashing1: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        dotFlashing2: {
          "0%": { opacity: "0.6" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        dotFlashing3: {
          "0%": { opacity: "0.3" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        unplugLeft: {
          "0%": { right: "-2.2rem" },
          "50%": { right: "0" },
          "100%": { right: "-2.2rem" },
        },
        unplugRight: {
          "0%": { left: "0" },
          "50%": { left: "2rem" },
          "100%": { left: "0" },
        },
      },
      animation: {
        unplugLeft: "unplugLeft 4s infinite",
        unplugRight: "unplugRight 4s infinite",
        dotFlashing1: "dotFlashing1 2s infinite linear alternate",
        dotFlashing2: "dotFlashing2 2s infinite linear alternate 0.4s",
        dotFlashing3: "dotFlashing3 2s infinite linear alternate 0.6s",
      },
    },
  },
  plugins: [
    require("./components/msc-buttons"),
    require("./components/msc-checkbox"),
    require("./components/msc-dropdown"),
    require("./components/msc-inputs"),
    require("./components/msc-modals"),
    require("./components/msc-radio"),
    require("./components/msc-toggle"),
    require("./components/msc-icons"),
    require("./components/msc-dividers"),
    require("./components/msc-spinner"),
    require("./components/msc-link"),
    require("./components/msc-typography"),
    require("./components/msc-pager"),
    require("./components/msc-filter"),
    require("./components/msc-dialog"),
    require("./components/msc-grey-button"),
    require("./components/msc-tabs"),
    require("./components/msc-cart-action-bar"),
    require("./components/msc-index"),
    require("./components/msc-breadcrumb"),
    require("./components/msc-alert"),
    require("./components/msc-pagination"),
    require("./components/msc-page-down"),
  ],
};
