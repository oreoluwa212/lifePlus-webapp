/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#B11E1A",
        black: "#070603",
        gold: "#B79455",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      screens: {
        xs: "340px",
        mds: "600px",
        md: "800px",
        lgss: "976px",
        lg: "1200px",
        xxl: "1300px",
      },
    },
  },
  variants: {},
  plugins: [],
};