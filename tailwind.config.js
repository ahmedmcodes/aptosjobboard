/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Aptos-black": "#121919",
      },
      backgroundImage: {
        "main-bg": "url('./bg-image.png')",
      },
    },
  },
  plugins: [],
};