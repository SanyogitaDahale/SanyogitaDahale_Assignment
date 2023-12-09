/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens:{
      sm: '480px',
      md: '800px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightPink: '#FF1472',
        lightYellow: '#ffebab',
        BGreen: '#27AE60',
        DPurple: '#6300DF',
        Hgray:'#C4C4C4',
        SYellow:'#FFBF00',
      }
    },
  },
  plugins: [],
}

