import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const defaultHeaderStyles = {
  marginBottom: ".5rem",
  fontFamily: "inherit",
  fontWeight: 600,
  lineHeight: 1.5,
  color: "#32325d",
};

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5e72e4",
    },
    secondary: {
      main: "#19857b",
    },
    warning: {
      light: "#ffd600",
      main: "#fb6340",
    },
    error: {
      light: "#f3a4b5",
      main: "#f5365c",
    },
    info: {
      main: "#11cdef",
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
    h1: {
      fontSize: "1.625rem",
      ...defaultHeaderStyles,
    },
    h2: {
      fontSize: "1.25rem",
      ...defaultHeaderStyles,
    },
    h3: {
      fontSize: "1.0625rem",
      ...defaultHeaderStyles,
    },
    h4: {
      fontSize: ".9375rem",
      ...defaultHeaderStyles,
    },
    h5: {
      fontSize: ".8125rem",
      ...defaultHeaderStyles,
    },
    h6: {
      fontSize: ".625rem",
      ...defaultHeaderStyles,
    },
  },
  overrides: {
    MuiDrawer: {
      paper: {
        width: "250px",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      },
      paperAnchorDockedLeft: {
        borderRight: "none",
        boxShadow: "0 0 2rem 0 rgba(136,152,170,.15)!important",
      },
      docked: {
        width: "250px",
      },
    },
    MuiListItem: {
      root: {
        display: "block",
        paddingTop: ".25rem",
        paddingBottom: ".25rem",
        color: "#525f7f",
      },
      gutters: {
        paddingLeft: ".75rem",
        paddingRight: ".75rem",
      },
    },
  },
});

export default theme;
