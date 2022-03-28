import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "rgb(255, 208, 38)",
    secondary: "rgb(12, 11, 19)",
  },
  fonts: {
    primary: "'Nova Flat', cursive ,sans-serif",
    secondary: "'Exo 2' ,sans-serif"
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  },
  fontWeights: {
    light: 300,
    regular: 400,
    bold: 700
  },
  media: {
    mobile: "@media (max-width: 768px)",
    tablet: "@media (min-width: 768px)",
    desktop: "@media (min-width: 1400px)"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
