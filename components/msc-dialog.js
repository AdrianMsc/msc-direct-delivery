module.exports = function ({ addComponents, theme }) {
  const dialog = {
    ".msc-dialog-overlay": {
      "@apply fixed top-0 left-0 w-full h-screen bg-[#21212166] z-50 flex flex-col items-center justify-center":
        {},
    },
    ".msc-dialog": {
      "@apply bg-white max-w-[328px] p-5 rounded shadow-xl": {},
    },
    ".msc-dialog-title": {
      "@apply mb-4": {},
    },
    ".msc-dialog-footer": {
      "@apply flex justify-end mt-4 gap-2": {},
    },
  };
  addComponents(dialog);
};
