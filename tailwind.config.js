/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors: {
        back: "#202632",
        backCard: "#313a49",
        textprimary: "#e5e7eb",
        textseconsary: "#53ffab",
      },
    },
  },
  plugins: [],
};
