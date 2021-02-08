import React from "react";
import { Link } from "react-router-dom";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
// import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
// import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// material-ui icons
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
// import NotificationsIcon from "@material-ui/icons/Notifications";

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
}));

export default function AuthNavbar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="absolute" color="transparent" elevation={0}>
        <Toolbar>
          <Box
            display="flex!important"
            justifyContent="space-between"
            alignItems="center"
            marginTop="1rem"
            component={Container}
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
                verticalAlign="middle"
                borderStyle="none"
                component="img"
                className={classes.brandImage}
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
                <i className={"ni ni-planet"} />
                Dashboard
              </ListItem>
              <ListItem
                component={Link}
                to="/auth/register"
                classes={{
                  root: classes.listItemRoot,
                }}
              >
                <i className={"ni ni-circle-08"} />
                Register
              </ListItem>
              <ListItem
                component={Link}
                to="/auth/login"
                classes={{
                  root: classes.listItemRoot,
                }}
              >
                <i className={"ni ni-key-25"} />
                Login
              </ListItem>
              <ListItem
                component={Link}
                to="/admin/user-profile"
                classes={{
                  root: classes.listItemRoot,
                }}
              >
                <i className={"ni ni-single-02"} />
                Profile
              </ListItem>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
