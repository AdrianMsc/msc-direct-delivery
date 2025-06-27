module.exports = function ({ addComponents, theme }) {
  const checkbox = {
    ".msc-checkbox-container": {
      "@apply flex items-center gap-3": {},
    },
    ".msc-checkbox": {
      "@apply w-5 h-5 rounded accent-black": {},
      borderColor: theme("colors.monochromes.grey_light")
    },
    ".msc-checkbox-label": {
      "@apply relative inline-flex items-center gap-3 cursor-pointer mb-0.5": {},
    },
  };
  addComponents(checkbox);
};
