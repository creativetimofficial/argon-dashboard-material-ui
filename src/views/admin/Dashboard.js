import React from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
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
// material-ui icons
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

const useStyles = makeStyles((theme) => ({
  cardRootBgGradient: {
    background: "linear-gradient(87deg,#172b4d,#1a174d)!important",
  },
  cardRoot: {
    boxShadow: "0 0 2rem 0 rgba(136,152,170,.15)!important",
    border: "0!important",
  },
  cardHeaderRoot: {
    backgroundColor: "initial!important",
  },
  textUppercase: {
    textTransform: "uppercase",
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "39px",
      paddingRight: "39px",
    },
  },
  buttonRootUnselected: {
    background: "#fff!important",
    color: "#5e72e4!important",
  },
  gridItemRoot: {
    [theme.breakpoints.up("xl")]: {
      marginBottom: "0!important",
    },
  },
  tableRoot: {
    marginBottom: "0!important",
  },
  tableCellRoot: {
    verticalAlign: "middle",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    borderTop: "0",
  },
  tableCellRootHead: {
    backgroundColor: "#f6f9fc",
    color: "#8898aa",
  },
  tableCellRootBodyHead: {
    textTransform: "unset!important",
    fontSize: ".8125rem",
  },
  borderBottomUnset: {
    borderBottom: "0!important",
  },
  linearProgressRoot: {
    height: "3px!important",
    width: "120px!important",
    margin: "0!important",
  },
  bgGradientError: {
    background: "linear-gradient(87deg,#f5365c,#f56036)!important",
  },
  bgGradientSuccess: {
    background: "linear-gradient(87deg,#2dce89,#2dcecc)!important",
  },
  bgGradientPrimary: {
    background: "linear-gradient(87deg,#5e72e4,#825ee4)!important",
  },
  bgGradientInfo: {
    background: "linear-gradient(87deg,#11cdef,#1171ef)!important",
  },
  bgGradientWarning: {
    background: "linear-gradient(87deg,#fb6340,#fbb140)!important",
  },
}));

