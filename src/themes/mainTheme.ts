import { createTheme, ThemeOptions } from "@material-ui/core";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";
import { Shape } from "@material-ui/core/styles/shape";

const fontFamily = [
    "Lato",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(",");
  
  const success = {
    main: "#A6CE38",
    light: "#F6FAEA"
  };
  const red = "#F5222D";
  
  const primary = {
    main: "#4B7CC7",
    light: "rgba(75,124,199,0.75)",
    contrastText: "#fff"
  };
  
  const secondary = {
    main: "#ff9619",
    light: "#FFF4E7",
    gradient: "linear-gradient(113deg, #F6A645 0%, #FF8500 100%) 0% 0% no-repeat"
  };
  
  const error = {
    main: red,
    light: "#FEE8E9"
  };
  
  export const directDesktopSizes = {
    h1: "3.5rem/4.5rem Lato",
    h2: "2.875rem/3.75rem Lato",
    subtitle1: "2.25rem/3rem Lato",
    subtitle2: "1.25rem/1.75rem Lato",
    h5: "1.5rem/2.25rem Lato",
    body1: "1.125rem/1.5rem Lato",
    body2: "1rem/1.375rem Lato"
  };

  const background = {
      default: "#FAF9F5"
  };
  
  const palette = {
    primary,
    background,
    secondary,
    success,
    error,
    grey: {
      "100": "#F7F7F7",
      "400": "#CCCCCC",
      "500": "#999999",
      "700": "#646464",
      "800": "#3C3C3C"
    }
  };  

  const fontWeightLight = 300;
  const fontWeightRegular = 400;
  const fontWeightMedium = 700;
  const fontWeightBold = 900;
  
  
  const typography: TypographyOptions = {
      fontFamily,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold,
      button: {
        textTransform: "none",
        fontWeight: fontWeightMedium,
        fontSize: "1.125rem",
        lineHeight: "1.4444",
        letterSpacing: "0.75px"
      },
      h1: {
        fontSize: "2rem",
        lineHeight: "1.3125",
        fontWeight: "inherit"
      },
      h2: {
        fontSize: "1.5rem",
        lineHeight: "1.4167",
        fontWeight: "inherit"
      },
      subtitle1: {
        fontSize: "1.375rem",
        lineHeight: "1.3636",
        fontWeight: "inherit"
      },
      subtitle2: {
        fontSize: "1.25rem",
        lineHeight: "1.4",
        fontWeight: "inherit"
      },
      h5: {
        fontSize: "1.125rem",
        lineHeight: "1.4444",
        fontWeight: "inherit"
      },
      body1: {
        fontSize: "1rem",
        lineHeight: "1.5",
        fontWeight: "inherit"
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: "1.4286",
        fontWeight: "inherit"
      },
      caption: {
        fontSize: "0.75rem",
        lineHeight: "1.5",
        fontWeight: "inherit"
      }
    };
  
    const shape: Shape = {
      borderRadius: 4
    };

const commonTheme: ThemeOptions = {
    palette,
    typography,
    shape
};


export const mainTheme = createTheme(commonTheme);