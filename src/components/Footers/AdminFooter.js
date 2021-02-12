import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components

const useStyles = makeStyles((theme) => ({
  listItemRoot: {
    width: "auto",
    color: theme.palette.gray[600],
    fontSize: ".875rem",
  },
  copyrightWrapper: {
    color: theme.palette.gray[600],
    fontSize: ".875rem",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  copyrightLink: {
    fontWeight: "600",
    marginLeft: ".25rem",
    color: theme.palette.primary.main,
    backgroundColor: "initial",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  justifyContentCenter: {
    [theme.breakpoints.down("lg")]: {
      justifyContent: "center!important",
    },
  },
  flexDirectionColumn: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column!important",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box component="footer" width="100%" padding="2.5rem 0">
      <Grid container classes={{ root: classes.justifyContentCenter }}>
        <Box
          item
          xs={12}
          xl={6}
          component={Grid}
          display="flex"
          alignItems="center"
          className={classes.justifyContentCenter}
        >
          <div className={classes.copyrightWrapper}>
            © {new Date().getFullYear()}{" "}
            <a
              className={classes.copyrightLink}
              href="https://www.creative-tim.com?ref=adr-admin-footer"
              rel="noopener noreferrer"
              target="_blank"
            >
              Creative Tim
            </a>
          </div>
        </Box>

        <Grid
          item
          xl={6}
          component={Box}
          display="flex"
          justifyContent="flex-end"
        >
          <Box
            component={List}
            display="flex"
            justifyContent="center"
            alignItems="center"
            className={classes.flexDirectionColumn}
          >
            <ListItem
              component="a"
              href="https://www.creative-tim.com?ref=adr-admin-footer"
              rel="noopener noreferrer"
              target="_blank"
              classes={{
                root: classes.listItemRoot,
              }}
            >
              Creative Tim
            </ListItem>

            <ListItem
              component="a"
              href="https://www.creative-tim.com/presentation?ref=adr-admin-footer"
              rel="noopener noreferrer"
              target="_blank"
              classes={{
                root: classes.listItemRoot,
              }}
            >
              About Us
            </ListItem>

            <ListItem
              component="a"
              href="http://blog.creative-tim.com?ref=adr-admin-footer"
              rel="noopener noreferrer"
              target="_blank"
              classes={{
                root: classes.listItemRoot,
              }}
            >
              Blog
            </ListItem>

            <ListItem
              component="a"
              href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-admin-footer"
              rel="noopener noreferrer"
              target="_blank"
              classes={{
                root: classes.listItemRoot,
              }}
            >
              MIT License
            </ListItem>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
