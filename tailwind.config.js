/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary:"#1C1F20",
        button: "#94183D",
        dimWhite:"#F0FAF9",
        pink: "#277C72",
        dimBlack: "#1C1F20",
      },
      fontFamily: {
        vulf: ["Vulf Sans", "sans-serif"],
        vulfBold: ["Vulf Sans Bold", "sans-serif"],
        vulfMed: ["Vulf Sans Medium", "sans-serif"],
        vulfMono: ["Vulf Sans Mono", "sans-serif"],
      },
      fontWeight:{
        normal: "400",
        medium: "500",
        bold: "800",
        extrabold:"1000",
      },
    },
    screens: {     
      xs: "360px",
      md: "480px",
      sm: "768px",
      lg: "1200px",
    },
  },
  plugins: [],
}

