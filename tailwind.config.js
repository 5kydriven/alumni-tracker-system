/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto, sans-serif']
      },
      screens: {
        sm: '640px',
        md: '768px'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
