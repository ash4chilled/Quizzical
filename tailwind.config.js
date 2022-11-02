/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content : ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage :{
        'template' : "url('./Images/template-background.jpg')"
      },
      backgroundColor : {
        'alabaster' : '#EDEADE',
      },
      colors : {
        'alabaster' : '#EDEADE',
        'grey': '#212F3D',
        'op-grey' : '#212F3D',
        'd-grey' : '#1C2833',
        'opBorder' : '#566573',
        'red' : '#7B241C'
      },
      borderWidth : {
        'thin' : '1px',
      },
      fontSize: {
        'op': '.55rem',
        'q': '.75rem'
      }
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
          '.scrollbar': {
              overflowY: 'auto',
              scrollbarColor: `${theme('colors.d-grey')} ${theme('colors.grey')}`,
              scrollbarWidth: 'thin',
          },
          '.scrollbar::-webkit-scrollbar': {
              height: '4px',
              width: '4px',
          },
          '.scrollbar::-webkit-scrollbar-thumb': {
              backgroundColor: theme('colors.op-grey'),
          },
          '.scrollbar::-webkit-scrollbar-track-piece': {
              backgroundColor: theme('colors.grey'),
          },
      });
    }),
  ],
}



