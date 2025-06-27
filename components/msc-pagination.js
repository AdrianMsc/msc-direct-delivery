module.exports = function ({ addComponents }) {
  const buttons = {
    ".msc-pagination": {
      "@apply h-14 w-fit p-2 bg-white rounded items-center gap-1 flex flex-row":
        {},
    },
    ".msc-pagination-btn-text": {
      "@apply p-[10px] rounded border border-transparent justify-center items-center gap-1 flex text-[#212121] text-sm font-bold min-w-10 min-h-10":
        {},
      "&:hover": {
        "@apply bg-primary-blue_xlight border border-primary-blue_light text-primary-blue":
          {},
      },
      "&:disabled": {
        "@apply text-monochromes-grey_xlight cursor-not-allowed bg-white border-transparent":
          {},
      },
    },
    ".msc-pagination-btn-text p": {
      "@apply hidden md:flex": {},
    },
    ".msc-pagination-btn": {
      "@apply size-10 p-2 rounded justify-center items-center flex text-black text-sm font-bold":
        {},
      "&:hover": {
        "@apply bg-primary-blue_xlight border border-primary-blue_light text-primary-blue":
          {},
      },
    },
    ".msc-pagination-btn-active": {
      "@apply bg-white border-2 border-primary-blue text-primary-blue": {},
      "&:hover": {
        "@apply bg-white border-2 border-primary-blue text-primary-blue": {},
      },
    },
    ".msc-pagination-btn-ellipsis": {
      "@apply size-10 p-2 rounded justify-center items-center flex text-monochromes-grey_light text-sm font-bold cursor-default":
        {},
    },
  };
  addComponents(buttons);
};
