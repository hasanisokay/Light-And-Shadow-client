/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui:{themes:["light"]},

  plugins: [require("daisyui")],
  theme: {
    fontFamily: {
      kanit: ['Kanit', 'sans-serif'],
      julious: ['Julius Sans One', 'sans-serif'],
      roboto:['Roboto', 'sans-serif'],
      poppins:['Poppins', 'sans-serif']
    },
  },
}


