/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,html,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#E9D5CA",
        secondary: "#827397",
        tertiary: "#4D4C7D",
        quaternary: "#363062",
      },
    },
  },
  plugins: [],
};
