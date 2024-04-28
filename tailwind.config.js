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
        primary: '#9b72cf',
        secondary: "#E0B0FF",
        black : "#242038",
        white : "#f4effa",
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

