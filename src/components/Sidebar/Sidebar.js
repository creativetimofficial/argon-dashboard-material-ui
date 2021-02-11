import React from "react";
import PropTypes from "prop-types";
import { useLocation, Link } from "react-router-dom";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";

// for styles applied to this component
const useStyles = makeStyles((theme) => ({
  listRoot: {
    marginTop: "2rem",
    height: "100%",
  },
  listItemRoot: {
    display: "flex",
    fontSize: ".9rem",
    color: "rgba(0,0,0,.5)",
    "&:hover": {
      color: "rgba(0,0,0,.9)",
    },
    [theme.breakpoints.up("md")]: {
      padding: ".65rem 1.5rem !important",
    },
  },
  listItemRootUpgradeToPro: {
    position: "absolute",
    bottom: "10px",
    "&,&:hover": {
      background: "#f6f9fc !important",
    },
    "&:before": {
      display: "none",
    },
  },
  listItemSelected: {
    color: "rgba(0,0,0,.9)",
    "&$listItemRoot,&$listItemRoot:hover": {
      backgroundColor: "unset",
    },
    "&:before": {
      top: ".25rem",
      bottom: ".25rem",
      left: 0,
      right: "auto",
      borderLeft: "2px solid #5e72e4",
      borderBottom: 0,
      content: '""',
      position: "absolute",
    },
  },
  listItemIconRoot: {
    minWidth: "2.25rem",
    fontSize: ".9375rem",
    lineHeight: "1.5rem",
    display: "inline-block",
    top: "2px",
  },
  divider: {
    marginBottom: "1rem",
    marginTop: "1rem",
    marginLeft: "1.5rem",
    marginRight: "1.5rem",
  },
  title: {
    paddingTop: ".25rem",
    paddingBottom: ".25rem",
    fontSize: ".75rem",
    textTransform: "uppercase",
    letterSpacing: ".04em",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    color: "#8898aa",
  },
  logoClasses: {
    [theme.breakpoints.up("md")]: {
      maxHeight: "2.5rem",
      maxWidth: "100%",
      verticalAlign: "middle",
      borderStyle: "none",
    },
  },
  logoLinkClasses: {
    marginRight: "0",
    display: "inline-block",
    paddingBottom: ".0625rem",
    fontSize: "1.25rem",
    lineHeight: "inherit",
    whiteSpace: "nowrap",
    textDecoration: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      textAlign: "center",
      paddingBottom: "1rem",
    },
  },
  textPrimary: {
    color: theme.palette.primary.main,
  },
  textPrimaryLight: {
    color: theme.palette.primary.light,
  },
  textError: {
    color: theme.palette.error.main,
  },
  textErrorLight: {
    color: theme.palette.error.light,
  },
  textWarning: {
    color: theme.palette.warning.main,
  },
  textWarningLight: {
    color: theme.palette.warning.light,
  },
  textInfo: {
    color: theme.palette.info.main,
  },
  textInfoLight: {
    color: theme.palette.info.light,
  },
}));

export default function Sidebar({ routes, logo }) {
  const classes = useStyles();
  const location = useLocation();
  // creates the links that appear in the left menu / Sidebar
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.divider) {
        return <Divider key={key} classes={{ root: classes.divider }} />;
      } else if (prop.title) {
        return (
          <Typography
            key={key}
            variant="h6"
            component="h6"
            classes={{ root: classes.title }}
          >
            {prop.title}
          </Typography>
        );
      }
      let textContent = (
        <>
          <Box minWidth="2.25rem" display="flex" alignItems="center">
            {typeof prop.icon === "string" ? (
              <Box
                component="i"
                className={prop.icon + " " + classes["text" + prop.iconColor]}
              />
            ) : null}
            {typeof prop.icon === "object" ? (
              <Box
                component={prop.icon}
                width="1.25rem!important"
                height="1.25rem!important"
                className={classes["text" + prop.iconColor]}
              />
            ) : null}
          </Box>
          {prop.name}
        </>
      );
      if (prop.href) {
        return (
          <ListItem
            key={key}
            component={"a"}
            href={prop.href}
            classes={{
              root:
                classes.listItemRoot +
                (prop.upgradeToPro
                  ? " " + classes.listItemRootUpgradeToPro
                  : ""),
              selected: classes.listItemSelected,
            }}
            target="_blank"
            selected={prop.upgradeToPro === true}
          >
            {textContent}
          </ListItem>
        );
      } else {
        return (
          <ListItem
            key={key}
            component={Link}
            to={prop.layout + prop.path}
            classes={{
              root:
                classes.listItemRoot +
                (prop.upgradeToPro
                  ? " " + classes.listItemRootUpgradeToPro
                  : ""),
              selected: classes.listItemSelected,
            }}
            selected={
              location.pathname === prop.layout + prop.path ||
              prop.upgradeToPro === true
            }
          >
            {textContent}
          </ListItem>
        );
      }
    });
  };
  let logoImage = (
    <img alt={logo.imgAlt} className={classes.logoClasses} src={logo.imgSrc} />
  );
  return (
    <>
      <Hidden smDown implementation="css">
        <Drawer variant="permanent" anchor="left" open>
          {logo && logo.innerLink ? (
            <Link to={logo.innerLink} className={classes.logoLinkClasses}>
              {logoImage}
            </Link>
          ) : logo && logo.outterLink ? (
            <a href={logo.outterLink} className={classes.logoLinkClasses}>
              {logoImage}
            </a>
          ) : null}
          <List classes={{ root: classes.listRoot }}>
            {createLinks(routes)}
          </List>
        </Drawer>
      </Hidden>
    </>
  );
}

Sidebar.defaultProps = {
  routes: [],
};

Sidebar.propTypes = {
  // NOTE: we recommend that your logo has the following dimensions
  // // 135x40 or 487x144 or a resize of these dimensions
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(
    PropTypes.oneOfType([
      // this generates an anchor (<a href="href">..</a>) link
      // this is a link that is sent outside the app
      PropTypes.shape({
        // if this is set to true, than the link will have an absolute position
        // use wisely and with precaution
        upgradeToPro: PropTypes.bool,
        href: PropTypes.string,
        name: PropTypes.string,
        icon: PropTypes.oneOfType([
          // this refers to icons such as ni ni-spaceship or fa fa-heart
          PropTypes.string,
          // this refers to icons from @material-ui/icons
          PropTypes.object,
        ]),
        iconColor: PropTypes.oneOf([
          "Primary",
          "PrimaryLight",
          "Error",
          "ErrorLight",
          "Warning",
          "WarningLight",
          "Info",
          "InfoLight",
        ]),
      }),
      // this generates a Link (<Link to="layout + path">..</Link>) link
      // this is a link that is sent inside the app
      PropTypes.shape({
        path: PropTypes.string,
        name: PropTypes.string,
        layout: PropTypes.string,
        component: PropTypes.func,
        icon: PropTypes.oneOfType([
          // this refers to icons such as ni ni-spaceship or fa fa-heart
          PropTypes.string,
          // this refers to icons from @material-ui/icons
          PropTypes.object,
        ]),
        iconColor: PropTypes.oneOf([
          "Primary",
          "PrimaryLight",
          "Error",
          "ErrorLight",
          "Warning",
          "WarningLight",
          "Info",
          "InfoLight",
        ]),
      }),
      // this is just a title without any action on it
      // you can think of it as a disabled link
      PropTypes.shape({
        title: PropTypes.string,
      }),
      // this is just a divider line
      PropTypes.shape({
        divider: true,
      }),
    ])
  ),
};
