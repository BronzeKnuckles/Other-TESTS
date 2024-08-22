/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],

  plugins: [require('daisyui'),],
  theme: {
    container: {
      center: true,
    },
  },
}

