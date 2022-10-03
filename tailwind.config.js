module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,,json}",
    "./components/**/*.{js,ts,jsx,tsx,json}",
    "./src/**/*.{js,jsx,ts,tsx,json}"
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
      formBg: "#ffffff4d"
    },
    maxWidth: {
      siteWitdh: '1336px',
      none: 'none',
    },
    zIndex: {
      up: '999'
    },
    extend: {
      scale: {
        "102": "1.02",
      }
    },
  },
  plugins: [],
}