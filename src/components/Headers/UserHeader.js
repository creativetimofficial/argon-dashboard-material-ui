import React from "react";

// @material-ui/core components
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// core components

const UserHeader = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          [theme.breakpoints.up("md")]: {
            paddingTop: "8rem",
          },
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundImage:
            "url(" +
            require("assets/img/theme/profile-cover.jpg").default +
            ")",
          paddingTop: "3rem",
          paddingBottom: "8rem",
          alignItems: "center",
          display: "flex",
          minHeight: "600px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            transition: "all .15s ease",
            opacity: ".9",
            background:
              "linear-gradient(87deg," +
              theme.palette.dark.main +
              ",#1a174d)!important",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        />
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            zIndex: 1,
            [theme.breakpoints.up("md")]: {
              paddingLeft: "39px",
              paddingRight: "39px",
            },
          }}
          maxWidth={false}
          component={Box}
        >
          <Grid container>
            <Grid item xs={12} md={10} lg={7}>
              <Typography
                variant="h1"
                sx={{
                  color: theme.palette.white.main,
                  fontSize: "2.75rem",
                  fontWeight: 600,
                  lineHeight: 1.5,
                }}
              >
                Hello Jesse
              </Typography>
              <Box
                component="p"
                sx={{
                  marginBottom: "3rem",
                  color: theme.palette.white.main,
                  lineHeight: "1.7",
                  fontSize: "1rem",
                }}
              >
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or assigned tasks
              </Box>
              <Button variant="contained" color="info">
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
