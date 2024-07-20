/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serifMon: ['Montserrat', 'serif'],
      },



      fontWeight: {
        'sembold': 500, 
      },

      colors: {
        cYellow: '#FFDC1C',
        cblue: '#0055FF',
        cpurple: '#E9EBFF'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.underline-solid-blue': {
            'text-decoration': 'underline solid rgb(0, 85, 255)',
          },

          '.font-stretch-normal': {
            'font-stretch': '100%',
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
}
