import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components

const useStyles = makeStyles((theme) => ({
  listItemRoot: {
    width: "auto",
    fontSize: "0.875rem",
    "&:hover": {
      color: "#5e72e4",
    },
  },
  copyrightWrapper: {
    color: "#8898aa",
    fontSize: "1rem",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  copyrightLink: {
    fontWeight: "600",
    marginLeft: ".25rem",
    color: "#5e72e4",
    backgroundColor: "initial",
    textDecoration: "none",
    "&:hover": {
      color: "#233dd2",
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
    <Box component="footer" width="100%" paddingTop="1rem">
      <Container
        component={Box}
        maxWidth="xl"
        display="flex!important"
        alignItems="center"
        classes={{
          root:
            classes.justifyContentCenter + " " + classes.flexDirectionColumn,
        }}
      >
        <Grid item xs={12} xl={6} wrap="wrap">
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
        </Grid>

        <Grid
          item
          xs={12}
          xl={6}
          component={Box}
          display="flex"
          justifyContent="flex-end"
          classes={{
            root:
              classes.justifyContentCenter + " " + classes.flexDirectionColumn,
          }}
        >
          <Box
            component={List}
            display="flex"
            justifyContent="center"
            alignItems="center"
            classes={{
              root:
                classes.justifyContentCenter +
                " " +
                classes.flexDirectionColumn,
            }}
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
      </Container>
    </Box>
  );
};

export default Footer;
