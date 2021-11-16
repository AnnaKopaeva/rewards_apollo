import { createTheme } from "@mui/material/styles";

const colors = {
  white: "#FFF",
  purple: "#6259F0",
  grey: "#E0E5EC",
  darkGrey: "#A1ABB8",
};

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: colors.purple,
      contrastText: colors.white,
    },
    grey: {
      A200: colors.grey,
      A400: colors.darkGrey,
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
