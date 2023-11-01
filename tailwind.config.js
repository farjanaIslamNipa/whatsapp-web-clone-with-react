/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        default: '#00a884',
        appBg: '#eae6df',
        primary: '#3b4a54',
        borderDefault: '#e9edef'
      },
      fontFamily: {
        primaryFont: ['Nunito', 'sans-serif']
      },
      screens:{
        '2md' : '781px',
        'slg' : '961px'
      }
    },
  }
}