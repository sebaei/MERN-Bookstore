/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./*.html", "./src/**/*.{vue,js,ts,jsx,tsx,css}"],
  darkMode: false, // or 'media' or 'class'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
