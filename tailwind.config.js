/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d9d9d9',
        black_primary: '#292929',
        location_button: '#4CBB17',
      },
    },
  },
  plugins: [],
}