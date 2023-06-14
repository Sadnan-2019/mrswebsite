// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")]}

  // const withMT = require("@material-tailwind/react/utils/withMT");
 
  // module.exports = withMT({
  //   content: ["./src/**/*.{js,jsx,ts,tsx}"],
  //   theme: {
  //     extend: {},
  //   },
  //   plugins: [require("daisyui")],
  // });

  module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
  
    theme: {
      extend: {},
    },
    // daisyui: {
    //   themes: [
    //     {
    //       mytheme: {
    //         primary: "#3346d3",
    //         secondary: "#0287D0",
    //         accent: "#3A4256",
    //         neutral: "#3d4451",
    //         "base-100": "#ffffff",
    //       },
    //     },
    //   ],
    // },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light", "dark"],
    },
  };