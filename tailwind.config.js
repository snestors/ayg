/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin'
// eslint-disable-next-line no-undef
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class',
  theme: {
    extend: {},
  },
  
  plugins: [ flowbite, nextui()],
}

