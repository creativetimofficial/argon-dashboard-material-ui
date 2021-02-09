import React from "react";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
// material-ui icons
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    marginBottom: "1.5rem",
    [theme.breakpoints.up("xl")]: {
      marginBottom: 0,
    },
  },
  cardContentRoot: {
    padding: "1rem 1.5rem",
  },
  bgPrimary: {
    backgroundColor: theme.palette.primary.main,
  },
  bgPrimaryLight: {
    backgroundColor: theme.palette.primary.light,
  },
  bgError: {
    backgroundColor: theme.palette.error.main,
  },
  bgErrorLight: {
    backgroundColor: theme.palette.error.light,
  },
  bgWarning: {
    backgroundColor: theme.palette.warning.main,
  },
  bgWarningLight: {
    backgroundColor: theme.palette.warning.light,
  },
  bgInfo: {
    backgroundColor: theme.palette.info.main,
  },
  bgInfoLight: {
    backgroundColor: theme.palette.info.light,
  },
}));

function CardStats() {
  const classes = useStyles();
  return (
    <>
      <Card classes={{ root: classes.cardRoot }}>
        <CardContent classes={{ root: classes.cardContentRoot }}>
          <Grid container component={Box} justifyContent="space-between">
            <Grid item xs="auto">
              <Box
                component="h5"
                color="#8898aa"
                marginBottom="0"
                marginTop="0"
              >
                Traffic
              </Box>
              <Box
                component="h2"
                fontWeight="600"
                marginBottom="0"
                marginTop="0"
              >
                350,897
              </Box>
            </Grid>
            <Grid item xs={"auto"}>
              <Box
                width="3rem"
                height="3rem"
                padding="12px"
                textAlign="center"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="50%"
                boxShadow="0 0 2rem 0 rgba(136,152,170,.15)"
                color="#fff"
                className={classes.bgError}
              >
                <Box
                  component={InsertChartOutlined}
                  width="1.25rem!important"
                  height="1.25rem!important"
                />
              </Box>
            </Grid>
          </Grid>
          <Box
            component="p"
            fontSize=".875rem"
            color="#8898aa"
            marginTop="1rem"
            marginBottom="0"
          >
            <Box
              component="span"
              fontSize=".875rem"
              color="#2dce89"
              marginRight=".5rem"
            >
              <ArrowUpward /> 3.48%
            </Box>
            <Box component="span" whiteSpace="nowrap">
              Since last month
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default CardStats;
