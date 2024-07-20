/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff9f1c",
        secondary: "#271b27",
        background: "#eaeaea",
      },
      fontFamily: {
        mlight: ["Merienda-Light", "sans-serif"],
        mregular: ["Merienda-Regular", "sans-serif"],
        mmedium: ["Merienda-Medium", "sans-serif"],
        msemibold: ["Merienda-SemiBold", "sans-serif"],
        mbold: ["Merienda-Bold", "sans-serif"],
        mextrabold: ["Merienda-ExtraBold", "sans-serif"],
        mblack: ["Merienda-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
