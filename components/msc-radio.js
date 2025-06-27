module.exports = function ({ addComponents, theme }) {
  const radio = {
    ".msc-radio-container": {
      "@apply flex w-fit py-2 px-3 bg-white items-center shadow-md":{}
    },
    ".msc-radio-input": {
      "@apply w-4 h-4 text-black":{}
    },
    ".msc-radio-label": {
      "@apply w-full ms-2 text-sm text-black font-normal":{}
    },
    ".msc-radio-horizontal-main-container": {
      "@apply items-center w-[150px] text-sm bg-white border rounded flex":{}
    },
    ".msc-radio-horizontal-container": {
      "@apply w-full border-b border-gray-100 border-r rounded-l":{}
    },
    ".msc-input-horizontal-container": {
      "@apply flex items-center ps-3":{}
    },
    ".msc-input-horizontal": {
      "@apply w-4 h-4 bg-gray-100 border-gray-300":{}
    },
    ".msc-input-horizontal-label": {
      "@apply w-full py-3 ms-2 text-sm text-black":{}
    },
  };
  addComponents(radio);
};
