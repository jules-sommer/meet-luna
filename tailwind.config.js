/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "Roboto"],
        serif: ["ui-serif", "Roboto Slab"],
        mono: ["ui-monospace", "Fira Code"],
      }
    },
  },
  plugins: [require("daisyui")],
}