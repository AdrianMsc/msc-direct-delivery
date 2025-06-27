module.exports = function ({ addComponents }) {
  const pageDown = {
    ".msc-pd-header": {
      "@apply bg-white overflow-hidden shadow px-10 py-[14px] flex w-full fixed border-b h-[68px] items-center place-content-between border-monochromes-grey_xlight":
        {},
    },
    ".msc-pd-container": {
      "@apply flex flex-col w-screen h-screen overflow-hidden justify-center":
        {},
    },
    ".msc-pd-text-container": {
      "@apply flex flex-col text-center text-balance w-full gap-8 pb-8 items-center justify-center":
        {},
    },
    ".msc-pd-img-container": {
      "@apply flex relative": {},
    },
    ".msc-plug-container-left": {
      "@apply w-1/2 relative h-[80px] flex items-center": {},
    },
    ".msc-left-wire": {
      "@apply h-[20px] w-[95%]": {},
      background: "transparent url(../assets/fragment.svg) scroll repeat-x",
    },
    ".msc-plug-container-right": {
      "@apply w-1/2 relative h-[80px] flex items-center": {},
    },
    ".msc-right-wire": {
      "@apply h-[20px] w-full w-[95%] left-[5%] relative": {},
      background: "transparent url(../assets/fragment.svg) scroll repeat-x",
    },
    ".msc-pd-left-plug": {
      "@apply absolute -right-10 top-0 animate-unplugLeft h-full": {},
    },
    ".msc-pd-right-plug": {
      "@apply absolute left-0 top-0 animate-unplugRight h-full": {},
    },
    ".msc-pd-timestamp": {
      "@apply text-monochromes-grey text-center pt-8 sm:pt-16": {},
    },
    ".msc-pd-bg-container": {
      "@apply absolute w-screen h-screen flex items-center justify-center": {},
    },
    ".msc-pd-bg": {
      "@apply absolute -z-50  bg-primary-blue_xlight rounded-full size-[400px] sm:size-[500px]":
        {},
    },
  };
  addComponents(pageDown);
};
