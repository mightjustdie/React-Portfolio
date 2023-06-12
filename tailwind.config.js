/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
         backgroundImage: {
          'port-bg': "url('../assets/img/port-bg.jpg')",
         }
      },
    },
    plugins: [],
  }
  