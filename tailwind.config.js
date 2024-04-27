/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#532b88',
        secondary: "#9b72cf",
        blackColor : "#242038",
        whiteColor : "#f4effa",
        bgColor : "#1c1a27"
      }
    }
  },
  plugins: [],
  "baseUrl": ".",
  "paths": {
    "@/*": [
      "./src/*"
    ]
  }
}

