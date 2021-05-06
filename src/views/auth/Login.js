import React from "react";
// @material-ui/core components
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Checkbox from "@material-ui/core/Checkbox";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons components
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";

// core components
import boxShadows from "assets/theme/box-shadow.js";

function Login() {
  const theme = useTheme();
  return (
    <>
      <Grid item xs={12} lg={5} md={7}>
        <Card
          sx={{
            boxShadow: boxShadows.boxShadow + "!important",
            border: "0!important",
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          <CardHeader
            sx={{ backgroundColor: "initial" }}
            title={
              <Box
                sx={{
                  fontSize: "80%",
                  fontWeight: "400",
                  component: "small",
                  color: theme.palette.gray[600],
                }}
              >
                Sign in with
              </Box>
            }
            titleTypographyProps={{
              component: Box,
              sx: {
                textAlign: "center",
                marginBottom: "1rem!important",
                marginTop: ".5rem!important",
                fontSize: "1rem!important",
              },
            }}
            subheader={
              <Box sx={{ textAlign: "center" }}>
                <Button
                  variant="neutral"
                  sx={{ marginRight: "1rem!important" }}
                >
                  <Box component="span" sx={{ marginRight: "4px" }}>
                    <Box
                      alt="..."
                      component="img"
                      sx={{
                        width: "20px",
                        verticalAlign: "middle",
                        borderStyle: "none",
                      }}
                      src={
                        require("assets/img/icons/common/github.svg").default
                      }
                    ></Box>
                  </Box>
                  <Box component="span" sx={{ marginLeft: ".75rem" }}>
                    Github
                  </Box>
                </Button>
                <Button variant="neutral">
                  <Box component="span" sx={{ marginRight: "4px" }}>
                    <Box
                      alt="..."
                      component="img"
                      sx={{
                        width: "20px",
                        verticalAlign: "middle",
                        borderStyle: "none",
                      }}
                      src={
                        require("assets/img/icons/common/google.svg").default
                      }
                    ></Box>
                  </Box>
                  <Box component="span" sx={{ marginLeft: ".75rem" }}>
                    Google
                  </Box>
                </Button>
              </Box>
            }
          ></CardHeader>
          <CardContent
            sx={{
              [theme.breakpoints.up("md")]: {
                padding: "3rem",
              },
            }}
          >
            <Box
              sx={{
                color: theme.palette.gray[600],
                textAlign: "center",
                marginBottom: "1rem",
                marginTop: ".5rem",
                fontSize: "1rem",
              }}
            >
              <Box
                sx={{ fontSize: "80%", fontWeight: "400", component: "small" }}
              >
                Or sign in with credentials
              </Box>
            </Box>
            <FormControl
              variant="filled"
              component={Box}
              sx={{ width: "100%", marginBottom: "1rem!important" }}
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
              sx={{ width: "100%", marginBottom: "1rem!important" }}
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
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Remeber me"
              labelPlacement="end"
              sx={{
                position: "relative",
                display: "flex",
                minHeight: "1.5rem",
                WebkitPrintColorAdjust: "exact",
                "& .MuiFormControlLabel-label": {
                  cursor: "pointer",
                  fontSize: ".875rem",
                  position: "relative",
                  verticalAlign: "top",
                  display: "inline-block",
                  color: theme.palette.gray[600],
                },
              }}
            />
            <Box
              sx={{
                textAlign: "center",
                marginTop: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <Button color="primary" variant="contained">
                Sign in
              </Button>
            </Box>
          </CardContent>
        </Card>
        <Grid container component={Box} sx={{ marginTop: "1rem" }}>
          <Grid item xs={6} component={Box} sx={{ textAlign: "left" }}>
            <Box
              component="a"
              href="#admui"
              onClick={(e) => e.preventDefault()}
              sx={{ color: theme.palette.gray[400], textDecoration: "none" }}
            >
              Forgot password
            </Box>
          </Grid>
          <Grid item xs={6} component={Box} sx={{ textAlign: "right" }}>
            <Box
              component="a"
              href="#admui"
              onClick={(e) => e.preventDefault()}
              sx={{ color: theme.palette.gray[400], textDecoration: "none" }}
            >
              Create new account
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
