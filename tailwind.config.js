/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black' : '#000000',
        'grey' : '#ABABAB',
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),
            require("flowbite/plugin")
],
}
