import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#f8f9fe",
    },
    text: {
      primary: "#525f7f",
    },
  },
  typography: {
    fontFamily: "Open Sans,sans-serif",
  },
  overrides: {
    MuiDrawer: {
      paper: {
        width: "250px",
      },
      paperAnchorDockedLeft: {
        borderRight: "none",
        boxShadow: "0 0 2rem 0 rgba(136,152,170,.15)!important",
      },
      docked: {
        width: "250px",
      },
    },
  },
});

export default theme;
