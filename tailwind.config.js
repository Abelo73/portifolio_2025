/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff7e5f",
        secondary: "#feb47b",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, rgba(255,126,95,1) 0%, rgba(254,180,123,1) 100%)',
        'gradient-text': 'linear-gradient(90deg, #ff7e5f, #feb47b)',
      },
    },
  },
  plugins: [],
}

