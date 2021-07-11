const colors = require("tailwindcss/colors");

module.export = {
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
    primary: "#106ec6",
    secondary: "#60A5FA",
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
