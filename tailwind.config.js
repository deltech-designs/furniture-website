/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "5rem",
    },

    mdContainer: {
      padding: "2rem",
    },

    colors: {
      white: "#ffffff",
      black: "#000000",
      darkBlack: "#9F9F9F",
      dark: "#3A3A3A",
      lightBrown: "#FFF3E3",
      brown: "#B88E2F",
      gray: "#666666",
      lightgray: "#F4F5F7",
      lightergray: "#616161",
      gold: "#B88E2F",
      darkGray: "#B0B0B0",
      lightGreen: "#2EC1AC",
      pink: "#E97171",
    },

    fontFamily: {
      sans: "poppins",
    },

    fontSize: {
      12: "12px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      36: "36px",
      48: "48px",
      50: "50px",
    },
    extend: {},
  },
  plugins: [],
};
