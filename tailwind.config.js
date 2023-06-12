/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
      'port-bg': "url('../assets/img/port-bg.jpg')",
      }
    },
  },
  plugins: [],
}
  

  'port-bg': "url('../assets/img/port-bg.jpg')",