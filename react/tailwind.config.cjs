/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
   "./index.html",
   "./src/**/*.{html,js,jsx,tsx,cjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
   require('@tailwindcss/forms'),
  ],
}
