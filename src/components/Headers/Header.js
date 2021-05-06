import React from "react";
// @material-ui/core components
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons components
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import EmojiEvents from "@material-ui/icons/EmojiEvents";
import GroupAdd from "@material-ui/icons/GroupAdd";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
import PieChart from "@material-ui/icons/PieChart";

// core components
import CardStats from "components/Cards/CardStats.js";

const Header = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          position: "relative",
          background:
            "linear-gradient(87deg," + theme.palette.info.main + ",#1171ef)",
          paddingBottom: "8rem",
          paddingTop: "3rem",
          [theme.breakpoints.up("md")]: {
            paddingTop: "8rem",
          },
        }}
      >
        <Container
          maxWidth={false}
          component={Box}
          sx={{
            [theme.breakpoints.up("md")]: {
              paddingLeft: "39px",
              paddingRight: "39px",
            },
          }}
        >
          <div>
            <Grid container>
              <Grid item xl={3} lg={6} xs={12}>
                <CardStats
                  subtitle="Traffic"
                  title="350,897"
                  icon={InsertChartOutlined}
                  color="bgError"
                  footer={
                    <>
                      <Box
                        sx={{
                          component: "span",
                          fontSize: ".875rem",
                          color: theme.palette.success.main,
                          marginRight: ".5rem",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          component={ArrowUpward}
                          sx={{
                            width: "1.5rem!important",
                            height: "1.5rem!important",
                          }}
                        />{" "}
                        3.48%
                      </Box>
                      <Box component="span" sx={{ whiteSpace: "nowrap" }}>
                        Since last month
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={3} lg={6} xs={12}>
                <CardStats
                  subtitle="New users"
                  title="2,356"
                  icon={PieChart}
                  color="bgWarning"
                  footer={
                    <>
                      <Box
                        sx={{
                          component: "span",
                          fontSize: ".875rem",
                          color: theme.palette.error.main,
                          marginRight: ".5rem",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          component={ArrowDownward}
                          sx={{
                            width: "1.5rem!important",
                            height: "1.5rem!important",
                          }}
                        />{" "}
                        3.48%
                      </Box>
                      <Box component="span" sx={{ whiteSpace: "nowrap" }}>
                        Since last week
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={3} lg={6} xs={12}>
                <CardStats
                  subtitle="Sales"
                  title="924"
                  icon={GroupAdd}
                  color="bgWarningLight"
                  footer={
                    <>
                      <Box
                        sx={{
                          component: "span",
                          fontSize: ".875rem",
                          color: theme.palette.warning.main,
                          marginRight: ".5rem",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          component={ArrowDownward}
                          sx={{
                            width: "1.5rem!important",
                            height: "1.5rem!important",
                          }}
                        />{" "}
                        1.10%
                      </Box>
                      <Box component="span" sx={{ whiteSpace: "nowrap" }}>
                        Since yesterday
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={3} lg={6} xs={12}>
                <CardStats
                  subtitle="Performance"
                  title="49,65%"
                  icon={EmojiEvents}
                  color="bgInfo"
                  footer={
                    <>
                      <Box
                        sx={{
                          component: "span",
                          fontSize: ".875rem",
                          color: theme.palette.success.main,
                          marginRight: ".5rem",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          component={ArrowUpward}
                          sx={{
                            width: "1.5rem!important",
                            height: "1.5rem!important",
                          }}
                        />{" "}
                        10%
                      </Box>
                      <Box component="span" sx={{ whiteSpace: "nowrap" }}>
                        Since last month
                      </Box>
                    </>
                  }
                />
              </Grid>
            </Grid>
          </div>
        </Container>
      </Box>
    </>
  );
};

export default Header;
