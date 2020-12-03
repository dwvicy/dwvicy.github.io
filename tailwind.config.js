module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
       wiggle: 'wiggle 1s ease-in infinite',
      }
    }
    },
  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
}
