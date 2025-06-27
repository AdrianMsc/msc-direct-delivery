module.exports = function ({ addComponents, theme }) {
  const checkbox = {
    ".msc-h-divider-gray":{
      "@apply w-full h-[1px] bg-monochromes-grey_xlight rounded-full":{}
    },
    ".msc-h-divider-blue":{
      "@apply w-full h-[1px] bg-primary-blue_light rounded-full":{}
    },
    ".msc-v-divider-gray":{
      "@apply h-full w-[1px] bg-monochromes-grey_xlight rounded-full":{}
    },
    ".msc-v-divider-blue":{
      "@apply h-full w-[1px] bg-primary-blue_light rounded-full":{}
    },
  };
  addComponents(checkbox);
};
