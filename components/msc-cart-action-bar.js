module.exports = function ({ addComponents, theme }) {
  const cartActionBar = {
    ".msc-cart-action-bar": {
      "@apply bg-white rounded w-fit": {},
    },
    ".msc-buttons-container": {
      "@apply items-center hidden lg:flex": {},
    },
    ".msc-buttons-container-responsive": {
      "@apply flex flex-col mt-1 items-start w-[160px] rounded bg-white absolute":
        {},
    },
    ".msc-v-divider-blue": {
      "@apply h-full w-[1px] bg-primary-blue_light rounded-full": {},
    },
  };
  addComponents(cartActionBar);
};
