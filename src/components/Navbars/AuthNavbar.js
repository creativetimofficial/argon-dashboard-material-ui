import React from "react";
import { Link } from "react-router-dom";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Toolbar from "@material-ui/core/Toolbar";
// material-ui icons
import MenuIcon from "@material-ui/icons/Menu";
import Dashboard from "@material-ui/icons/Dashboard";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKey from "@material-ui/icons/VpnKey";
import Person from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  listItemRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "hsla(0,0%,100%,.95)",
    fontSize: "1rem",
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    transition: "all .15s linear",
    fontWeight: "400",
    "& i": {
      marginRight: "0.25rem",
    },
    "&:hover": {
      color: "hsla(0,0%,100%,.65)",
    },
    [theme.breakpoints.up("md")]: {
      marginRight: ".5rem",
    },
  },
  headerImg: {
    verticalAlign: "middle",
    borderStyle: "none",
  },
}));

export default function AuthNavbar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="absolute" color="transparent" elevation={0}>
        <Toolbar>
          <Container
            display="flex!important"
            justifyContent="space-between"
            alignItems="center"
            marginTop=".75rem"
            component={Box}
            maxWidth="xl"
          >
            <div>
              <Hidden mdUp>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Box
                alt="..."
                height="30px"
                component="img"
                className={classes.headerImg}
                src={require("assets/img/brand/argon-react-white.png").default}
              />
            </div>
            <Box
              display="flex"
              alignItems="center"
              width="auto"
              component={List}
            >
              <ListItem
                component={Link}
                to="/admin/dashboard"
                classes={{
                  root: classes.listItemRoot,
                }}
              >
                <Box
                  component={Dashboard}
                  width="1.25rem!important"
                  height="1.25rem!important"
                  marginRight=".5rem!important"
                />
                Dashboard
              </ListItem>
              <ListItem
                component={Link}
                to="/auth/register"
                classes={{
                  root: classes.listItemRoot,
                }}
              >
                <Box
                  component={AccountCircle}
                  width="1.25rem!important"
                  height="1.25rem!important"
                  marginRight=".5rem!important"
                />
                Register
              </ListItem>
              <ListItem
                component={Link}
                to="/auth/login"
                classes={{
                  root: classes.listItemRoot,
                }}
              >
                <Box
                  component={VpnKey}
                  width="1.25rem!important"
                  height="1.25rem!important"
                  marginRight=".5rem!important"
                />
                Login
              </ListItem>
              <ListItem
                component={Link}
                to="/admin/user-profile"
                classes={{
                  root: classes.listItemRoot,
                }}
              >
                <Box
                  component={Person}
                  width="1.25rem!important"
                  height="1.25rem!important"
                  marginRight=".5rem!important"
                />
                Profile
              </ListItem>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
