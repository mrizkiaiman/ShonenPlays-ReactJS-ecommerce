module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'd-green': '#006266',
        'd-blue': '#0a3d62',
        'd-red': '#b71540',
        'f-blue': '#0389FF',
        orange: '#ffb244',
      },
      fontFamily: {
        sans: ['Oxanium', 'cursive'],
        titillium: ['Titillium Web', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
