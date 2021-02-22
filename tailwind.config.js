module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['Open Sans', 'sans-serif'],
      'mono': ['Roboto Mono', 'monospace']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
