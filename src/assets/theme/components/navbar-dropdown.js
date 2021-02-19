const componentStyles = (theme) => ({
  buttonRoot: {
    padding: ".25rem 0 .25rem 1rem!important",
    border: "0!important",
    boxShadow: "none!important",
    [theme.breakpoints.down("md")]: {
      padding: "0!important",
      minWidth: "unset!important",
      borderRadius: "50%",
    },
  },
  buttonLabel: {
    fontSize: ".875rem",
    fontWeight: "600",
    color: theme.palette.buttonLightLabel.main,
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      padding: "0!important",
    },
  },
  avatarRoot: {
    width: "36px",
    height: "36px",
    marginRight: "0.5rem",
    [theme.breakpoints.down("md")]: {
      marginRight: "0",
    },
  },
  dividerRoot: {
    height: "0",
    margin: ".5rem 0",
    overflow: "hidden",
    borderTop: "1px solid " + theme.palette.gray[200],
  },
  menuTitle: {
    margin: "0!important",
    textTransform: "uppercase",
    display: "block",
    padding: ".5rem 1rem",
    whiteSpace: "nowrap",
  },
});

export default componentStyles;
