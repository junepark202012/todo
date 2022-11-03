// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");
const defaultColors = require("tailwindcss/colors");

const colorPalette = {
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
  bistre: {
    50: "#F4ECE2",
    100: "#E7D6C0",
    200: "#CFAD82",
    300: "#B48446",
    400: "#76562D",
    500: "#392A16",
    600: "#2C2011",
    700: "#21180D",
    800: "#161009",
    900: "#0B0804",
  },
};

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
        ...colorPalette,
        form: {
          border: colorPalette.gray["300"],
          description: colorPalette.gray["400"],
          focusBorder: colorPalette.gray["500"],
          placeholder: colorPalette.gray["300"],
          text: colorPalette.gray["900"],
          label: colorPalette.gray["700"],
        },
        primary: {
          default: colorPalette.gray["900"],
          light: colorPalette.gray["600"],
        },
        background: {
          default: colorPalette.gray["50"],
          white: defaultColors.white,
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
