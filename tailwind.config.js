/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)", ...fontFamily.sans],
    },
    animation: {
      "waving-hand": "wave 2s linear infinite",
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
