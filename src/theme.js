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
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  palette: {
    primary: {
      main: "#5e72e4",
    },
    secondary: {
      main: "#f7fafc",
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
      dark: "#0b1526",
    },
    success: {
      main: "#2dce89",
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
    MuiFormLabel: {
      root: {
        color: "#525f7f",
        fontSize: ".875rem",
        fontWeight: "600",
        display: "inline-block",
        marginBottom: ".5rem",
      },
    },
    MuiFormGroup: {
      root: {
        marginBottom: "1.5rem",
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
        boxSizing: "border-box",
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: "translate(14px, 15px) scale(1)",
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: ".625rem .75rem",
        borderTop: "0",
        borderBottom: "0",
        borderLeft: "0",
        "&:not(:last-child)": {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          paddingRight: 0,
        },
      },
      root: {
        paddingRight: "0",
      },
    },
    MuiFilledInput: {
      underline: {
        "&:before": {
          display: "none",
        },
        "&:after": {
          borderRadius: ".375rem",
          height: "100%",
          border: "2px solid #5e72e4",
        },
      },
      multiline: {
        padding: ".625rem .75rem",
      },
      root: {
        boxShadow: "0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)",
        border: 0,
        transition: "box-shadow .15s ease",
        borderRadius: ".375rem",
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#fff !important",
      },
      input: {
        border: 0,
        boxShadow: "none",
        position: "relative",
        flex: "1 1 auto",
        width: "1%",
        minWidth: 0,
        marginBottom: 0,
        padding: ".625rem .75rem",
        "&:not(:first-child)": {
          borderLeft: 0,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        },
      },
      inputAdornedStart: {
        paddingLeft: ".75rem",
      },
      inputAdornedEnd: {
        paddingRight: ".75rem",
      },
    },
    MuiInputAdornment: {
      root: {
        transition: "all .2s cubic-bezier(.68,-.55,.265,1.55)",
        display: "flex",
        alignItems: "center",
        padding: ".625rem 0",
        marginBottom: "0",
        fontSize: ".875rem",
        fontWeight: "400",
        lineHeight: "1.5",
        color: "#adb5bd",
        textAlign: "center",
        whiteSpace: "nowrap",
        backgroundColor: "#fff",
        border: "0",
        marginTop: "0!important",
        height: "calc(1.5em + 1.25rem + 2px)",
      },
      positionEnd: {
        paddingLeft: 0,
      },
      positionStart: {
        paddingLeft: 0,
      },
      filled: {
        display: "flex",
        "&$positionStart": {
          marginRight: "-1px",
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
          border: "0",
          boxShadow: "none",
        },
      },
    },
    MuiCheckbox: {
      root: {
        "& .MuiSvgIcon-root": {
          width: "1.5rem",
          height: "1.5rem",
        },
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
        overflow: "unset",
      },
    },
    MuiCardHeader: {
      root: {
        padding: "1.25rem 1.5rem",
        marginBottom: "0",
        backgroundColor: "#fff",
        borderBottom: "1px solid rgba(0,0,0,.05)",
        "&:first-child": {
          borderRadius: "calc(.375rem - 1px) calc(.375rem - 1px) 0 0",
        },
      },
    },
    MuiCardContent: {
      root: {
        flex: "1 1 auto",
        minHeight: "1px",
        padding: "1.5rem",
      },
    },
    MuiCardActions: {
      root: {
        "&:last-child": {
          borderRadius: "0 0 calc(.375rem - 1px) calc(.375rem - 1px)",
          padding: "1.25rem 1.5rem",
          backgroundColor: "#fff",
          borderTop: "1px solid rgba(0,0,0,.05)",
        },
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
      containedSizeSmall: {
        fontSize: ".75rem",
        padding: ".25rem .5rem",
        lineHeight: "1.5",
        borderRadius: ".375rem",
      },
    },
    MuiContainer: {
      root: {
        width: "100%",
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
      },
      maxWidthXs: {
        "@media (min-width: 576px)": {
          maxWidth: "540px",
        },
      },
      maxWidthSm: {
        "@media (min-width: 576px)": {
          maxWidth: "540px",
        },
      },
      maxWidthMd: {
        "@media (min-width: 768px)": {
          maxWidth: "720px",
        },
      },
      maxWidthLg: {
        "@media (min-width: 992px)": {
          maxWidth: "960px",
        },
      },
      maxWidthXl: {
        "@media (min-width: 1200px)": {
          maxWidth: "1140px",
        },
      },
    },
    MuiGrid: {
      item: {
        paddingRight: "15px",
        paddingLeft: "15px",
      },
      container: {
        marginRight: "-15px",
        marginLeft: "-15px",
        width: "unset",
      },
    },
    MuiSvgIcon: {
      root: {
        width: "14px",
        height: "14px",
      },
    },
    MuiTable: {
      root: {
        width: "100%",
        marginBottom: "1rem",
        color: "#525f7f",
        backgroundColor: "transparent",
        borderCollapse: "collapse",
      },
    },
    MuiTableCell: {
      root: {
        fontSize: ".8125rem",
        whiteSpace: "nowrap",
        padding: "1rem",
        verticalAlign: "top",
        borderTop: "1px solid #e9ecef",
        borderBottom: "1px solid #e9ecef",
      },
      head: {
        padding: "1rem",
        borderTop: "1px solid #e9ecef",
        fontWeight: "600",
        whiteSpace: "nowrap",
        verticalAlign: "bottom",
        paddingTop: ".75rem",
        paddingBottom: ".75rem",
        fontSize: ".65rem",
        textTransform: "uppercase",
        letterSpacing: "1px",
        borderBottom: "1px solid #e9ecef",
      },
    },
    MuiLinearProgress: {
      root: {
        height: "8px",
        marginBottom: "1rem",
        overflow: "hidden",
        borderRadius: ".25rem",
        backgroundColor: "#e9ecef!important",
        boxShadow: "inset 0 1px 2px rgb(0 0 0 / 10%)",
        display: "flex",
        lineHeight: "0",
        fontSize: ".75rem",
      },
      bar: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        color: "#fff",
        textAlign: "center",
        whiteSpace: "nowrap",
        transition: "width .6s ease",
        boxShadow: "none",
        borderRadius: 0,
        height: "auto",
      },
    },
    MuiAvatar: {
      root: {
        color: "#fff",
        backgroundColor: "#adb5bd",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
        borderRadius: "50%",
        height: "48px",
        width: "48px",
      },
      img: {
        width: "100%",
        borderRadius: "50%",
        verticalAlign: "middle",
        borderStyle: "none",
      },
    },
    MuiAvatarGroup: {
      avatar: {
        position: "relative",
        zIndex: "5!important",
        border: "2px solid #fff",
        marginLeft: "-.75rem",
        "&:hover": {
          zIndex: "6!important",
        },
      },
    },
    MuiPaginationItem: {
      root: {
        width: "36px",
        height: "36px",
        fontSize: ".875rem",
        color: "#8898aa",
        border: "1px solid #dee2e6",
        borderRadius: "50%",
        "&:hover": {
          backgroundColor: "#dee2e6",
        },
      },
      outlined: {
        color: "#8898aa",
        border: "1px solid #dee2e6",
        "&:hover": {
          backgroundColor: "#dee2e6",
        },
      },
      outlinedPrimary: {
        "&.Mui-selected": {
          "&, &:hover": {
            backgroundColor: "#5e72e4!important",
            color: "#fff",
            boxShadow:
              "0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)",
          },
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      },
    },
  },
});

export default theme;
