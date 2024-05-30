/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#031723",
        background: "#F4FBFE",
        backgroundFooter: "#031723",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
      }
    },
  },
  plugins: [],
};
