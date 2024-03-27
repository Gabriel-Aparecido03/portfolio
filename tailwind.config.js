/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        root: ["Poppins", 'sans-serif'],
      },
      fontSize: {
        base: '0.96rem'
      }
    },

  },
  plugins: [],
}