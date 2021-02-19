const componentStyles = (theme) => ({
  dialogHeader: {
    display: "flex",
    padding: "1.25rem",
    borderTopLeftRadius: ".4375rem",
    borderTopRightRadius: ".4375rem",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dialogTitle: {
    fontSize: "1.0625rem",
    marginBottom: "0",
  },
  dialogHeading: {
    fontSize: ".95rem",
    fontWeight: 600,
    letterSpacing: ".025em",
    textTransform: "uppercase",
    marginTop: "1.5rem!important",
  },
  dialogNotification: {
    color: theme.palette.white.main,
    background:
      "linear-gradient(87deg," +
      theme.palette.error.main +
      " 0," +
      theme.palette.error.dialogNotification +
      " 100%)!important",
    "& $dialogHeading, & $dialogTitle": {
      color: theme.palette.white.main,
    },
  },
});

export default componentStyles;
