import React from "react";
// @material-ui/core components
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
import LocationOn from "@material-ui/icons/LocationOn";
import School from "@material-ui/icons/School";

// core components
import UserHeader from "components/Headers/UserHeader.js";

import boxShadows from "assets/theme/box-shadow.js";

function Profile() {
  const theme = useTheme();
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        sx={{
          marginTop: "-6rem",
          [theme.breakpoints.up("md")]: {
            paddingLeft: "39px",
            paddingRight: "39px",
          },
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            xl={8}
            component={Box}
            sx={{
              marginBottom: "3rem",
              [theme.breakpoints.up("xl")]: {
                marginBottom: "0!important",
              },
              [theme.breakpoints.down("lg")]: {
                order: "2!important",
              },
            }}
          >
            <Card
              sx={{
                boxShadow: boxShadows.boxShadow + "!important",
                border: "0!important",
                backgroundColor: theme.palette.secondary.main,
              }}
            >
              <CardHeader
                subheader={
                  <Grid
                    container
                    component={Box}
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid item xs="auto">
                      <Box
                        component={Typography}
                        variant="h3"
                        sx={{ marginBottom: "0!important" }}
                      >
                        My Account
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box
                        sx={{
                          justifyContent: "flex-end",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                        >
                          Settings
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                }
                sx={{
                  backgroundColor: theme.palette.white.main + "!important",
                }}
              ></CardHeader>
              <CardContent>
                <Box
                  component={Typography}
                  variant="h6"
                  sx={{
                    color: theme.palette.gray[600] + "!important",
                    paddingTop: ".25rem",
                    paddingBottom: ".25rem",
                    fontSize: ".75rem!important",
                    letterSpacing: ".04em",
                    marginBottom: "1.5rem!important",
                    textTransform: "uppercase",
                  }}
                >
                  User Information
                </Box>
                <Box
                  sx={{
                    [theme.breakpoints.up("md")]: {
                      paddingLeft: "1.5rem",
                    },
                  }}
                >
                  <Grid container>
                    <Grid item xs={12} lg={6}>
                      <FormGroup>
                        <FormLabel>Username</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          sx={{ width: "100%", marginBottom: "1rem!important" }}
                        >
                          <Box
                            sx={{
                              paddingLeft: "0.75rem",
                              paddingRight: "0.75rem",
                            }}
                            component={FilledInput}
                            autoComplete="off"
                            type="text"
                            defaultValue="lucky.jesse"
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          sx={{ width: "100%", marginBottom: "1rem!important" }}
                        >
                          <Box
                            sx={{
                              paddingLeft: "0.75rem",
                              paddingRight: "0.75rem",
                            }}
                            component={FilledInput}
                            autoComplete="off"
                            type="email"
                            placeholder="jesse@example.com"
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} lg={6}>
                      <FormGroup>
                        <FormLabel>First name</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          sx={{ width: "100%", marginBottom: "1rem!important" }}
                        >
                          <Box
                            sx={{
                              paddingLeft: "0.75rem",
                              paddingRight: "0.75rem",
                            }}
                            component={FilledInput}
                            autoComplete="off"
                            type="text"
                            defaultValue="Lucky"
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <FormGroup>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          sx={{ width: "100%", marginBottom: "1rem!important" }}
                        >
                          <Box
                            sx={{
                              paddingLeft: "0.75rem",
                              paddingRight: "0.75rem",
                            }}
                            component={FilledInput}
                            autoComplete="off"
                            type="text"
                            defaultValue="Jesse"
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  component={Divider}
                  sx={{
                    marginBottom: "1.5rem!important",
                    marginTop: "1.5rem!important",
                  }}
                />
                <Box
                  component={Typography}
                  variant="h6"
                  sx={{
                    color: theme.palette.gray[600] + "!important",
                    paddingTop: ".25rem",
                    paddingBottom: ".25rem",
                    fontSize: ".75rem!important",
                    letterSpacing: ".04em",
                    marginBottom: "1.5rem!important",
                    textTransform: "uppercase",
                  }}
                >
                  Contact Information
                </Box>
                <Box
                  sx={{
                    [theme.breakpoints.up("md")]: {
                      paddingLeft: "1.5rem",
                    },
                  }}
                >
                  <Grid container>
                    <Grid item xs={12}>
                      <FormGroup>
                        <FormLabel>Address</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          sx={{ width: "100%", marginBottom: "1rem!important" }}
                        >
                          <Box
                            sx={{
                              paddingLeft: "0.75rem",
                              paddingRight: "0.75rem",
                            }}
                            component={FilledInput}
                            autoComplete="off"
                            type="text"
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} lg={4}>
                      <FormGroup>
                        <FormLabel>City</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          sx={{ width: "100%", marginBottom: "1rem!important" }}
                        >
                          <Box
                            sx={{
                              paddingLeft: "0.75rem",
                              paddingRight: "0.75rem",
                            }}
                            component={FilledInput}
                            autoComplete="off"
                            type="text"
                            defaultValue="New York"
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <FormGroup>
                        <FormLabel>Country</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          sx={{ width: "100%", marginBottom: "1rem!important" }}
                        >
                          <Box
                            sx={{
                              paddingLeft: "0.75rem",
                              paddingRight: "0.75rem",
                            }}
                            component={FilledInput}
                            autoComplete="off"
                            type="text"
                            defaultValue="United States"
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <FormGroup>
                        <FormLabel>Postal code</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          sx={{ width: "100%", marginBottom: "1rem!important" }}
                        >
                          <Box
                            sx={{
                              paddingLeft: "0.75rem",
                              paddingRight: "0.75rem",
                            }}
                            component={FilledInput}
                            autoComplete="off"
                            type="text"
                            placeholder="Postal code"
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  component={Divider}
                  sx={{
                    marginBottom: "1.5rem!important",
                    marginTop: "1.5rem!important",
                  }}
                />
                <Box
                  component={Typography}
                  variant="h6"
                  sx={{
                    color: theme.palette.gray[600] + "!important",
                    paddingTop: ".25rem",
                    paddingBottom: ".25rem",
                    fontSize: ".75rem!important",
                    letterSpacing: ".04em",
                    marginBottom: "1.5rem!important",
                    textTransform: "uppercase",
                  }}
                >
                  About me
                </Box>
                <Box
                  sx={{
                    [theme.breakpoints.up("md")]: {
                      paddingLeft: "1.5rem",
                    },
                  }}
                >
                  <Grid container>
                    <Grid item xs={12}>
                      <FormGroup>
                        <FormLabel>About me</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          sx={{ width: "100%", marginBottom: "1rem!important" }}
                        >
                          <Box
                            sx={{
                              paddingLeft: "0.75rem",
                              paddingRight: "0.75rem",
                            }}
                            component={FilledInput}
                            autoComplete="off"
                            multiline
                            defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and Open Source."
                            rows="4"
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            xl={4}
            component={Box}
            sx={{
              marginBottom: "3rem!important",
              [theme.breakpoints.down("lg")]: {
                order: "1!important",
              },
              [theme.breakpoints.up("lg")]: {
                marginBottom: "0!important",
              },
            }}
          >
            <Card
              sx={{
                boxShadow: boxShadows.boxShadow + "!important",
                border: "0!important",
              }}
            >
              <Box component={Grid} container sx={{ justifyContent: "center" }}>
                <Grid item xs={12} lg={3}>
                  <Box position="relative">
                    <Box
                      component="img"
                      src={
                        require("assets/img/theme/team-4-800x800.jpg").default
                      }
                      alt="..."
                      sx={{
                        maxWidth: "180px",
                        borderRadius: "50%",
                        position: "absolute",
                        left: "50%",
                        boxShadow: boxShadows.boxShadow + "!important",
                        verticalAlign: "middle",
                        borderStyle: "none",
                        transform: "translate(-50%,-30%)",
                        transition: "all .15s ease",
                      }}
                    />
                  </Box>
                </Grid>
              </Box>
              <Box
                component={CardHeader}
                sx={{
                  border: "0!important",
                  textAlign: "center",
                  paddingBottom: "0!important",
                  paddingTop: "8rem!important",
                  [theme.breakpoints.up("sm")]: {
                    paddingBottom: "1.5rem!important",
                    paddingTop: "1.5rem!important",
                  },
                }}
                subheader={
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button variant="contained" size="small" color="info">
                      Connect
                    </Button>
                    <Button variant="contained" size="small" color="dark">
                      Message
                    </Button>
                  </Box>
                }
              ></Box>
              <Box
                component={CardContent}
                sx={{
                  paddingTop: "0!important",
                  [theme.breakpoints.up("sm")]: {
                    paddingTop: "1.5rem!important",
                  },
                }}
              >
                <Grid container>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        padding: "1rem 0",
                        justifyContent: "center",
                        display: "flex",
                        [theme.breakpoints.up("sm")]: {
                          paddingTop: "3rem!important",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          textAlign: "center",
                          marginRight: "1rem",
                          padding: ".875rem",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            fontSize: "1.1rem",
                            fontWeight: "700",
                            display: "block",
                            letterSpacing: ".025em",
                            textTransform: "uppercase",
                          }}
                        >
                          22
                        </Box>
                        <Box
                          component="span"
                          sx={{
                            fontSize: ".875rem",
                            color: theme.palette.gray[500],
                          }}
                        >
                          Friends
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          textAlign: "center",
                          marginRight: "1rem",
                          padding: ".875rem",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            fontSize: "1.1rem",
                            fontWeight: "700",
                            display: "block",
                            letterSpacing: ".025em",
                            textTransform: "uppercase",
                          }}
                        >
                          10
                        </Box>
                        <Box
                          component="span"
                          sx={{
                            fontSize: ".875rem",
                            color: theme.palette.gray[500],
                          }}
                        >
                          Photos
                        </Box>
                      </Box>
                      <Box sx={{ textAlign: "center", padding: ".875rem" }}>
                        <Box
                          component="span"
                          sx={{
                            fontSize: "1.1rem",
                            fontWeight: "700",
                            display: "block",
                            letterSpacing: ".025em",
                            textTransform: "uppercase",
                          }}
                        >
                          89
                        </Box>
                        <Box
                          component="span"
                          sx={{
                            fontSize: ".875rem",
                            color: theme.palette.gray[500],
                          }}
                        >
                          Comments
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h3">
                    Jessica Jones
                    <Box component="span" sx={{ fontWeight: "300" }}>
                      , 27
                    </Box>
                  </Typography>
                  <Box
                    component={Typography}
                    variant="h5"
                    sx={{
                      fontWeight: "300!important",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component={LocationOn}
                      sx={{
                        width: "1.25rem!important",
                        height: "1.25rem!important",
                      }}
                    ></Box>
                    Bucharest, Romania
                  </Box>
                  <Box
                    component={Typography}
                    variant="h5"
                    sx={{ marginTop: "3rem!important" }}
                  >
                    Solution Manager - Creative Tim Officer
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1rem",
                    }}
                  >
                    <Box
                      component={School}
                      sx={{
                        width: "1.25rem!important",
                        height: "1.25rem!important",
                        marginRight: ".5rem",
                      }}
                    ></Box>
                    University of Computer Science
                  </Box>
                  <Box
                    component={Divider}
                    sx={{
                      marginTop: "1.5rem!important",
                      marginBottom: "1.5rem!important",
                    }}
                  ></Box>
                  <Box
                    component="p"
                    sx={{
                      fontWeight: "300",
                      lineHeight: "1.7",
                      marginBottom: "1rem",
                      fontSize: "1rem",
                    }}
                  >
                    Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    Nick Murphy — writes, performs and records all of his own
                    music.
                  </Box>
                  <Box
                    component="a"
                    href="#mui"
                    sx={{
                      color: theme.palette.primary.main,
                      backgroundColor: "initial",
                      textDecoration: "none",
                      fontSize: "1rem",
                      "&:hover": {
                        color: theme.palette.primary.dark,
                      },
                    }}
                    onClick={(e) => e.preventDefault()}
                  >
                    Show More
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Profile;
