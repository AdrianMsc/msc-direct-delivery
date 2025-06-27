module.exports = function ({ addComponents, theme }) {
  const buttons = {
    ".msc-btn": {
      "@apply py-2 px-2 md:px-5 h-10 rounded-full font-bold text-base cursor-pointer min-w-24 md:min-w-32":
        {},
    },
    ".msc-btn-sm": {
      "@apply h-7 text-sm py-1": {},
    },
    ".msc-btn-blue-solid": {
      "@apply text-white cursor-pointer": {},
      backgroundColor: theme("colors.primary.blue"),
      "&:hover": {
        backgroundColor: "#186DF5",
      },
      "&:active": {
        backgroundColor: theme("colors.primary.blue_dark"),
      },
      "&:disabled": {
        "@apply text-white cursor-not-allowed": {},
        backgroundColor: theme("colors.monochromes.grey_light"),
      },
      "&:focus-visible": {
        "@apply outline-dashed outline-1 outline-offset-4 outline-[#424242]":
          {},
      },
      "&:disabled": {
        "@apply text-white cursor-not-allowed": {},
        backgroundColor: theme("colors.monochromes.grey_light"),
      },
    },
    ".msc-btn-blue-outline": {
      "@apply bg-transparent border": {},
      color: theme("colors.primary.blue"),
      borderColor: theme("colors.primary.blue"),
      "&:hover": {
        backgroundColor: theme("colors.primary.blue_xlight"),
      },
      "&:active": {
        backgroundColor: "#0d3aa933",
      },
      "&:disabled": {
        "@apply bg-transparent cursor-not-allowed border": {},
        color: theme("colors.monochromes.grey_light"),
        borderColor: theme("colors.monochromes.grey_light"),
      },
      "&:focus-visible": {
        "@apply outline-dashed outline-1 outline-offset-4 outline-[#424242]":
          {},
      },
      "&:disabled": {
        "@apply bg-transparent cursor-not-allowed border": {},
        color: theme("colors.monochromes.grey_light"),
        borderColor: theme("colors.monochromes.grey_light"),
      },
      "& .msc-btn-dot1, .msc-btn-dot2, .msc-btn-dot3": {
        backgroundColor: theme("colors.primary.blue"),
      },
    },
    ".msc-btn-transparent": {
      "@apply bg-transparent min-w-32": {},
      color: theme("colors.primary.blue"),
      "&:hover": {
        backgroundColor: theme("colors.primary.blue_xlight"),
      },
      "&:active": {
        backgroundColor: "#0d3aa933",
      },
      "&:disabled": {
        "@apply bg-transparent cursor-not-allowed": {},
        color: theme("colors.monochromes.grey_light"),
      },
      "&:focus-visible": {
        "@apply outline-dashed outline-1 outline-offset-4 outline-[#424242]":
          {},
      },
      "&:disabled": {
        "@apply bg-transparent cursor-not-allowed": {},
        color: theme("colors.monochromes.grey_light"),
      },
      "& .msc-btn-dot1, .msc-btn-dot2, .msc-btn-dot3": {
        backgroundColor: theme("colors.primary.blue"),
      },
    },
    ".msc-btn-icon": {
      "@apply flex items-center ml-2 min-w-32": {},
    },
    ".msc-btn-dots-container": {
      "@apply w-10 h-auto flex place-content-between items-center m-auto": {},
    },
    ".msc-btn-dot1": {
      "@apply relative w-2 h-2 bg-white rounded-full animate-dotFlashing1": {},
    },
    ".msc-btn-dot2": {
      "@apply relative w-2 h-2 bg-white rounded-full animate-dotFlashing2 opacity-50":
        {},
    },
    ".msc-btn-dot3": {
      "@apply relative w-2 h-2 bg-white rounded-full animate-dotFlashing3 opacity-30":
        {},
    },
    ".msc-icon-button-sm": {
      "@apply p-2 h-[36px] hover:bg-off_white rounded-full focus:bg-monochromes-grey_xlight disabled:bg-white text-monochromes-grey disabled:text-monochromes-grey_xlight":
        {},
    },
    ".msc-icon-button-sm i": {
      "@apply text-[20px]": {},
    },
    ".msc-icon-button": {
      "@apply p-2 h-[40px] hover:bg-off_white rounded-full focus:bg-monochromes-grey_xlight disabled:bg-white text-monochromes-grey disabled:text-monochromes-grey_xlight":
        {},
    },
    ".msc-icon-button i": {
      "@apply text-[24px]": {},
    },
    ".msc-icon-button-lg": {
      "@apply p-2 h-[48px] hover:bg-off_white rounded-full focus:bg-monochromes-grey_xlight disabled:bg-white text-monochromes-grey disabled:text-monochromes-grey_xlight flex items-center justify-center":
        {},
    },
    ".msc-icon-button-lg ": {
      "@apply text-[32px]": {},
    },
  };
  addComponents(buttons);
};
