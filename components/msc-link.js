module.exports = function ({ addComponents, theme }) {
  const link = {
    ".msc-link": {
      "@apply text-base text-primary-blue_dark font-bold hover:underline": {},
    },
    ".msc-link-sm": {
      "@apply text-sm text-primary-blue_dark font-bold hover:underline": {},
    },
    ".msc-text-link": {
      "@apply text-base text-monochromes-main font-normal hover:underline": {},
    },
    ".msc-text-link-sm": {
      "@apply text-sm  text-monochromes-main font-normal hover:underline": {},
    },
    ".msc-dd-link": {
      "@apply flex text-base text-primary-blue_dark font-bold hover:underline hover:cursor-pointer":
        {},
    },
    ".msc-dd-link-sm": {
      "@apply flex text-sm text-primary-blue_dark font-bold hover:underline hover:cursor-pointer":
        {},
    },
    ".msc-dd-link-icon": {
      "@apply w-[12px] ml-2 fill-primary-blue_dark transition-all": {},
    },
  };
  addComponents(link);
};
