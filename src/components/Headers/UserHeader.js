/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// core components
const useStyles = makeStyles((theme) => ({
  wrapperBox: {
    [theme.breakpoints.up("md")]: {
      paddingTop: "8rem",
    },
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundImage:
      "url(" +
      require("../../assets/img/theme/profile-cover.jpg").default +
      ")",
  },
  overlayBox: {
    transition: "all .15s ease",
    opacity: ".9",
    background: "linear-gradient(87deg,#172b4d,#1a174d)!important",
  },
  containerRoot: {
    zIndex: 1,
    [theme.breakpoints.up("md")]: {
      paddingLeft: "39px",
      paddingRight: "39px",
    },
  },
  typographyRootH1: {
    color: "#fff",
    fontSize: "2.75rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  buttonRoot: {
    color: "#fff",
    backgroundColor: theme.palette.info.main,
    "&:hover": {
      backgroundColor: theme.palette.info.dark,
    },
  },
}));

const UserHeader = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        paddingTop="3rem"
        paddingBottom="8rem"
        alignItems="center"
        display="flex"
        className={classes.wrapperBox}
        minHeight="600px"
        position="relative"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          className={classes.overlayBox}
        />
        <Container
          display="flex"
          alignItems="center"
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
        >
          <Grid container>
            <Grid item xs={12} md={10} lg={7}>
              <Typography
                variant="h1"
                classes={{ root: classes.typographyRootH1 }}
              >
                Hello Jesse
              </Typography>
              <Box
                component="p"
                marginBottom="3rem"
                color="#fff"
                lineHeight="1.7"
                fontSize="1rem"
              >
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or assigned tasks
              </Box>
              <Button
                variant="contained"
                classes={{ root: classes.buttonRoot }}
              >
                Edit profile
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default UserHeader;
