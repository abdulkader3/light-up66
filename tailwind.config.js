/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'work':["Work Sans",'sans-serif' ],
        'lato':["Lato", 'sans-serif' ],
      },
      backgroundImage:{
        'top':"url('/images/img1.jpg') "
      }
    },
    container:{
      center:true,
      padding:'30px'
    }
  },
  plugins: [],
}