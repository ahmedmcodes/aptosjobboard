/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Aptos-black": "#121919",
      },
      backgroundImage: {
        main: "url('https://aptosfoundation.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-texture.e06eb05a.webp&w=1920&q=100')",
      },
      animation: {
        "spin-faster": "spin 0.55s linear infinite",
      },
      fontFamily: {
        nunito: ["Nunito"],
      },
    },
  },
  plugins: [],
};
