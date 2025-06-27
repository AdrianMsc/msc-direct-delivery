module.exports = function ({ addComponents, theme }) {
  const input = {
    ".msc-input": {
      "@apply bg-white w-full h-10 px-4 py-3.5 text-sm rounded border !border-monochromes-grey_light placeholder-transparent disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed disabled:text-monochromes-grey_light hover:disabled:!border-[#e5e7eb] hover:enabled:!border-monochromes-main focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red":{},
    },
    ".msc-input-label": {
      "@apply bg-white absolute left-3.5 -top-[0.6rem] pt-[1px] px-[0.2rem] text-xs transition-all cursor-text peer-placeholder-shown:text-sm peer-placeholder-shown:text-monochromes-grey_light peer-placeholder-shown:top-2 peer-focus:-top-[0.6rem] peer-focus:text-[#212121] peer-focus:text-xs peer-focus:cursor-default peer-invalid:text-error-red peer-disabled:bg-off_white":
        {},
    },
    ".msc-input-wrapper": {
      "@apply  relative w-full": {},
    },
    ".msc-input-unit": {
      "@apply  text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black h-10 disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red":
        {},
    },
    ".msc-input-unit-label": {
      "@apply text-monochromes-main text-sm mb-1 text-xs text-center peer-disabled:text-monochromes-grey_xlight": {},
    },
    ".msc-input-unit-wrapper": {
      "@apply relative flex flex-col max-w-[68px] w-[68px]": {},
    },
    ".msc-error-message": {
      "@apply  text-error-red font-semibold mt-1 hidden peer-invalid:block !important": {},
    },
  };

  addComponents(input);
};