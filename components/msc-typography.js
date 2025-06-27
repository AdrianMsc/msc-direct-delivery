module.exports = function ({ addComponents, theme }) {
  const typography = {
    h1: {
      "@apply font-bold text-[28px] lg:text-[32px] lg:leading-10": {},
    },
    h2: {
      "@apply font-bold text-[24px] lg:text-[28px] lg:leading-9": {},
    },
    h3: {
      "@apply font-bold text-[20px] lg:text-[24px] lg:leading-8": {},
    },
    h4: {
      "@apply font-bold text-[16px] lg:text-[20px] lg:leading-7": {},
    },
    h5: {
      "@apply font-bold text-[14px] lg:text-[16px] lg:leading-6": {},
    },
    h6: {
      "@apply font-bold text-[12px] lg:text-[14px] lg:leading-5": {},
    },
    ".overline-text": {
      "@apply font-bold text-[12px] uppercase": {},
    },
    ".caption-text": {
      "@apply font-normal text-[12px]": {},
    },
    ".helper-text": {
      "@apply font-bold text-[12px]": {},
    },
    ".custom-text": {
      "@apply font-normal text-[16px]": {},
      "font-family": "Roboto",
    },
  };
  addComponents(typography);
};
