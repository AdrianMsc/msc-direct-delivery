module.exports = function ({ addComponents, theme }) {
  const greyButton = {
    ".msc-grey-button": {
      "@apply flex gap-[6px] items-center py-[13px] px-[10px] text-sm font-normal text-monochromes-grey leading-[14px] text-nowrap":
        {},
      "&:hover": {
        "@apply text-monochromes-main": {},
      },
      "&:disabled": {
        "@apply text-monochromes-grey_light cursor-not-allowed": {},
      },
    },
  };
  addComponents(greyButton);
};
