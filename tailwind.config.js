module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserrat': 'Montserrat',
      'montserratBold': "MontserratBold",
      "montserratSemibold": "MontserratSemibold",
      "montserratExtrabold": "MontserratExtrabold",
    },
    colors: {
      primary: '#242278',
      second: "#0ba4cd",
      white: '#fff',
      grayText: "#6d6d6d",
      containerBg: '#EDF6FC',
      gray: '#d4d4d4',
      softGray: '#E7E7E7',
    },
    maxWidth: {
      siteWitdh: '1336px',
      none: 'none',
    },
    zIndex: {
      up: '999'
    },
    extend: {

    },
  },
  plugins: [],
}