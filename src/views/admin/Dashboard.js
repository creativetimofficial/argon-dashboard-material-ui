import React from "react";
// javascipt plugin for creating charts
import { Chart, registerables } from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// @material-ui/core components
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

// core components
import Header from "components/Headers/Header.js";

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import boxShadows from "assets/theme/box-shadow.js";

Chart.register(...registerables);

function Dashboard() {
  const theme = useTheme();
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (index) => {
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
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
              marginBottom: "3rem!important",
              [theme.breakpoints.up("xl")]: {
                marginBottom: "0!important",
              },
            }}
          >
            <Card
              sx={{
                boxShadow: boxShadows.boxShadow + "!important",
                border: "0!important",
                background:
                  "linear-gradient(87deg," +
                  theme.palette.dark.main +
                  ",#1a174d)!important",
                marginBottom: "0!important",
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
                        variant="h6"
                        sx={{
                          letterSpacing: ".0625rem",
                          marginBottom: ".25rem!important",
                          textTransform: "uppercase",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{ color: theme.palette.gray[400] }}
                        >
                          Overview
                        </Box>
                      </Box>
                      <Box
                        component={Typography}
                        variant="h2"
                        sx={{ marginBottom: "0!important" }}
                      >
                        <Box
                          component="span"
                          sx={{ color: theme.palette.white.main }}
                        >
                          Sales value
                        </Box>
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
                          variant={activeNav === 1 ? "contained" : "neutral"}
                          color="primary"
                          sx={{ marginRight: "1rem!important" }}
                          onClick={() => toggleNavs(1)}
                        >
                          Month
                        </Button>
                        <Button
                          variant={activeNav === 2 ? "contained" : "neutral"}
                          color="primary"
                          onClick={() => toggleNavs(2)}
                        >
                          Week
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                }
                sx={{ backgroundColor: "initial!important" }}
              ></CardHeader>
              <CardContent>
                <Box sx={{ position: "relative", height: "350px" }}>
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} xl={4}>
            <Card
              sx={{
                boxShadow: boxShadows.boxShadow + "!important",
                border: "0!important",
                marginBottom: "0!important",
              }}
            >
              <CardHeader
                title={
                  <Box component="span" sx={{ color: theme.palette.gray[600] }}>
                    Performane
                  </Box>
                }
                subheader="Total orders"
                sx={{ backgroundColor: "initial!important" }}
                titleTypographyProps={{
                  component: Box,
                  variant: "h6",
                  sx: {
                    letterSpacing: ".0625rem",
                    marginBottom: ".25rem!important",
                    textTransform: "uppercase",
                  },
                }}
                subheaderTypographyProps={{
                  component: Box,
                  variant: "h2",
                  sx: { marginBottom: "0!important", color: "initial" },
                }}
              ></CardHeader>
              <CardContent>
                <Box sx={{ position: "relative", height: "350px" }}>
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container component={Box} sx={{ marginTop: "3rem" }}>
          <Grid
            item
            xs={12}
            xl={8}
            component={Box}
            sx={{
              marginBottom: "3rem!important",
              [theme.breakpoints.up("xl")]: {
                marginBottom: "0!important",
              },
            }}
          >
            <Card
              sx={{
                boxShadow: boxShadows.boxShadow + "!important",
                border: "0!important",
                marginBottom: "0!important",
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
                        Page visits
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
                          See all
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                }
                sx={{ backgroundColor: "initial!important" }}
              ></CardHeader>
              <TableContainer>
                <Box
                  component={Table}
                  sx={{ alignItems: "center", marginBottom: "0!important" }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          backgroundColor: theme.palette.gray[100],
                          color: theme.palette.gray[600],
                        }}
                      >
                        Page name
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          backgroundColor: theme.palette.gray[100],
                          color: theme.palette.gray[600],
                        }}
                      >
                        Visitors
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          backgroundColor: theme.palette.gray[100],
                          color: theme.palette.gray[600],
                        }}
                      >
                        Unique users
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          backgroundColor: theme.palette.gray[100],
                          color: theme.palette.gray[600],
                        }}
                      >
                        Bounce rate
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          textTransform: "unset!important",
                          fontSize: ".8125rem",
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        /argon/
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                        }}
                      >
                        4,569
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                        }}
                      >
                        340
                      </TableCell>
                      <Box
                        component={TableCell}
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          marginBottom: "-2px",
                        }}
                      >
                        <Box
                          component={ArrowUpward}
                          sx={{
                            width: "1rem!important",
                            height: "1rem!important",
                            marginRight: "1rem",
                            color: theme.palette.success.main,
                          }}
                        />
                        46,53%
                      </Box>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          textTransform: "unset!important",
                          fontSize: ".8125rem",
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        /argon/index.html
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                        }}
                      >
                        3,985
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                        }}
                      >
                        319
                      </TableCell>
                      <Box
                        component={TableCell}
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          marginBottom: "-2px",
                        }}
                      >
                        <Box
                          component={ArrowDownward}
                          sx={{
                            width: "1rem!important",
                            height: "1rem!important",
                            marginRight: "1rem",
                            color: theme.palette.warning.main,
                          }}
                        />
                        46,53%
                      </Box>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          textTransform: "unset!important",
                          fontSize: ".8125rem",
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        /argon/charts.html
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                        }}
                      >
                        3,513
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                        }}
                      >
                        294
                      </TableCell>
                      <Box
                        component={TableCell}
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          marginBottom: "-2px",
                        }}
                      >
                        <Box
                          component={ArrowDownward}
                          sx={{
                            width: "1rem!important",
                            height: "1rem!important",
                            marginRight: "1rem",
                            color: theme.palette.warning.main,
                          }}
                        />
                        36,49%
                      </Box>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          textTransform: "unset!important",
                          fontSize: ".8125rem",
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        /argon/tables.html
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                        }}
                      >
                        2,050
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                        }}
                      >
                        147
                      </TableCell>
                      <Box
                        component={TableCell}
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          marginBottom: "-2px",
                        }}
                      >
                        <Box
                          component={ArrowUpward}
                          sx={{
                            width: "1rem!important",
                            height: "1rem!important",
                            marginRight: "1rem",
                            color: theme.palette.success.main,
                          }}
                        />
                        50,87%
                      </Box>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          textTransform: "unset!important",
                          fontSize: ".8125rem",
                          borderBottom: "0!important",
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        /argon/profile.html
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          borderBottom: "0!important",
                        }}
                      >
                        1,795
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          borderBottom: "0!important",
                        }}
                      >
                        190
                      </TableCell>
                      <Box
                        component={TableCell}
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          borderBottom: "0!important",
                          marginBottom: "-2px",
                        }}
                      >
                        <Box
                          component={ArrowDownward}
                          sx={{
                            width: "1rem!important",
                            height: "1rem!important",
                            marginRight: "1rem",
                            color: theme.palette.error.main,
                          }}
                        />
                        46,53%
                      </Box>
                    </TableRow>
                  </TableBody>
                </Box>
              </TableContainer>
            </Card>
          </Grid>
          <Grid item xs={12} xl={4}>
            <Card
              sx={{
                boxShadow: boxShadows.boxShadow + "!important",
                border: "0!important",
                marginBottom: "0!important",
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
                        Social traffic
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
                          See all
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                }
                sx={{ backgroundColor: "initial!important" }}
              ></CardHeader>
              <TableContainer>
                <Box
                  component={Table}
                  sx={{ alignItems: "center", marginBottom: "0!important" }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          backgroundColor: theme.palette.gray[100],
                          color: theme.palette.gray[600],
                        }}
                      >
                        Refferal
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          backgroundColor: theme.palette.gray[100],
                          color: theme.palette.gray[600],
                        }}
                      >
                        Visitors
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          backgroundColor: theme.palette.gray[100],
                          color: theme.palette.gray[600],
                        }}
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          textTransform: "unset!important",
                          fontSize: ".8125rem",
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Facebook
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                        }}
                      >
                        1,480
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Box component="span" sx={{ marginRight: ".5rem" }}>
                            60%
                          </Box>
                          <Box sx={{ width: "100%" }}>
                            <LinearProgress
                              variant="determinate"
                              value={60}
                              sx={{
                                height: "3px!important",
                                width: "120px!important",
                                margin: "0!important",
                                "& .MuiLinearProgress-bar": {
                                  background:
                                    "linear-gradient(87deg," +
                                    theme.palette.error.main +
                                    ",#f56036)!important",
                                },
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          textTransform: "unset!important",
                          fontSize: ".8125rem",
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Facebook
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                        }}
                      >
                        5,480
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Box component="span" sx={{ marginRight: ".5rem" }}>
                            70%
                          </Box>
                          <Box sx={{ width: "100%" }}>
                            <LinearProgress
                              variant="determinate"
                              value={70}
                              sx={{
                                height: "3px!important",
                                width: "120px!important",
                                margin: "0!important",
                                "& .MuiLinearProgress-bar": {
                                  background:
                                    "linear-gradient(87deg," +
                                    theme.palette.success.main +
                                    ",#2dcecc)!important",
                                },
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          textTransform: "unset!important",
                          fontSize: ".8125rem",
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Google
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                        }}
                      >
                        4,807
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Box component="span" sx={{ marginRight: ".5rem" }}>
                            80%
                          </Box>
                          <Box sx={{ width: "100%" }}>
                            <LinearProgress
                              variant="determinate"
                              value={80}
                              sx={{
                                height: "3px!important",
                                width: "120px!important",
                                margin: "0!important",
                                "& .MuiLinearProgress-bar": {
                                  background:
                                    "linear-gradient(87deg," +
                                    theme.palette.primary.main +
                                    ",#825ee4)!important",
                                },
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          textTransform: "unset!important",
                          fontSize: ".8125rem",
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Instagram
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                        }}
                      >
                        3,678
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Box component="span" sx={{ marginRight: ".5rem" }}>
                            75%
                          </Box>
                          <Box sx={{ width: "100%" }}>
                            <LinearProgress
                              variant="determinate"
                              value={75}
                              sx={{
                                height: "3px!important",
                                width: "120px!important",
                                margin: "0!important",
                                "& .MuiLinearProgress-bar": {
                                  background:
                                    "linear-gradient(87deg," +
                                    theme.palette.info.main +
                                    ",#1171ef)!important",
                                },
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          textTransform: "unset!important",
                          fontSize: ".8125rem",
                          borderBottom: "0!important",
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        twitter
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          borderBottom: "0!important",
                        }}
                      >
                        2,645
                      </TableCell>
                      <TableCell
                        sx={{
                          verticalAlign: "middle",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                          borderTop: "0",
                          borderBottom: "0!important",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Box component="span" sx={{ marginRight: ".5rem" }}>
                            30%
                          </Box>
                          <Box sx={{ width: "100%" }}>
                            <LinearProgress
                              variant="determinate"
                              value={30}
                              sx={{
                                height: "3px!important",
                                width: "120px!important",
                                margin: "0!important",
                                "& .MuiLinearProgress-bar": {
                                  background:
                                    "linear-gradient(87deg," +
                                    theme.palette.warning.main +
                                    ",#fbb140)!important",
                                },
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Box>
              </TableContainer>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
