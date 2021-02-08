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
    dark: {
      main: "#172b4d",
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
    MuiMenu: {
      paper: {
        minWidth: "12rem",
        fontSize: "1rem",
        color: "#525f7f",
        textAlign: "left",
        listStyle: "none",
        backgroundColor: "#fff",
        backgroundClip: "padding-box",
        border: "0 solid rgba(0,0,0,.15)",
        borderRadius: ".4375rem",
        boxShadow:
          "0 50px 100px rgb(50 50 93 / 10%), 0 15px 35px rgb(50 50 93 / 15%), 0 5px 15px rgb(0 0 0 / 10%)",
        padding: ".5rem 0",
      },
    },
    MuiMenuItem: {
      root: {
        padding: ".5rem 1rem",
        fontSize: ".875rem",
        display: "block",
        width: "100%",
        clear: "both",
        fontWeight: 400,
        color: "#212529",
        textAlign: "inherit",
        whiteSpace: "nowrap",
        backgroundColor: "initial",
        border: 0,
        "& i": {
          marginRight: "1rem",
          fontSize: "1rem",
          verticalAlign: "-17%",
        },
      },
    },
    MuiInputBase: {
      input: {
        display: "block",
        width: "100%",
        height: "calc(1.5em + 1.25rem + 2px)",
        padding: ".625rem .75rem",
        fontWeight: 400,
        lineHeight: 1.5,
        color: "#8898aa",
        backgroundColor: "#fff",
        backgroundClip: "padding-box",
        border: "1px solid #cad1d7",
        borderRadius: ".375rem",
        boxShadow: "none",
        transition: "all .2s cubic-bezier(.68,-.55,.265,1.55)",
        fontSize: ".875rem",
      },
    },
    MuiCard: {
      root: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        wordWrap: "break-word",
        backgroundColor: "#fff",
        backgroundClip: "initial",
        border: "1px solid rgba(0,0,0,.05)",
        borderRadius: ".375rem",
      },
    },
    MuiCardContent: {
      root: {
        flex: "1 1 auto",
        minHeight: "1px",
        padding: "1.5rem",
      },
    },
    MuiButton: {
      root: {
        position: "relative",
        textTransform: "none",
        transition: "all .15s ease",
        letterSpacing: ".025em",
        fontSize: ".875rem",
        padding: ".625rem 1.25rem",
        willChange: "transform",
        border: "1px solid transparent",
        lineHeight: "1.5",
        borderRadius: ".375rem",
        userSelect: "none",
        display: "inline-block",
        fontWeight: "600",
        textAlign: "center",
        verticalAlign: "middle",
        "&:hover": {
          boxShadow:
            "0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)",
          transform: "translateY(-1px)",
        },
      },
      text: {
        padding: ".625rem 1.25rem",
      },
      contained: {
        "&:hover": {
          boxShadow:
            "0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)",
        },
      },
    },
  },
});

export default theme;
