/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monserrat: "'Montserrat', sans-serif",
      },
      backgroundImage: {
        main: "url(/images/bg1.png)",
      },
    },
  },
  plugins: [require("daisyui")],
};
