const componentStyles = (theme) => ({
  wrapperBox: {
    [theme.breakpoints.up("md")]: {
      paddingTop: "8rem",
    },
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundImage:
      "url(" + require("assets/img/theme/profile-cover.jpg").default + ")",
  },
  overlayBox: {
    transition: "all .15s ease",
    opacity: ".9",
    background:
      "linear-gradient(87deg," +
      theme.palette.dark.main +
      ",#1a174d)!important",
  },
  containerRoot: {
    zIndex: 1,
    [theme.breakpoints.up("md")]: {
      paddingLeft: "39px",
      paddingRight: "39px",
    },
  },
  typographyRootH1: {
    color: theme.palette.white.main,
    fontSize: "2.75rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  buttonRoot: {
    color: theme.palette.white.main,
    backgroundColor: theme.palette.info.main,
    "&:hover": {
      backgroundColor: theme.palette.info.dark,
    },
  },
});

export default componentStyles;
