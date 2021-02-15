const componentStyles = (theme) => ({
  cardRoot: {
    marginBottom: "1.5rem",
    [theme.breakpoints.up("xl")]: {
      marginBottom: 0,
    },
  },
  cardContentRoot: {
    padding: "1rem 1.5rem !important",
  },
  textUppercase: {
    textTransform: "uppercase",
  },
  bgPrimary: {
    backgroundColor: theme.palette.primary.main,
  },
  bgPrimaryLight: {
    backgroundColor: theme.palette.primary.light,
  },
  bgError: {
    backgroundColor: theme.palette.error.main,
  },
  bgErrorLight: {
    backgroundColor: theme.palette.error.light,
  },
  bgWarning: {
    backgroundColor: theme.palette.warning.main,
  },
  bgWarningLight: {
    backgroundColor: theme.palette.warning.light,
  },
  bgInfo: {
    backgroundColor: theme.palette.info.main,
  },
  bgInfoLight: {
    backgroundColor: theme.palette.info.light,
  },
});

export default componentStyles;
