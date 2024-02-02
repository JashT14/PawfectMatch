/** @type {import('tailwindcss').Config} */

export default {

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
    fontFamily: {
      customFont: ['"Inter"', "sans-serif"],
    },
    colors: {
      lightest: "#F4F9F4",
      light: "#A7D7C5",
      medium: "#90C3AF",
      darkest: "#7DA4A1",
      white: "#FFFFFF",
    },
    extend: {},
  },
  //plugins: [require("@tailwindcss/forms")],
};
