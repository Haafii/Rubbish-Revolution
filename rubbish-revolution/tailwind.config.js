/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B2B2B",
        secondary: "#3B3B3B",
      },
    },
  },
  plugins: [],
};
