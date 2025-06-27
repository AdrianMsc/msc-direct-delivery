module.exports = function ({ addComponents }) {
  const breadcrumb = {
    ".msc-breadcrumb-container": {
      "@apply flex flex-wrap text-monochromes-grey text-sm font-normal w-full":
        {},
    },
    ".msc-breadcrumb-container li": {
      "@apply flex": {},
    },
    ".msc-breadcrumb-container span": {
      "@apply mx-1": {},
    },
    ".msc-breadcrumb-container :last-child a": {
      "@apply font-bold cursor-auto": {},
      "&:hover": {
        "@apply no-underline": {},
      },
    },
    ".msc-breadcrumb-container :last-child span": {
      "@apply hidden": {},
    },
    ".msc-breadcrumb": {
      "@apply cursor-pointer": {},
      "&:hover": {
        "@apply underline": {},
      },
    },
  };
  addComponents(breadcrumb);
};
