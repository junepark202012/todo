const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "Roboto",
          "Noto Sans KR",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        gray: {
          50: "#F3F2F2",
          100: "#E9E8E8",
          200: "#D2D2D0",
          300: "#B9B8B6",
          400: "#A3A29F",
          500: "#8C8B87",
          600: "#706F6B",
          700: "#535350",
          800: "#393937",
          900: "#1D1C1B",
        },
      },
    },
  },
  plugins: [],
};
