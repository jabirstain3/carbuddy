/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'scnd':"#f5b754",
      'base':"#ffffff",
      'acn':"#5555553f",
      'based':"#000000",
    },
  },
  plugins: [
    require('daisyui'),
  ],
}