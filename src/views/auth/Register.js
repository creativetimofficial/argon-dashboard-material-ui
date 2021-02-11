import React from "react";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Checkbox from "@material-ui/core/Checkbox";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormGroup from '@material-ui/core/FormGroup';
// import FormLabel from '@material-ui/core/FormLabel';
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
// material-ui icons
// import AccountCircle from "@material-ui/icons/AccountCircle";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import School from "@material-ui/icons/School";

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    boxShadow: "0 0 2rem 0 rgba(136,152,170,.15)!important",
    border: "0!important",
    backgroundColor: "#f7fafc",
  },
  cardHeader: {
    backgroundColor: "initial",
  },
  cardContent: {
    [theme.breakpoints.up("md")]: {
      padding: "3rem",
    },
  },
  buttonImg: {
    verticalAlign: "middle",
    borderStyle: "none",
  },
  buttonRoot: {
    backgroundColor: "#fff",
    color: theme.palette.primary.main,
    boxShadow: "0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)",
    borderColor: "#fff!important",
    "&:hover": {
      color: "#212529",
      borderColor: "#fff!important",
      backgroundColor: "#fff",
    },
  },
  formControlLabelRoot: {
    position: "relative",
    display: "flex",
    minHeight: "1.5rem",
    WebkitPrintColorAdjust: "exact",
  },
  formControlLabelLabel: {
    cursor: "pointer",
    fontSize: ".875rem",
    position: "relative",
    verticalAlign: "top",
    display: "inline-block",
    color: "#8898aa",
  },
  footerLinks: {
    color: "#ced4da",
    textDecoration: "none",
  },
}));

function Register() {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} lg={6} md={8}>
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title={
              <Box
                fontSize="80%"
                fontWeight="400"
                component="small"
                color="#8898aa"
              >
                Sign up with
              </Box>
            }
            titleTypographyProps={{
              component: Box,
              textAlign: "center",
              marginBottom: "1rem!important",
              marginTop: ".5rem!important",
              fontSize: "1rem!important",
            }}
            subheader={
              <Box textAlign="center">
                <Box
                  component={Button}
                  variant="contained"
                  marginRight="2rem!important"
                  classes={{ root: classes.buttonRoot }}
                >
                  <Box component="span" marginRight="4px">
                    <Box
                      alt="..."
                      component="img"
                      width="20px"
                      className={classes.buttonImg}
                      src={
                        require("assets/img/icons/common/github.svg").default
                      }
                    ></Box>
                  </Box>
                  <Box component="span" marginLeft=".75rem">
                    Github
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  classes={{ root: classes.buttonRoot }}
                >
                  <Box component="span" marginRight="4px">
                    <Box
                      alt="..."
                      component="img"
                      width="20px"
                      className={classes.buttonImg}
                      src={
                        require("assets/img/icons/common/google.svg").default
                      }
                    ></Box>
                  </Box>
                  <Box component="span" marginLeft=".75rem">
                    Google
                  </Box>
                </Button>
              </Box>
            }
          ></CardHeader>
          <CardContent classes={{ root: classes.cardContent }}>
            <Box
              color="#8898aa"
              textAlign="center"
              marginBottom="1.5rem"
              marginTop=".5rem"
              fontSize="1rem"
            >
              <Box fontSize="80%" fontWeight="400" component="small">
                Or sign up with credentials
              </Box>
            </Box>
            <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1.5rem!important"
            >
              <FilledInput
                autoComplete="off"
                type="text"
                placeholder="Name"
                startAdornment={
                  <InputAdornment position="start">
                    <School />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1.5rem!important"
            >
              <FilledInput
                autoComplete="off"
                type="email"
                placeholder="Email"
                startAdornment={
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              variant="filled"
              component={Box}
              width="100%"
              marginBottom="1.5rem!important"
            >
              <FilledInput
                autoComplete="off"
                type="password"
                placeholder="Password"
                startAdornment={
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box
              fontStyle="italic"
              fontSize="1rem"
              color="#8898aa"
              marginBottom=".5rem"
            >
              <Box component="small" fontSize="80%">
                password strength:{" "}
                <Box component="span" fontWeight="700" color="#2dce89">
                  strong
                </Box>
              </Box>
            </Box>
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label={
                <>
                  I agree with the{" "}
                  <Box color="#5e72e4" component="a" textDecoration="none">
                    Privacy Policy
                  </Box>
                </>
              }
              labelPlacement="end"
              classes={{
                root: classes.formControlLabelRoot,
                label: classes.formControlLabelLabel,
              }}
            />
            <Box textAlign="center" marginTop="1.5rem" marginBottom="1.5rem">
              <Button color="primary" variant="contained">
                Create account
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default Register;
