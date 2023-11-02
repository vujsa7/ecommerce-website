/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Bebas Neue"],
        body: ["Outfit"],
      },
      colors: {
        fw: {
          blue: "#11283D",
          darkblue: "#192630",
          grey: "#F8F8F8",
          darkgrey: "#C1C1C1",
        },
      },
      fontSize: {
        xsm: "0.75rem",
      },
    },
  },
  plugins: [],
};
