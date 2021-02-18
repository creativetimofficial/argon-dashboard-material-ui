const componentStyles = (theme) => ({
  inputSmall: {
    height: "calc(.45em + 1.25rem + 5px)",
    lineHeight: 1.5,
    padding: ".25rem .5rem",
    borderRadius: ".25rem",
  },
  inputLarge: {
    fontSize: "1rem!important",
    height: "calc(2.25em + 1.25rem + 5px)",
    lineHeight: 1.5,
    padding: ".875rem 1rem",
    borderRadius: ".4375rem",
  },
  formControlCheckboxLabelRoot: {
    position: "relative",
    display: "flex",
    minHeight: "1.5rem",
    WebkitPrintColorAdjust: "exact",
  },
  formControlCheckboxLabelLabel: {
    cursor: "pointer",
    fontSize: ".875rem",
    position: "relative",
    verticalAlign: "top",
    display: "inline-block",
    color: theme.palette.gray[600],
  },
});

export default componentStyles;
