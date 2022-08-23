module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: {
            1: '#ffcd05'
          },
          gray: {
            1: '#222222',
            2: '#F1F1F0',
            3: '#2F2F2F'
          },
          green: {
            1: '#18C49E'
          },
          orange: {
            1: '#F2AB39'
          },
          blue: {
            1: '#47ACF2'
          },
          purple: {
            1: '#9C50E3'
          },
          red: {
            1: '#EC2D2C'
          }
        }
      },
      maxWidth: {
        '8xl': '100rem'
      },
      fontFamily: {
        'helvetica-black': ['Helvetica black', 'sans-serif'],
        'Helvetica-bold': ['Helvetica bold', 'sans-serif'],
        'helvetica-condensed': ['Helvetica condensed', 'sans-serif'],
        'helvetica-light': ['Helvetica light', 'sans-serif'],
        'helvetica-pro': ['Helvetica pro', 'sans-serif'],
        'helvetica-roman': ['Helvetica roman', 'sans-serif']
      }
    }
  },
  plugins: []
}
