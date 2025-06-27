module.exports = function ({ addComponents, theme }) {
  const tabs = {
    ".msc-tabs": {
      "@apply grid auto-cols-min w-full overflow-x-auto md:overflow-x-hidden":
        {},
    },
    ".msc-tabs li": {
      "@apply text-[16px] grow text-center cursor-pointer transition-all after:transition-all after:duration-500  relative after:w-0 text-monochromes-grey border-gray-700 border-opacity-[16%] border-b hover:font-bold hover:text-black border-b hover:border-black font-bold":
        {},
    },
    ".msc-tabs li a": {
      "@apply p-3 border-r border-gray-200 w-full block text-nowrap": {},
    },
    ".msc-tabs :last-child a": {
      "@apply !border-r-0": {},
    },
    ".msc-tabs .active": {
      "@apply text-black grow text-center font-bold after:!bg-primary-blue  after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0 hover:border-transparent":
        {},
    },
  };
  addComponents(tabs);
};
