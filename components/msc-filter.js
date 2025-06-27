module.exports = function ({ addComponents }) {
  const filter = {
    ".msc-top-filter": {
      "@apply border border-monochromes-grey_light rounded bg-white h-8 py-1.5 px-3 items-center text-monochromes-grey flex place-content-between w-full overflow-hidden":
        {},
      "&:hover": {
        borderColor: "#000000",
      },
    },
    ".msc-top-filter p": {
      "@apply text-nowrap truncate align-middle": {},
    },
    ".msc-top-filter i": {
      "@apply bg-white": {},
    },
    ".msc-top-filter-active": {
      "@apply border border-monochromes-grey_light rounded bg-white h-8 py-1.5 px-3 items-center text-monochromes-grey hover:border-black text-black flex w-full overflow-hidden justify-between":
        {},
      "&:hover": {
        borderColor: "#000000",
      },
    },
    ".msc-top-filter-active p": {
      "@apply text-nowrap truncate align-middle": {},
    },
    ".msc-top-filter-badge": {
      "@apply text-white rounded-full bg-black size-4 text-xs items-center min-w-4":
        {},
    },
    ".msc-top-filters-section": {
      "@apply flex flex-col gap-2 w-full bg-[#F2F2F2] p-3 border border-primary-blue rounded overflow-auto":
        {},
    },
    ".msc-top-filters-title": {
      "@apply font-bold text-lg": {},
    },
    ".msc-top-filters-container": {
      "@apply flex flex-row gap-1 place-content-between overflow-clip shrink":
        {},
    },
  };
  addComponents(filter);
};
