/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./public/index.html",
    "./src/**/*.{vue, js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'shadows': '0 0 0.6rem rgb(74, 137, 232)'
      }
    },
  },
  plugins: [],
}

