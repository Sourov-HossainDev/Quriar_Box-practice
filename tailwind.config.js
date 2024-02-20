/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Raleway : ['Raleway', 'sans-serif'],
        Oxanium : ['Oxanium', 'sans-serif'],
      },
      colors : {
        PapayaOrange : '#F95C19',
      },
      backgroundColor : {
        fullWidthColor : '#FFF1DC'
      },
      maxWidth : {
        container : '1320px',
        fullWidth: '1920px',
        
      },
      boxShadow : {
        NavShadow : ' 0px 0px 20px 0px rgba(0, 0, 0, 0.05)',
        cardShadow : ' 0px 0px 20px 5px rgba(63, 61, 86, 0.05)',
        FantasticShadow : ' 0px 0px 20px 5px rgba(0, 19, 119, 0.05)'

      },
      backgroundImage : {
        Delivery : 'url(./assets/Image/Delivery.PNG) '
      }
      
    },
  },
  plugins: [],
}