import boxShadows from "assets/theme/box-shadow.js";

const componentStyles = (theme) => ({
  appBarRoot: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  brandTitle: {
    textTransform: "uppercase",
    margin: "0",
    color: theme.palette.white.main,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  searchBox: {
    borderColor: theme.palette.adminNavbarSearch.main,
    borderRadius: "2rem",
    border: "2px solid",
    backgroundColor: "initial",
    boxShadow: boxShadows.inputBoxShadow,
    transition: "box-shadow .15s ease",
  },
  searchIcon: {
    color: theme.palette.adminNavbarSearch.main,
    marginRight: "0.5rem",
    marginLeft: "1rem",
  },
  searchInput: {
    color: theme.palette.adminNavbarSearch.main,
    width: "270px",
    backgroundColor: "initial",
    border: 0,
    boxShadow: "none",
    padding: "0",
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "39px",
      paddingRight: "39px",
    },
  },
});

export default componentStyles;
