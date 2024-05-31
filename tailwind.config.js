/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "Oswald",
      secondary: "Raleway",
      tertiary: "Rozha One"
    },
    container: {
      padding: {
        DEFAULT: "20px",
        lg: "0"
      }
    },
    extend: {
      colors: {
        dark: "#252525",
        grey: {
          DEFAULT: "#555555"
        },
      },
      backgroundImage: {
        hero: "url('./src/assets/img/hero/bg.jpg')",
        about: "url('./src/assets/img/about/image.png')",
        interview: "url('./src/assets/img/interview/bg.png')",
      },
      content: {
        outlineText: 'url("./src/assets/img/hero/outline-text.svg")'
      }
    },
    screens: {
      sm:"640px",
      md:"768px",
      lg:"10240px",
      xl:"1300px",
    },
  },
  plugins: [],
}
