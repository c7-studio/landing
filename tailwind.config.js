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
              },
      keyframes: {
        'fade-in-down' : {
          '0%' : {
            opacity: '0',
            transform: 'translateY(-50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          },
        'fade-in-up' : {
          '0%' : {
            opacity: '0',
            transform: 'translateY(50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          },
        'fade-in-right' : {
          '0%' : {
            opacity: '0',
            transform: 'translateX(-50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
          },
        },
        animation: {
          'fade-in-down': 'fade-in-down 0.5s ease-out',
          'fade-in-up': 'fade-in-up 0.5s ease-out',
          'fade-in-right': 'fade-in-right 0.5s ease-out'
        }
      }
    },
  
  plugins: [require('@tailwindcss/aspect-ratio'),
            require("flowbite/plugin"),
          ],
  }
