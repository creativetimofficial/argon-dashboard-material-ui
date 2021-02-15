import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// core components
import componentStyles from "assets/theme/components/card-stats.js";
import boxShadows from "assets/theme/box-shadow.js";

const useStyles = makeStyles(componentStyles);

function CardStats({ subtitle, title, footer, icon, color }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Card classes={{ root: classes.cardRoot }} elevation={0}>
        <CardContent classes={{ root: classes.cardContentRoot }}>
          <Grid container component={Box} justifyContent="space-between">
            <Grid item xs="auto">
              <Box
                component={Typography}
                variant="h5"
                color={theme.palette.gray[600] + "!important"}
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
                boxShadow={boxShadows.boxShadow}
                color={theme.palette.white.main}
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
              color={theme.palette.gray[600]}
              marginTop="1rem"
              marginBottom="0"
              display="flex"
              alignItems="center"
              flexWrap="wrap"
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
