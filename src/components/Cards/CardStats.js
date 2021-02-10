import React from "react";
import PropTypes from "prop-types";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    marginBottom: "1.5rem",
    [theme.breakpoints.up("xl")]: {
      marginBottom: 0,
    },
  },
  cardContentRoot: {
    padding: "1rem 1.5rem !important",
  },
  textUppercase: {
    textTransform: "uppercase",
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

function CardStats({ subtitle, title, footer, icon, color }) {
  const classes = useStyles();
  console.log(typeof icon);
  return (
    <>
      <Card classes={{ root: classes.cardRoot }} elevation={0}>
        <CardContent classes={{ root: classes.cardContentRoot }}>
          <Grid container component={Box} justifyContent="space-between">
            <Grid item xs="auto">
              <Box
                component={Typography}
                variant="h5"
                color="#8898aa!important"
                marginBottom="0!important"
                marginTop="0!important"
                className={classes.textUppercase}
              >
                {subtitle}
              </Box>
              <Box
                component={Typography}
                variant="h2"
                fontWeight="600!important"
                marginBottom="0!important"
                marginTop="0!important"
              >
                {title}
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
                className={classes[color]}
              >
                {icon && typeof icon === "object" ? (
                  <Box
                    component={icon}
                    width="1.5rem!important"
                    height="1.5rem!important"
                  />
                ) : null}
                {icon && typeof icon === "string" ? (
                  <Box component="i" fontSize="1.25rem" className={icon} />
                ) : null}
              </Box>
            </Grid>
          </Grid>
          {footer ? (
            <Box
              component="p"
              fontSize=".875rem"
              color="#8898aa"
              marginTop="1rem"
              marginBottom="0"
              display="flex"
              alignItems="center"
            >
              {footer}
            </Box>
          ) : null}
        </CardContent>
      </Card>
    </>
  );
}

CardStats.defaultProps = {
  color: "bgPrimaryLight",
};

CardStats.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.oneOfType([
    // i.e. an icon name from Nucleo Icons - e.g. ni ni-atom
    // // or an icon name from Font Awesome - e.g. fa fa-heart
    PropTypes.string,
    // i.e. a component from @material-ui/icons
    PropTypes.object,
  ]),
  color: PropTypes.oneOf([
    "bgPrimary",
    "bgPrimaryLight",
    "bgError",
    "bgErrorLight",
    "bgWarning",
    "bgWarningLight",
    "bgInfo",
    "bgInfoLight",
  ]),
};

export default CardStats;
