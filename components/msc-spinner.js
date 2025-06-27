module.exports = function ({ addComponents }) {
  const spinner = {
    ".msc-spinner-wrapper": {
      "@apply flex flex-col items-center w-[200px]": {},
    },
    ".msc-spinner": {
      "@apply mb-3 animate-spin w-[62px] h-[62px]": {},
    },
    ".msc-spinner-label": {
      "@apply text-base": {},
    },
    ".msc-spinner-label-dark": {
      "@apply text-white": {},
    },
    ".msc-spinner-overlay": {
      "@apply fixed bg-white w-full h-full top-0 left-0 flex justify-center items-center z-40":
        {},
    },
    ".msc-spinner-overlay-dark": {
      "@apply fixed bg-monochromes-main w-full h-full top-0 left-0 flex justify-center items-center z-40":
        {},
    },
  };
  addComponents(spinner);
};