function Dashboard() {
  const classes = useStyles();
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
        marginTop="-6rem"
        classes={{ root: classes.containerRoot }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            xl={8}
            component={Box}
            marginBottom="3rem!important"
            classes={{ root: classes.gridItemRoot }}
          >
            <Card
              classes={{
                root: classes.cardRoot + " " + classes.cardRootBgGradient,
              }}
            >
              <CardHeader
                subheader={
                  <Grid
                    container
                    component={Box}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs="auto">
                      <Box
                        component={Typography}
                        variant="h6"
                        letterSpacing=".0625rem"
                        marginBottom=".25rem!important"
                        className={classes.textUppercase}
                      >
                        <Box component="span" color="#ced4da">
                          Overview
                        </Box>
                      </Box>
                      <Box
                        component={Typography}
                        variant="h2"
                        marginBottom="0!important"
                      >
                        <Box component="span" color="#fff">
                          Sales value
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          component={Box}
                          marginRight="1rem!important"
                          onClick={() => toggleNavs(1)}
                          classes={{
                            root:
                              activeNav === 1
                                ? ""
                                : classes.buttonRootUnselected,
                          }}
                        >
                          Month
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => toggleNavs(2)}
                          classes={{
                            root:
                              activeNav === 2
                                ? ""
                                : classes.buttonRootUnselected,
                          }}
                        >
                          Week
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>
              <CardContent>
                <Box position="relative" height="350px">
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
            <Card classes={{ root: classes.cardRoot }}>
              <CardHeader
                title={
                  <Box component="span" color="#8898aa">
                    Performane
                  </Box>
                }
                subheader="Total orders"
                classes={{ root: classes.cardHeaderRoot }}
                titleTypographyProps={{
                  component: Box,
                  variant: "h6",
                  letterSpacing: ".0625rem",
                  marginBottom: ".25rem!important",
                  classes: {
                    root: classes.textUppercase,
                  },
                }}
                subheaderTypographyProps={{
                  component: Box,
                  variant: "h2",
                  marginBottom: "0!important",
                  color: "initial",
                }}
              ></CardHeader>
              <CardContent>
                <Box position="relative" height="350px">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container component={Box} marginTop="3rem">
          <Grid
            item
            xs={12}
            xl={8}
            component={Box}
            marginBottom="3rem!important"
            classes={{ root: classes.gridItemRoot }}
          >
            <Card
              classes={{
                root: classes.cardRoot,
              }}
            >
              <CardHeader
                subheader={
                  <Grid
                    container
                    component={Box}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs="auto">
                      <Box
                        component={Typography}
                        variant="h3"
                        marginBottom="0!important"
                      >
                        Page visits
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
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
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>
              <TableContainer>
                <Box
                  component={Table}
                  alignItems="center"
                  marginBottom="0!important"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Page name
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Visitors
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Unique users
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Bounce rate
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        /argon/
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        4,569
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        340
                      </TableCell>
                      <Box
                        component={TableCell}
                        className={classes.tableCellRoot}
                        marginBottom="-2px"
                      >
                        <Box
                          component={ArrowUpward}
                          width="1rem!important"
                          height="1rem!important"
                          marginRight="1rem"
                          color="#2dce89"
                        />
                        46,53%
                      </Box>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        /argon/index.html
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        3,985
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        319
                      </TableCell>
                      <Box
                        component={TableCell}
                        className={classes.tableCellRoot}
                        marginBottom="-2px"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1rem!important"
                          height="1rem!important"
                          marginRight="1rem"
                          color="#fb6340"
                        />
                        46,53%
                      </Box>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        /argon/charts.html
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        3,513
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        294
                      </TableCell>
                      <Box
                        component={TableCell}
                        className={classes.tableCellRoot}
                        marginBottom="-2px"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1rem!important"
                          height="1rem!important"
                          marginRight="1rem"
                          color="#fb6340"
                        />
                        36,49%
                      </Box>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        /argon/tables.html
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        2,050
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        147
                      </TableCell>
                      <Box
                        component={TableCell}
                        className={classes.tableCellRoot}
                        marginBottom="-2px"
                      >
                        <Box
                          component={ArrowUpward}
                          width="1rem!important"
                          height="1rem!important"
                          marginRight="1rem"
                          color="#2dce89"
                        />
                        50,87%
                      </Box>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead +
                            " " +
                            classes.borderBottomUnset,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        /argon/profile.html
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.borderBottomUnset,
                        }}
                      >
                        1,795
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.borderBottomUnset,
                        }}
                      >
                        190
                      </TableCell>
                      <Box
                        component={TableCell}
                        className={
                          classes.tableCellRoot +
                          " " +
                          classes.borderBottomUnset
                        }
                        marginBottom="-2px"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1rem!important"
                          height="1rem!important"
                          marginRight="1rem"
                          color="#f5365c"
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
            <Card classes={{ root: classes.cardRoot }}>
              <CardHeader
                subheader={
                  <Grid
                    container
                    component={Box}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs="auto">
                      <Box
                        component={Typography}
                        variant="h3"
                        marginBottom="0!important"
                      >
                        Social traffic
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
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
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>
              <TableContainer>
                <Box
                  component={Table}
                  alignItems="center"
                  marginBottom="0!important"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Refferal
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Visitors
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Facebook
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        1,480
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <Box display="flex" alignItems="center">
                          <Box component="span" marginRight=".5rem">
                            60%
                          </Box>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={60}
                              classes={{
                                root: classes.linearProgressRoot,
                                bar: classes.bgGradientError,
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Facebook
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        5,480
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <Box display="flex" alignItems="center">
                          <Box component="span" marginRight=".5rem">
                            70%
                          </Box>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={70}
                              classes={{
                                root: classes.linearProgressRoot,
                                bar: classes.bgGradientSuccess,
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Google
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        4,807
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <Box display="flex" alignItems="center">
                          <Box component="span" marginRight=".5rem">
                            80%
                          </Box>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={80}
                              classes={{
                                root: classes.linearProgressRoot,
                                bar: classes.bgGradientPrimary,
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Instagram
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        3,678
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <Box display="flex" alignItems="center">
                          <Box component="span" marginRight=".5rem">
                            75%
                          </Box>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={75}
                              classes={{
                                root: classes.linearProgressRoot,
                                bar: classes.bgGradientInfo,
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead +
                            " " +
                            classes.borderBottomUnset,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        twitter
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.borderBottomUnset,
                        }}
                      >
                        2,645
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.borderBottomUnset,
                        }}
                      >
                        <Box display="flex" alignItems="center">
                          <Box component="span" marginRight=".5rem">
                            30%
                          </Box>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={30}
                              classes={{
                                root: classes.linearProgressRoot,
                                bar: classes.bgGradientWarning,
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
