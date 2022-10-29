const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      gray: {
        100: "#F2F1E9",
        300: "#D9D7D0",
        500: "#8C8B87",
        700: "#595959",
        900: "#0D0D0D",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "Roboto",
          "Noto Sans KR",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {},
    },
  },
  plugins: [],
};
