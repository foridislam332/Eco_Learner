/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'green': '#a6c437',
        'orange': '#ffbd0a',
        'red': '#f05a21',
        'dark': '#1e293b',
        'gray': '#666666',
      }
    },
    fontFamily: {
      'rubik': ['Rubik', 'sans-serif']
    },
    boxShadow: {
      'custom': '0px 5px 25px 0px rgba(166, 196, 55, 0.35)',
    }
  },
  plugins: [],
}

