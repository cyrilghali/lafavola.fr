/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'herr' : ['Herr Von Muellerhof', 'Lucida Handwriting', 'Brush Script MT', 'Comic Sans', 'Comic Sans MS', 'Chalkboard']
      },
    },
  },
  plugins: [],
}

