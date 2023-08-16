/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Lexend', 'sans serif']
    },
    container:{
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1100px',
      },
      padding: "1rem",
      center: true
    },
    extend: {
       colors: {
      'light-blue': "#f2f4f7",
      "dark-blue": "#021E35",
      "primary": "#344054",
      "label": "#667085",
      "morphism": "#1A89EC"
    }
    },
   
  },
  plugins: [],
}

