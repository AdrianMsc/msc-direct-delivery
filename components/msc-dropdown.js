module.exports = function ({ addComponents, theme }) {
  const dropdown = {
    ".numeric-dropdown-container": {
      "@apply flex bg-white h-9 w-[88px] rounded cursor-pointer border border-[#21212161]":
      {},
      "&:hover":{
        "@apply border-[#212121a3]":
        {}
      }
    },
    ".numeric-dropdown":{
      "@apply flex items-center w-full place-content-between my-2.5 mx-2":{}
    },
    ".numeric-dropdown-input":{
      "@apply w-12 font-normal text-sm text-black text-center":{}
    },
    ".numeric-dropdown-options-container":{
      "@apply w-[88px] min-h-min bg-white rounded absolute mt-8 shadow":{
        "&:active":{
          "@apply border-0":{}
        }
      }
    },
    ".numeric-dropdown-options":{
      "@apply flex max-h-10 w-full py-[13px] px-6 gap-1.5 items-center font-normal text-sm text-black":{},
        "&:hover":{
          "@apply bg-[#f2f2f280]":{}
        },
    },
    ".dropdown-label":{
      "@apply flex w-full items-center font-bold gap-6":{}
    },
    ".dropdown-label-top":{
      "@apply absolute -top-2.5 left-1 px-1 bg-white text-xs":{}
    },
    ".dropdown-container":{
      "@apply flex w-full bg-white h-10 rounded cursor-pointer border border-[#21212161] relative":{},
      "&:hover":{
        "@apply border-[#212121a3]":
        {}
      },
    },
    ".dropdown-button":{
      "@apply flex items-center w-full place-content-between mx-4 my-3.5":{}
    },
    ".dropdown-placeholder":{
      "@apply font-normal text-sm":{},
      color: theme("colors.monochromes.grey"),
    },
    ".dropdown-options-container":{
      "@apply w-full min-h-min bg-white rounded absolute mt-9 shadow":{}
    },
    ".dropdown-option":{
      "@apply flex max-h-10 w-full py-3.5 px-4 gap-1.5 items-center font-normal text-sm text-black":{},
      "&:hover":{
        "@apply bg-[#f2f2f280]":{}
      },
      "&:active":{
        "":{},
      },
    },
    ".dropdown-disabled":{
      "@apply cursor-not-allowed text-[#21212129] border-[#21212129]":{},
      "&:hover":{
        borderColor: '#21212129'
      }
    },
    ".dropdown-error":{
      borderColor: theme("colors.error.red"),
      color: theme("colors.error.red"),
      "&:hover":{
        borderColor: theme("colors.error.red"),
      }
    },
    ".dropdown-error-message":{
      color: theme("colors.error.red"),
      "@apply text-xs font-medium mt-1":{},
    },
    ".dropdown-error-placeholder":{
      color: theme("colors.error.red"),
    },
    ".dropdown-active":{
      borderColor: theme("colors.white"),
      "&:hover":{
        borderColor: theme("colors.white"),
      }
    },
    ".msc-double-dropdown-container":{
      "@apply flex w-full bg-white h-fit rounded cursor-pointer border border-[#21212161] relative":{},
      "&:hover":{
        "@apply border-[#212121a3]":
        {}
      },
    },
    ".double-dropdown-options-container":{
      "@apply w-full min-h-min bg-white rounded absolute mt-14 shadow overflow-hidden":{}
    },
    ".double-dropdown-option":{
      "@apply flex flex-col h-fit w-full py-3.5 px-4 items-start cursor-pointer":{},
      "&:hover":{
        "@apply bg-[#f2f2f280]":{}
      },
      "&:active":{
        "":{},
      },
    },
    ".double-dropdown-active":{
      borderColor: theme("colors.white"),
      "&:hover":{
        borderColor: theme("colors.white"),
      }
    },
  };

  addComponents(dropdown);
};
