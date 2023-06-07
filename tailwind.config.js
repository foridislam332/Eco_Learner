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
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
        maxWidth: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1170px'
        },
      },
    },
  },
  plugins: [],
}

