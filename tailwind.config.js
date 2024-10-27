/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primarygray: "#d8d8d8",
        colorWhite: "#f5f5f5",
        colorBlack: "#0b0b0d",
        button: "#fe383d",
      },
      translate:{
        centralize: "-50% -50%",
        centralizeone: "-50%"
      },
      borderWidth:{
        border1: "1px",
      },
      maxWidth:{
        300: "300px"
      }

    }, screens: {
      'tablet': '700px',
      
      "moba": "300px",

      'laptop': '1024px',
     

      'desktop': '1900px',
  
    },
    letterSpacing:{
      "padrao": "1px"
    },
    gridTemplateColumns:{
      "gridpadrao": "repeat(3, minmax(0, 300px));",
       "grid2": "repeat(2, minmax(0, 300px));"
    }
  },
  plugins: [],
}

