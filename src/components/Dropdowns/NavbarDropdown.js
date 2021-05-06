import React from "react";
// @material-ui/core components
import { useTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
import DirectionsRun from "@material-ui/icons/DirectionsRun";
import EventNote from "@material-ui/icons/EventNote";
import LiveHelp from "@material-ui/icons/LiveHelp";
import Person from "@material-ui/icons/Person";
import Settings from "@material-ui/icons/Settings";

// core components

export default function NavbarDropdown() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
        sx={{
          margin: "0!important",
          textTransform: "uppercase",
          display: "block",
          padding: ".5rem 1rem",
          whiteSpace: "nowrap",
        }}
      >
        Welcome!
      </Typography>
      <Box
        sx={{ display: "flex!important", alignItems: "center!important" }}
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={Person}
          sx={{
            width: "1.25rem!important",
            height: "1.25rem!important",
            marginRight: "1rem",
          }}
        />
        <span>My profile</span>
      </Box>
      <Box
        sx={{ display: "flex!important", alignItems: "center!important" }}
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={Settings}
          sx={{
            width: "1.25rem!important",
            height: "1.25rem!important",
            marginRight: "1rem",
          }}
        />
        <span>Settings</span>
      </Box>
      <Box
        sx={{ display: "flex!important", alignItems: "center!important" }}
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={EventNote}
          sx={{
            width: "1.25rem!important",
            height: "1.25rem!important",
            marginRight: "1rem",
          }}
        />
        <span>Activity</span>
      </Box>
      <Box
        sx={{ display: "flex!important", alignItems: "center!important" }}
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={LiveHelp}
          sx={{
            width: "1.25rem!important",
            height: "1.25rem!important",
            marginRight: "1rem",
          }}
        />
        <span>Support</span>
      </Box>
      <Divider
        component="div"
        sx={{
          height: "0",
          margin: ".5rem 0",
          overflow: "hidden",
          borderTop: "1px solid " + theme.palette.gray[200],
        }}
      />
      <Box
        sx={{ display: "flex!important", alignItems: "center!important" }}
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={DirectionsRun}
          sx={{
            width: "1.25rem!important",
            height: "1.25rem!important",
            marginRight: "1rem",
          }}
        />
        <span>Logout</span>
      </Box>
    </Menu>
  );

  return (
    <>
      <Button
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
        sx={{
          padding: ".25rem 0 .25rem 1rem!important",
          border: "0!important",
          boxShadow: "none!important",
          [theme.breakpoints.down("md")]: {
            padding: "0!important",
            minWidth: "unset!important",
            borderRadius: "50%",
          },
          "& .MuiButton-label": {
            fontSize: ".875rem",
            fontWeight: "600",
            color: theme.palette.buttonLightLabel.main,
            textTransform: "capitalize",
            display: "flex",
            alignItems: "center",
            [theme.breakpoints.down("md")]: {
              padding: "0!important",
            },
          },
        }}
      >
        <Avatar
          alt="..."
          src={require("assets/img/theme/team-4-800x800.jpg").default}
          sx={{
            width: "36px",
            height: "36px",
            marginRight: "0.5rem",
            [theme.breakpoints.down("md")]: {
              marginRight: "0",
            },
          }}
        />
        <Hidden smDown>Jessica Jones</Hidden>
      </Button>
      {renderMenu}
    </>
  );
}
