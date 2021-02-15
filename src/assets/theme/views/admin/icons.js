import boxShadows from "assets/theme/box-shadow.js";

const componentStyles = (theme) => ({
  cardRoot: {
    boxShadow: boxShadows.boxShadow + "!important",
  },
  cardHeader: {
    backgroundColor: "initial",
  },
  button: {
    verticalAlign: "middle",
    backgroundColor: theme.palette.gray[200],
    outline: "none!important",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: theme.palette.white.main,
      boxShadow: boxShadows.iconsPageButtonBoxShadow,
    },
    "& i": {
      fontSize: "1.5rem",
      boxSizing: "initial",
      verticalAlign: "middle",
      color: theme.palette.gray[800],
    },
    "& span": {
      fontSize: ".875rem",
      lineHeight: "1.5",
      display: "inline-block",
      overflow: "hidden",
      marginLeft: "16px",
      verticalAlign: "middle",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      color: theme.palette.gray[800],
    },
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "39px",
      paddingRight: "39px",
    },
  },
  iframe: {
    width: "100%",
    height: "500px",
    border: "0",
  },
});

export default componentStyles;
