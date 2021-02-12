import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import InputBase from "@material-ui/core/InputBase";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
import SearchIcon from "@material-ui/icons/Search";

// core components
import NavbarDropdown from "components/Dropdowns/NavbarDropdown.js";

const useStyles = makeStyles((theme) => ({
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
    boxShadow: " 0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)",
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
}));

export default function AdminNavbar({ brandText }) {
  const classes = useStyles();
  return (
    <>
      <AppBar
        position="absolute"
        color="transparent"
        elevation={0}
        classes={{ root: classes.appBarRoot }}
      >
        <Toolbar disableGutters>
          <Container
            maxWidth={false}
            component={Box}
            classes={{ root: classes.containerRoot }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              marginTop="0.5rem"
            >
              <div>
                <Typography
                  className={classes.brandTitle}
                  variant="h4"
                  component="a"
                >
                  {brandText}
                </Typography>
              </div>
              <Box display="flex" alignItems="center" width="auto">
                <Box
                  display="flex"
                  alignItems="center"
                  width="auto"
                  marginRight="1rem"
                  classes={{
                    root: classes.searchBox,
                  }}
                >
                  <SearchIcon className={classes.searchIcon} />
                  <InputBase
                    placeholder="Search"
                    classes={{
                      input: classes.searchInput,
                    }}
                  />
                </Box>
                <NavbarDropdown />
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
