const colors = require("tailwindcss/colors");

module.exports = {
  logo: {
    large: "",
    small: "",
  },
  login: {
    caption: { title: "", subtitle: "" },
    illustration: "",
  },
  currency: "$",
  colors: {
    primary: "#000000",
    secondary: "#009900",
    mandatory: "#ff0000",
    warning: "#ff9800",
    error: "#f44336",
    neutral: {
      light: colors.gray[100],
      DEFAULT: colors.gray[400],
      dark: colors.gray[600],
    },
    success: "#5cb85c", // accent color for success
    changed: "#ffc000", //accent color when data is changed
  },
};
