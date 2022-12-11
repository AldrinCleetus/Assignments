/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'IBM': ['IBM Plex Sans', 'sans-serif']
      },
      backgroundImage:{
        'hero':"url('laptop.jpg')"
      },
      colors:{
        'primary': "#2F6CE5"
      }
    },
    
  },
  plugins: [],
}
