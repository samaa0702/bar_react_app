/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DCCA87",
        black: "#0C0B08",
        white: "#fff",
      },
      fontFamily: {
        cormorant: ["Cormorant", "serif"],
      },
      listStyleImage: {
        glass: 'url("./assets/glass-svgrepo-com.svg")',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
