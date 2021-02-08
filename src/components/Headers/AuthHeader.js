import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  header: {
    background: "linear-gradient(87deg,#11cdef,#1171ef)",
  },
}));

const AuthHeader = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        className={classes.header}
        position="relative"
        paddingTop="8rem"
        paddingBottom="8rem"
      >
        <Container>
          <Box marginBottom="6rem" textAlign="center">
            <Box
              component={Grid}
              container
              justifyContent="center"
              color="#fff"
            >
              <Grid item lg="5" md="6">
                <h1>Welcome!</h1>
                <Box
                  component="p"
                  color="#ced4da"
                  lineHeight="1.7"
                  fontSize="1rem"
                >
                  Use these awesome forms to login or create new account in your
                  project for free.
                </Box>
              </Grid>
            </Box>
          </Box>
        </Container>
        <Box
          position="absolute"
          zIndex="100"
          height="70px"
          top="auto"
          bottom="0"
          pointerEvents="none"
          left="0"
          right="0"
          width="100%"
          overflow="hidden"
          transform="translateZ(0)"
        >
          <Box
            bottom="0"
            position="absolute"
            pointerEvents="none"
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <Box
              component="polygon"
              fill="#172b4d"
              points="2560 0 2560 100 0 100"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AuthHeader;
