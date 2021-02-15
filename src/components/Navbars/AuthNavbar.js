import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Menu from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
// @material-ui/icons components
import AccountCircle from "@material-ui/icons/AccountCircle";
import Clear from "@material-ui/icons/Clear";
import Dashboard from "@material-ui/icons/Dashboard";
import MenuIcon from "@material-ui/icons/Menu";
import Person from "@material-ui/icons/Person";
import VpnKey from "@material-ui/icons/VpnKey";

// core components
import componentStyles from "assets/theme/components/auth-navbar.js";

const useStyles = makeStyles(componentStyles);

export default function AuthNavbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "responsive-menu-id";
  const ListObject = (
    <Box
      display="flex"
      alignItems="center"
      width="auto"
      component={List}
      className={classes.flexDirectionColumn}
    >
      <ListItem
        component={Link}
        to="/admin/dashboard"
        onClick={handleMenuClose}
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
        onClick={handleMenuClose}
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
        onClick={handleMenuClose}
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
        onClick={handleMenuClose}
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
  );
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
            <Box
              alt="..."
              height="30px"
              component="img"
              className={classes.headerImg}
              src={require("assets/img/brand/argon-react-white.png").default}
            />
            <Hidden mdUp implementation="css">
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleMenuOpen}
                aria-controls={menuId}
                aria-haspopup="true"
              >
                <Box
                  component={MenuIcon}
                  color={theme.palette.white.main}
                  width="2rem!important"
                  height="2rem!important"
                />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={isMenuOpen}
                onClose={handleMenuClose}
                classes={{ paper: classes.menuPaper }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  paddingLeft="1.25rem"
                  paddingRight="1.25rem"
                  paddingBottom="1rem"
                  className={classes.outlineNone}
                >
                  <Box
                    alt="..."
                    height="36px"
                    component="img"
                    className={classes.headerImg}
                    src={require("assets/img/brand/argon-react.png").default}
                  />
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleMenuClose}
                    aria-controls={menuId}
                    aria-haspopup="true"
                  >
                    <Box
                      component={Clear}
                      width="2rem!important"
                      height="2rem!important"
                    />
                  </IconButton>
                </Box>
                <Box
                  component={Divider}
                  marginBottom="1rem!important"
                  marginLeft="1.25rem!important"
                  marginRight="1.25rem!important"
                />
                {ListObject}
              </Menu>
            </Hidden>
            <Hidden smDown implementation="css">
              {ListObject}
            </Hidden>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
