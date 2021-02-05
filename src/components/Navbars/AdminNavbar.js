import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// material-ui icons
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  buttonLabel: {
    fontSize: ".875rem",
    fontWeight: "600",
    color: "hsla(0,0%,100%,.95)",
    textTransform: "capitalize",
  },
  avatarRoot: {
    width: "36px",
    height: "36px",
    marginRight: "0.5rem",
  },
  dividerRoot: {
    height: "0",
    margin: ".5rem 0",
    overflow: "hidden",
    borderTop: "1px solid #e9ecef",
  },
  menuTitle: {
    margin: "0!important",
    textTransform: "uppercase",
    display: "block",
    padding: ".5rem 1rem",
    whiteSpace: "nowrap",
  },
  brandTitle: {
    textTransform: "uppercase",
    margin: "0",
    color: "#fff",
  },
  searchBox: {
    borderColor: "hsla(0,0%,100%,.6)",
    borderRadius: "2rem",
    border: "2px solid",
    backgroundColor: "initial",
    boxShadow: " 0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)",
    transition: "box-shadow .15s ease",
  },
  searchIcon: {
    color: "hsla(0,0%,100%,.6)",
    marginRight: "0.5rem",
    marginLeft: "1rem",
  },
  searchInput: {
    color: "hsla(0,0%,100%,.6)",
    width: "270px",
    backgroundColor: "initial",
    border: 0,
    boxShadow: "none",
    padding: "0",
  },
}));

export default function PrimarySearchAppBar({ brandText }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Typography
        variant="h6"
        component="h6"
        classes={{ root: classes.menuTitle }}
      >
        Welcome!
      </Typography>
      <MenuItem onClick={handleMenuClose}>
        <i className="ni ni-single-02"></i>
        <span>My profile</span>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <i className="ni ni-settings-gear-65"></i>
        <span>Settings</span>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <i className="ni ni-calendar-grid-58"></i>
        <span>Activity</span>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <i className="ni ni-support-16"></i>
        <span>Support</span>
      </MenuItem>
      <Divider component="div" classes={{ root: classes.dividerRoot }} />
      <MenuItem onClick={handleMenuClose}>
        <i className="ni ni-user-run"></i>
        <span>Logout</span>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="absolute" color="transparent" elevation={0}>
        <Toolbar>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            marginTop="0.5rem"
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
              <Button
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                classes={{
                  label: classes.buttonLabel,
                }}
              >
                <Avatar
                  alt="..."
                  src={require("assets/img/theme/team-4-800x800.jpg").default}
                  classes={{
                    root: classes.avatarRoot,
                  }}
                />
                Jessica Jones
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
