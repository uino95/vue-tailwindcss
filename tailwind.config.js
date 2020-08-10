module.exports = {
  theme: {
      extend: {
          // typeface-titillium-web
          // fontFamily: {
          //     body: [ "'Titillium Web'", "sans-serif" ]
          // },
          colors: {
              'error': '#e53e3e',
              'secondary': '#898989',
              'light': '#E9E9E9',
              'disabled': '#777777',
              'primary': {
                  100: '#FFFBED',
                  200: '#FFF4D3',
                  300: '#FFEDB8',
                  400: '#FFE082',
                  500: '#FFD24D',
                  600: '#E6BD45',
                  700: '#997E2E',
                  800: '#735F23',
                  900: '#4D3F17',
              },
              'btn': {
                  'normal': '#000000',
                  'hover': '#FFD24D',
                  'active': '#3A3A3A',
                  'text': '#F1F1F1'
              },
          },
          maxHeight: {
              '10': '10rem'
          },
          height: {
              '600': '1000px'
          },
          fontSize: {
              'xxs': '0.7rem'
          }
      },
  },
  variants: {
      borderWidth: ['responsive', 'hover', 'focus'],
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      textColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
