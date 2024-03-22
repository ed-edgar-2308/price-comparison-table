/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      "4k": { max: "3840px" },
      "1080p": { max: "1920px" },
      "720p": { max: "1280px" },
      xl: { max: "1024px" },
      lg: { max: "768px" },
      md: { max: "428px" },
      sm: { max: "375px" },
      xs: { max: "320px" },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        body: "#F8F9FB",
        accent: "#641BFF",
      },
    },
  },
  plugins: [],
};
