/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: "class",
  theme: {
    extend: {
      color: {  //use below key (alias) to color your elements, instead writing the hexadecimal number
        "primary-color": "#00927c",
        "secondary-color": "#EAF0F1"
      }
    },
  },
  plugins: [],
}

