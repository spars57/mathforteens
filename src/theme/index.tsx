import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#80CFA9",
    },
    secondary: {
      main: "#00BBF9",
    },
    warning: {
      main: "#FEE440",
    },
    error: {
      main: "#FF0000",
    },
  },
  typography: {
    h1: {
      fontFamily: "Agbalumo",
      fontSize: 48,
    },
    h2: {
      fontFamily: "Agbalumo",
      fontSize: 40,
    },
    h3: {
      fontFamily: "Agbalumo",
      fontSize: 32,
    },
    h4: {
      fontFamily: "Agbalumo",
      fontSize: 24,
    },
    h5: {
      fontFamily: "Agbalumo",
      fontSize: 16,
    },
    h6: {
      fontFamily: "Agbalumo",
      fontSize: 12,
    },
    body1: {
      fontFamily: "Molengo",
      fontSize: 16,
    },
    body2: {
      fontFamily: "Molengo",
      fontSize: 12,
    },
    caption: {
      fontFamily: "Molengo",
    },
    button: {
      fontFamily: "Molengo",
    },
    subtitle1: {
      fontFamily: "Molengo",
      fontWeight: 600,
    },
    subtitle2: {
      fontFamily: "Molengo",
      fontWeight: 600,
    },
    overline: {
      fontFamily: "Molengo",
    },
  },
});

export default theme;
