import boxShadows from "assets/theme/box-shadow.js";

const componentStyles = (theme) => ({
  cardRoot: {
    boxShadow: boxShadows.boxShadow + "!important",
  },
  cardRootDark: {
    backgroundColor: theme.palette.dark.main,
    "& *": {
      color: theme.palette.white.main,
    },
    "& $tableCellRoot, & $tableRoot": {
      color: theme.palette.white.main,
      borderColor: theme.palette.dark.tableBorder,
    },
    "& $tableCellRootHead": {
      color: theme.palette.dark.tableHeadColor,
      backgroundColor: theme.palette.dark.tableHeadBgColor,
    },
  },
  cardHeader: {
    backgroundColor: "initial",
  },
  cardActionsRoot: {
    paddingBottom: "1.5rem!important",
    paddingTop: "1.5rem!important",
    borderTop: "0!important",
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "39px",
      paddingRight: "39px",
    },
  },
  tableRoot: {
    marginBottom: "0!important",
  },
  tableCellRoot: {
    verticalAlign: "middle",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    borderTop: "0",
  },
  tableCellRootHead: {
    backgroundColor: theme.palette.gray[100],
    color: theme.palette.gray[600],
  },
  tableCellRootBodyHead: {
    textTransform: "unset!important",
    fontSize: ".8125rem",
  },
  linearProgressRoot: {
    height: "3px!important",
    width: "120px!important",
    margin: "0!important",
  },
  bgGradientError: {
    background:
      "linear-gradient(87deg," +
      theme.palette.error.main +
      ",#f56036)!important",
  },
  bgGradientSuccess: {
    background:
      "linear-gradient(87deg," +
      theme.palette.success.main +
      ",#2dcecc)!important",
  },
  bgGradientPrimary: {
    background:
      "linear-gradient(87deg," +
      theme.palette.primary.main +
      ",#825ee4)!important",
  },
  bgGradientInfo: {
    background:
      "linear-gradient(87deg," +
      theme.palette.info.main +
      ",#1171ef)!important",
  },
  bgGradientWarning: {
    background:
      "linear-gradient(87deg," +
      theme.palette.warning.main +
      ",#fbb140)!important",
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
  bgSuccess: {
    backgroundColor: theme.palette.success.main,
  },
  verticalAlignMiddle: {
    verticalAlign: "middle",
  },
  avatarRoot: {
    width: "36px",
    height: "36px",
    fontSize: ".875rem",
  },
});

export default componentStyles;
