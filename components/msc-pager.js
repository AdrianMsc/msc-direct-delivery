module.exports = function ({ addComponents, theme }) {
  const pager = {
    ".msc-pager-container": {
      "@apply relative flex xl:justify-center bg-white rounded-lg max-lg:-mx-4":
        {},
    },
    ".msc-pager-container-after": {
      "@apply after:absolute after:top-0 after:right-0 after:w-9 after:h-full after:bg-gradient-to-r after:from-white after:to-[#f2f2f2] lg:after:content-none after:opacity-80 after:h-[95%] sm:after:h-[83%]":
        {},
    },
    ".msc-pager-container-before": {
      "@apply before:absolute before:top-0 before:left-0 before:w-9 before:h-full lg:before:content-none before:bg-gradient-to-l before:from-white before:to-[#f2f2f2] before:opacity-80 before:h-[95%] sm:before:h-[83%]":
        {},
    },
    ".msc-pager-list": {
      "@apply flex max-w-full overflow-x-auto font-normal py-3 px-4": {},
    },
    ".msc-pager-item": {
      "@apply p-4 lg:px-5 border-r hover:underline": {
        border: theme("colors.monochromes.light"),
      },
      "&:focus": {
        fontWeight: "bold",
        textDecoration: "underline",
      },
      "&:focus-visible": {
        "@apply outline-dashed outline-1 outline-offset-4 outline-[#424242]":
          {},
      },
    },
    ".msc-pager-last-item": {
      "@apply p-4 lg:px-5 whitespace-nowrap border-none hover:underline": {},
      "&:focus": {
        fontWeight: "bold",
        textDecoration: "underline",
      },
    },
  };
  addComponents(pager);
};
