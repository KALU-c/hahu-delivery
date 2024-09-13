/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: {
          DEFAULT: "#FF7622",
          100: "#FFE1CE",
          bg: "#FFEBE4",
        },
        black: {
          DEFAULT: "#000",
          100: "#32343E",
          200: "#1E1E2E",
        },
        gray: {
          100: "#A0A5BA",
          200: "#7E8A97",
          300: "#646982",
        },
      },
      fontFamily: {
        SenRegular: ["Sen-Regular", "sans-serif"],
        SenMedium: ["Sen-Medium", "sans-serif"],
        SenSemibold: ["Sen-SemiBold", "sans-serif"],
        SenBold: ["Sen-Bold", "sans-serif"],
        SenExtraBold: ["Sen-ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
