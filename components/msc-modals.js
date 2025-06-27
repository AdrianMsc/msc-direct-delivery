module.exports = function ({ addComponents, theme }) {
  const modals = {
    ".msc-modal-bg": {
      "@apply absolute flex h-screen w-screen bg-[#21212166] top-0 left-0 place-content-center place-items-center":
        {},
    },
    ".msc-modal": {
      "@apply max-h-[560px] max-w-[560px] bg-white rounded-lg shadow-xl": {},
    },
    ".msc-modal-header": {
      "@apply flex p-4 w-full place-content-between": {},
    },
    ".msc-modal-title": {
      "@apply text-lg font-bold": {},
    },
    ".msc-modal-close": {
      "@apply h-3 w-3": {},
    },
    ".msc-modal-body": {
      "@apply flex-row px-4 pt-4 border-t border-b text-sm overflow-hidden": {},
    },
    ".msc-modal-p": {
      "@apply text-pretty mb-4": {},
    },
    ".msc-modal-footer": {
      "@apply flex p-4 gap-4 place-content-between": {},
    },
  };
  addComponents(modals);
};
