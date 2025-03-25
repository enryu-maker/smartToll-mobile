/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Bold": "OpenSans-Bold",
        "PBold": "Poppins-Bold",
        "SemiBold": "OpenSans-SemiBold",
        "PSemiBold": "Poppins-SemiBold",
        "Regular": "OpenSans-Regular",
        "PRegular": "Poppins-Regular",
      },
      colors: {
        primary: "#EF3054"
      }

    },
  },
  plugins: [],
}

