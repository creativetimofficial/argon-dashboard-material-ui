import React from "react";
import { useLocation, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

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

export default function TemporaryDrawer({ routes, logo }) {
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
          <ListItemIcon
            classes={{
              root:
                classes.listItemIconRoot +
                " " +
                classes["text" + prop.iconColor],
            }}
          >
            <i className={prop.icon} />
          </ListItemIcon>
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
