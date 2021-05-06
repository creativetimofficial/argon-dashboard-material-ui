import React from "react";

// @material-ui/core components
import { useTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/core/AvatarGroup";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Pagination from "@material-ui/core/Pagination";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/lab components
// @material-ui/icons components
import MoreVert from "@material-ui/icons/MoreVert";

// core components
import Header from "components/Headers/Header.js";

import boxShadows from "assets/theme/box-shadow.js";

const Tables = () => {
  const theme = useTheme();
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const [anchorEl5, setAnchorEl5] = React.useState(null);
  const [anchorEl6, setAnchorEl6] = React.useState(null);
  const [anchorEl7, setAnchorEl7] = React.useState(null);
  const [anchorEl8, setAnchorEl8] = React.useState(null);
  const [anchorEl9, setAnchorEl9] = React.useState(null);
  const [anchorEl10, setAnchorEl10] = React.useState(null);
  const handleClick = (event) => {
    switch (event.currentTarget.getAttribute("aria-controls")) {
      case "simple-menu-1":
        setAnchorEl1(event.currentTarget);
        break;
      case "simple-menu-2":
        setAnchorEl2(event.currentTarget);
        break;
      case "simple-menu-3":
        setAnchorEl3(event.currentTarget);
        break;
      case "simple-menu-4":
        setAnchorEl4(event.currentTarget);
        break;
      case "simple-menu-5":
        setAnchorEl5(event.currentTarget);
        break;
      case "simple-menu-6":
        setAnchorEl6(event.currentTarget);
        break;
      case "simple-menu-7":
        setAnchorEl7(event.currentTarget);
        break;
      case "simple-menu-8":
        setAnchorEl8(event.currentTarget);
        break;
      case "simple-menu-9":
        setAnchorEl9(event.currentTarget);
        break;
      case "simple-menu-10":
        setAnchorEl10(event.currentTarget);
        break;
      default:
    }
  };
  const handleClose = () => {
    setAnchorEl1(null);
    setAnchorEl2(null);
    setAnchorEl3(null);
    setAnchorEl4(null);
    setAnchorEl5(null);
    setAnchorEl6(null);
    setAnchorEl7(null);
    setAnchorEl8(null);
    setAnchorEl9(null);
    setAnchorEl10(null);
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
        <Card
          sx={{
            boxShadow: boxShadows.boxShadow + "!important",
            marginBottom: "0!important",
          }}
        >
          <CardHeader
            sx={{ backgroundColor: "initial" }}
            title="Card Tables"
            titleTypographyProps={{
              component: Box,
              marginBottom: "0!important",
              variant: "h3",
            }}
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
                    Project
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
                    Budget
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
                    Status
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
                    Users
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
                    Completion
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
                    <Box sx={{ alignItems: "center", display: "flex" }}>
                      <Box
                        component={Avatar}
                        sx={{ marginRight: "1rem" }}
                        alt="..."
                        src={require("assets/img/theme/bootstrap.jpg").default}
                      />
                      <Box sx={{ alignItems: "flex-start", display: "flex" }}>
                        <Box sx={{ fontSize: ".875rem" }} component="span">
                          Argon Design System
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    $2,500 USD
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <Box sx={{ paddingTop: ".35rem", paddingBottom: ".35rem" }}>
                      <Box
                        component="i"
                        sx={{
                          marginRight: "10px",
                          width: ".375rem",
                          height: ".375rem",
                          borderRadius: "50%",
                          display: "inline-block",
                          verticalAlign: "middle",
                          backgroundColor: theme.palette.warning.main,
                        }}
                      ></Box>
                      pending
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <AvatarGroup sx={{ justifyContent: "flex-end" }}>
                      <Tooltip title="Ryan Tompson" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-1-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Romina Hadid" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-2-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Alexander Smith" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-3-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Jessica Doe" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                    </AvatarGroup>
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
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                    align="right"
                  >
                    <Box
                      aria-controls="simple-menu-1"
                      aria-haspopup="true"
                      onClick={handleClick}
                      size="small"
                      component={Button}
                      sx={{
                        width: "2rem!important",
                        height: "2rem!important",
                        minWidth: "2rem!important",
                        minHeight: "2rem!important",
                      }}
                    >
                      <Box
                        component={MoreVert}
                        sx={{
                          width: "1.25rem!important",
                          height: "1.25rem!important",
                          position: "relative",
                          top: "2px",
                          color: theme.palette.gray[500],
                        }}
                      />
                    </Box>
                    <Menu
                      id="simple-menu-1"
                      anchorEl={anchorEl1}
                      keepMounted
                      open={Boolean(anchorEl1)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Action</MenuItem>
                      <MenuItem onClick={handleClose}>Another action</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Something else here
                      </MenuItem>
                    </Menu>
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
                    <Box sx={{ alignItems: "center", display: "flex" }}>
                      <Box
                        component={Avatar}
                        sx={{ marginRight: "1rem" }}
                        alt="..."
                        src={require("assets/img/theme/angular.jpg").default}
                      />
                      <Box sx={{ alignItems: "flex-start", display: "flex" }}>
                        <Box sx={{ fontSize: ".875rem" }} component="span">
                          Angular Now UI Kit PRO
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    $1,800 USD
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <Box sx={{ paddingTop: ".35rem", paddingBottom: ".35rem" }}>
                      <Box
                        component="i"
                        sx={{
                          marginRight: "10px",
                          width: ".375rem",
                          height: ".375rem",
                          borderRadius: "50%",
                          display: "inline-block",
                          verticalAlign: "middle",
                          backgroundColor: theme.palette.success.main,
                        }}
                      ></Box>
                      completed
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <AvatarGroup sx={{ justifyContent: "flex-end" }}>
                      <Tooltip title="Ryan Tompson" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-1-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Romina Hadid" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-2-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Alexander Smith" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-3-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Jessica Doe" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                    </AvatarGroup>
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
                        100%
                      </Box>
                      <Box sx={{ width: "100%" }}>
                        <LinearProgress
                          variant="determinate"
                          value={100}
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
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                    align="right"
                  >
                    <Box
                      aria-controls="simple-menu-2"
                      aria-haspopup="true"
                      onClick={handleClick}
                      size="small"
                      component={Button}
                      sx={{
                        width: "2rem!important",
                        height: "2rem!important",
                        minWidth: "2rem!important",
                        minHeight: "2rem!important",
                      }}
                    >
                      <Box
                        component={MoreVert}
                        sx={{
                          width: "1.25rem!important",
                          height: "1.25rem!important",
                          position: "relative",
                          top: "2px",
                          color: theme.palette.gray[500],
                        }}
                      />
                    </Box>
                    <Menu
                      id="simple-menu-2"
                      anchorEl={anchorEl2}
                      keepMounted
                      open={Boolean(anchorEl2)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Action</MenuItem>
                      <MenuItem onClick={handleClose}>Another action</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Something else here
                      </MenuItem>
                    </Menu>
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
                    <Box sx={{ alignItems: "center", display: "flex" }}>
                      <Box
                        component={Avatar}
                        sx={{ marginRight: "1rem" }}
                        alt="..."
                        src={require("assets/img/theme/sketch.jpg").default}
                      />
                      <Box sx={{ alignItems: "flex-start", display: "flex" }}>
                        <Box sx={{ fontSize: ".875rem" }} component="span">
                          Black Dashboard
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    $3,150 USD
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <Box sx={{ paddingTop: ".35rem", paddingBottom: ".35rem" }}>
                      <Box
                        component="i"
                        sx={{
                          marginRight: "10px",
                          width: ".375rem",
                          height: ".375rem",
                          borderRadius: "50%",
                          display: "inline-block",
                          verticalAlign: "middle",
                          backgroundColor: theme.palette.error.main,
                        }}
                      ></Box>
                      delayed
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <AvatarGroup sx={{ justifyContent: "flex-end" }}>
                      <Tooltip title="Ryan Tompson" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-1-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Romina Hadid" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-2-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Alexander Smith" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-3-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Jessica Doe" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                    </AvatarGroup>
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
                        72%
                      </Box>
                      <Box sx={{ width: "100%" }}>
                        <LinearProgress
                          variant="determinate"
                          value={72}
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
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                    align="right"
                  >
                    <Box
                      aria-controls="simple-menu-3"
                      aria-haspopup="true"
                      onClick={handleClick}
                      size="small"
                      component={Button}
                      sx={{
                        width: "2rem!important",
                        height: "2rem!important",
                        minWidth: "2rem!important",
                        minHeight: "2rem!important",
                      }}
                    >
                      <Box
                        component={MoreVert}
                        sx={{
                          width: "1.25rem!important",
                          height: "1.25rem!important",
                          position: "relative",
                          top: "2px",
                          color: theme.palette.gray[500],
                        }}
                      />
                    </Box>
                    <Menu
                      id="simple-menu-3"
                      anchorEl={anchorEl3}
                      keepMounted
                      open={Boolean(anchorEl3)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Action</MenuItem>
                      <MenuItem onClick={handleClose}>Another action</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Something else here
                      </MenuItem>
                    </Menu>
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
                    <Box sx={{ alignItems: "center", display: "flex" }}>
                      <Box
                        component={Avatar}
                        sx={{ marginRight: "1rem" }}
                        alt="..."
                        src={require("assets/img/theme/react.jpg").default}
                      />
                      <Box sx={{ alignItems: "flex-start", display: "flex" }}>
                        <Box sx={{ fontSize: ".875rem" }} component="span">
                          React Material Dashboard
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    $4,400 USD
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <Box sx={{ paddingTop: ".35rem", paddingBottom: ".35rem" }}>
                      <Box
                        component="i"
                        sx={{
                          marginRight: "10px",
                          width: ".375rem",
                          height: ".375rem",
                          borderRadius: "50%",
                          display: "inline-block",
                          verticalAlign: "middle",
                          backgroundColor: theme.palette.info.main,
                        }}
                      ></Box>
                      on schedule
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <AvatarGroup sx={{ justifyContent: "flex-end" }}>
                      <Tooltip title="Ryan Tompson" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-1-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Romina Hadid" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-2-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Alexander Smith" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-3-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Jessica Doe" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                    </AvatarGroup>
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
                        90%
                      </Box>
                      <Box sx={{ width: "100%" }}>
                        <LinearProgress
                          variant="determinate"
                          value={90}
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
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                    align="right"
                  >
                    <Box
                      aria-controls="simple-menu-4"
                      aria-haspopup="true"
                      onClick={handleClick}
                      size="small"
                      component={Button}
                      sx={{
                        width: "2rem!important",
                        height: "2rem!important",
                        minWidth: "2rem!important",
                        minHeight: "2rem!important",
                      }}
                    >
                      <Box
                        component={MoreVert}
                        sx={{
                          width: "1.25rem!important",
                          height: "1.25rem!important",
                          position: "relative",
                          top: "2px",
                          color: theme.palette.gray[500],
                        }}
                      />
                    </Box>
                    <Menu
                      id="simple-menu-4"
                      anchorEl={anchorEl4}
                      keepMounted
                      open={Boolean(anchorEl4)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Action</MenuItem>
                      <MenuItem onClick={handleClose}>Another action</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Something else here
                      </MenuItem>
                    </Menu>
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
                    <Box sx={{ alignItems: "center", display: "flex" }}>
                      <Box
                        component={Avatar}
                        sx={{ marginRight: "1rem" }}
                        alt="..."
                        src={require("assets/img/theme/vue.jpg").default}
                      />
                      <Box sx={{ alignItems: "flex-start", display: "flex" }}>
                        <Box sx={{ fontSize: ".875rem" }} component="span">
                          Vue Paper UI Kit PRO
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    $2,200 USD
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <Box sx={{ paddingTop: ".35rem", paddingBottom: ".35rem" }}>
                      <Box
                        component="i"
                        sx={{
                          marginRight: "10px",
                          width: ".375rem",
                          height: ".375rem",
                          borderRadius: "50%",
                          display: "inline-block",
                          verticalAlign: "middle",
                          backgroundColor: theme.palette.success.main,
                        }}
                      ></Box>
                      completed
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <AvatarGroup sx={{ justifyContent: "flex-end" }}>
                      <Tooltip title="Ryan Tompson" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-1-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Romina Hadid" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-2-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Alexander Smith" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-3-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Jessica Doe" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                    </AvatarGroup>
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
                        100%
                      </Box>
                      <Box sx={{ width: "100%" }}>
                        <LinearProgress
                          variant="determinate"
                          value={100}
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
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                    align="right"
                  >
                    <Box
                      aria-controls="simple-menu-5"
                      aria-haspopup="true"
                      onClick={handleClick}
                      size="small"
                      component={Button}
                      sx={{
                        width: "2rem!important",
                        height: "2rem!important",
                        minWidth: "2rem!important",
                        minHeight: "2rem!important",
                      }}
                    >
                      <Box
                        component={MoreVert}
                        sx={{
                          width: "1.25rem!important",
                          height: "1.25rem!important",
                          position: "relative",
                          top: "2px",
                          color: theme.palette.gray[500],
                        }}
                      />
                    </Box>
                    <Menu
                      id="simple-menu-5"
                      anchorEl={anchorEl5}
                      keepMounted
                      open={Boolean(anchorEl5)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Action</MenuItem>
                      <MenuItem onClick={handleClose}>Another action</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Something else here
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Box>
          </TableContainer>
          <Box
            component={CardActions}
            sx={{
              justifyContent: "flex-end",
              paddingBottom: "1.5rem!important",
              paddingTop: "1.5rem!important",
              borderTop: "0!important",
            }}
          >
            <Pagination count={3} color="primary" variant="outlined" />
          </Box>
        </Card>
        <Box
          component={Card}
          sx={{
            marginTop: "3rem",
            boxShadow: boxShadows.boxShadow + "!important",
            backgroundColor: theme.palette.dark.main,
            marginBottom: "0!important",
            "& *": {
              color: theme.palette.white.main,
            },
            "& .MuiTableCell-root, & .MuiTable-root": {
              color: theme.palette.white.main,
              borderColor: theme.palette.dark.tableBorder,
            },
            "& .MuiTableHead-root .MuiTableCell-head": {
              color: theme.palette.dark.tableHeadColor,
              backgroundColor: theme.palette.dark.tableHeadBgColor,
            },
          }}
        >
          <CardHeader
            sx={{ backgroundColor: "initial" }}
            title="Card Tables"
            titleTypographyProps={{
              component: Box,
              marginBottom: "0!important",
              variant: "h3",
            }}
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
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                      backgroundColor: theme.palette.gray[100],
                      color: theme.palette.gray[600],
                    }}
                  >
                    Project
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
                    Budget
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
                    Status
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
                    Users
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
                    Completion
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
                    <Box sx={{ alignItems: "center", display: "flex" }}>
                      <Box
                        component={Avatar}
                        sx={{ marginRight: "1rem" }}
                        alt="..."
                        src={require("assets/img/theme/bootstrap.jpg").default}
                      />
                      <Box sx={{ alignItems: "flex-start", display: "flex" }}>
                        <Box sx={{ fontSize: ".875rem" }} component="span">
                          Argon Design System
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    $2,500 USD
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <Box sx={{ paddingTop: ".35rem", paddingBottom: ".35rem" }}>
                      <Box
                        component="i"
                        sx={{
                          marginRight: "10px",
                          width: ".375rem",
                          height: ".375rem",
                          borderRadius: "50%",
                          display: "inline-block",
                          verticalAlign: "middle",
                          backgroundColor: theme.palette.warning.main,
                        }}
                      ></Box>
                      pending
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <AvatarGroup sx={{ justifyContent: "flex-end" }}>
                      <Tooltip title="Ryan Tompson" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-1-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Romina Hadid" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-2-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Alexander Smith" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-3-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Jessica Doe" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                    </AvatarGroup>
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
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                    align="right"
                  >
                    <Box
                      aria-controls="simple-menu-6"
                      aria-haspopup="true"
                      onClick={handleClick}
                      size="small"
                      component={Button}
                      sx={{
                        width: "2rem!important",
                        height: "2rem!important",
                        minWidth: "2rem!important",
                        minHeight: "2rem!important",
                      }}
                    >
                      <Box
                        component={MoreVert}
                        sx={{
                          width: "1.25rem!important",
                          height: "1.25rem!important",
                          position: "relative",
                          top: "2px",
                          color: theme.palette.gray[500],
                        }}
                      />
                    </Box>
                    <Menu
                      id="simple-menu-6"
                      anchorEl={anchorEl6}
                      keepMounted
                      open={Boolean(anchorEl6)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Action</MenuItem>
                      <MenuItem onClick={handleClose}>Another action</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Something else here
                      </MenuItem>
                    </Menu>
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
                    <Box sx={{ alignItems: "center", display: "flex" }}>
                      <Box
                        component={Avatar}
                        sx={{ marginRight: "1rem" }}
                        alt="..."
                        src={require("assets/img/theme/angular.jpg").default}
                      />
                      <Box sx={{ alignItems: "flex-start", display: "flex" }}>
                        <Box sx={{ fontSize: ".875rem" }} component="span">
                          Angular Now UI Kit PRO
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    $1,800 USD
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <Box sx={{ paddingTop: ".35rem", paddingBottom: ".35rem" }}>
                      <Box
                        component="i"
                        sx={{
                          marginRight: "10px",
                          width: ".375rem",
                          height: ".375rem",
                          borderRadius: "50%",
                          display: "inline-block",
                          verticalAlign: "middle",
                          backgroundColor: theme.palette.success.main,
                        }}
                      ></Box>
                      completed
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <AvatarGroup sx={{ justifyContent: "flex-end" }}>
                      <Tooltip title="Ryan Tompson" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-1-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Romina Hadid" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-2-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Alexander Smith" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-3-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Jessica Doe" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                    </AvatarGroup>
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
                        100%
                      </Box>
                      <Box sx={{ width: "100%" }}>
                        <LinearProgress
                          variant="determinate"
                          value={100}
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
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                    align="right"
                  >
                    <Box
                      aria-controls="simple-menu-7"
                      aria-haspopup="true"
                      onClick={handleClick}
                      size="small"
                      component={Button}
                      sx={{
                        width: "2rem!important",
                        height: "2rem!important",
                        minWidth: "2rem!important",
                        minHeight: "2rem!important",
                      }}
                    >
                      <Box
                        component={MoreVert}
                        sx={{
                          width: "1.25rem!important",
                          height: "1.25rem!important",
                          position: "relative",
                          top: "2px",
                          color: theme.palette.gray[500],
                        }}
                      />
                    </Box>
                    <Menu
                      id="simple-menu-7"
                      anchorEl={anchorEl7}
                      keepMounted
                      open={Boolean(anchorEl7)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Action</MenuItem>
                      <MenuItem onClick={handleClose}>Another action</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Something else here
                      </MenuItem>
                    </Menu>
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
                    <Box sx={{ alignItems: "center", display: "flex" }}>
                      <Box
                        component={Avatar}
                        sx={{ marginRight: "1rem" }}
                        alt="..."
                        src={require("assets/img/theme/sketch.jpg").default}
                      />
                      <Box sx={{ alignItems: "flex-start", display: "flex" }}>
                        <Box sx={{ fontSize: ".875rem" }} component="span">
                          Black Dashboard
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    $3,150 USD
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <Box sx={{ paddingTop: ".35rem", paddingBottom: ".35rem" }}>
                      <Box
                        component="i"
                        sx={{
                          marginRight: "10px",
                          width: ".375rem",
                          height: ".375rem",
                          borderRadius: "50%",
                          display: "inline-block",
                          verticalAlign: "middle",
                          backgroundColor: theme.palette.error.main,
                        }}
                      ></Box>
                      delayed
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <AvatarGroup sx={{ justifyContent: "flex-end" }}>
                      <Tooltip title="Ryan Tompson" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-1-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Romina Hadid" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-2-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Alexander Smith" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-3-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Jessica Doe" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                    </AvatarGroup>
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
                        72%
                      </Box>
                      <Box sx={{ width: "100%" }}>
                        <LinearProgress
                          variant="determinate"
                          value={72}
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
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                    align="right"
                  >
                    <Box
                      aria-controls="simple-menu-8"
                      aria-haspopup="true"
                      onClick={handleClick}
                      size="small"
                      component={Button}
                      sx={{
                        width: "2rem!important",
                        height: "2rem!important",
                        minWidth: "2rem!important",
                        minHeight: "2rem!important",
                      }}
                    >
                      <Box
                        component={MoreVert}
                        sx={{
                          width: "1.25rem!important",
                          height: "1.25rem!important",
                          position: "relative",
                          top: "2px",
                          color: theme.palette.gray[500],
                        }}
                      />
                    </Box>
                    <Menu
                      id="simple-menu-8"
                      anchorEl={anchorEl8}
                      keepMounted
                      open={Boolean(anchorEl8)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Action</MenuItem>
                      <MenuItem onClick={handleClose}>Another action</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Something else here
                      </MenuItem>
                    </Menu>
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
                    <Box sx={{ alignItems: "center", display: "flex" }}>
                      <Box
                        component={Avatar}
                        sx={{ marginRight: "1rem" }}
                        alt="..."
                        src={require("assets/img/theme/react.jpg").default}
                      />
                      <Box sx={{ alignItems: "flex-start", display: "flex" }}>
                        <Box sx={{ fontSize: ".875rem" }} component="span">
                          React Material Dashboard
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    $4,400 USD
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <Box sx={{ paddingTop: ".35rem", paddingBottom: ".35rem" }}>
                      <Box
                        component="i"
                        sx={{
                          marginRight: "10px",
                          width: ".375rem",
                          height: ".375rem",
                          borderRadius: "50%",
                          display: "inline-block",
                          verticalAlign: "middle",
                          backgroundColor: theme.palette.info.main,
                        }}
                      ></Box>
                      on schedule
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <AvatarGroup sx={{ justifyContent: "flex-end" }}>
                      <Tooltip title="Ryan Tompson" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-1-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Romina Hadid" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-2-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Alexander Smith" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-3-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Jessica Doe" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                    </AvatarGroup>
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
                        90%
                      </Box>
                      <Box sx={{ width: "100%" }}>
                        <LinearProgress
                          variant="determinate"
                          value={90}
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
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                    align="right"
                  >
                    <Box
                      aria-controls="simple-menu-9"
                      aria-haspopup="true"
                      onClick={handleClick}
                      size="small"
                      component={Button}
                      sx={{
                        width: "2rem!important",
                        height: "2rem!important",
                        minWidth: "2rem!important",
                        minHeight: "2rem!important",
                      }}
                    >
                      <Box
                        component={MoreVert}
                        sx={{
                          width: "1.25rem!important",
                          height: "1.25rem!important",
                          position: "relative",
                          top: "2px",
                          color: theme.palette.gray[500],
                        }}
                      />
                    </Box>
                    <Menu
                      id="simple-menu-9"
                      anchorEl={anchorEl9}
                      keepMounted
                      open={Boolean(anchorEl9)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Action</MenuItem>
                      <MenuItem onClick={handleClose}>Another action</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Something else here
                      </MenuItem>
                    </Menu>
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
                    <Box sx={{ alignItems: "center", display: "flex" }}>
                      <Box
                        component={Avatar}
                        sx={{ marginRight: "1rem" }}
                        alt="..."
                        src={require("assets/img/theme/vue.jpg").default}
                      />
                      <Box sx={{ alignItems: "flex-start", display: "flex" }}>
                        <Box sx={{ fontSize: ".875rem" }} component="span">
                          Vue Paper UI Kit PRO
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    $2,200 USD
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <Box sx={{ paddingTop: ".35rem", paddingBottom: ".35rem" }}>
                      <Box
                        component="i"
                        sx={{
                          marginRight: "10px",
                          width: ".375rem",
                          height: ".375rem",
                          borderRadius: "50%",
                          display: "inline-block",
                          verticalAlign: "middle",
                          backgroundColor: theme.palette.success.main,
                        }}
                      ></Box>
                      completed
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                  >
                    <AvatarGroup sx={{ justifyContent: "flex-end" }}>
                      <Tooltip title="Ryan Tompson" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-1-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Romina Hadid" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-2-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Alexander Smith" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-3-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                      <Tooltip title="Jessica Doe" placement="top">
                        <Avatar
                          sx={{
                            width: "36px",
                            height: "36px",
                            fontSize: ".875rem",
                            marginLeft: "-.75rem",
                            boxSizing: "border-box!important",
                            "&:hover": { zIndex: "5!important" },
                          }}
                          alt="..."
                          src={
                            require("assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </Tooltip>
                    </AvatarGroup>
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
                        100%
                      </Box>
                      <Box sx={{ width: "100%" }}>
                        <LinearProgress
                          variant="determinate"
                          value={100}
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
                  <TableCell
                    sx={{
                      verticalAlign: "middle",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      borderTop: "0",
                    }}
                    align="right"
                  >
                    <Box
                      aria-controls="simple-menu-10"
                      aria-haspopup="true"
                      onClick={handleClick}
                      size="small"
                      component={Button}
                      sx={{
                        width: "2rem!important",
                        height: "2rem!important",
                        minWidth: "2rem!important",
                        minHeight: "2rem!important",
                      }}
                    >
                      <Box
                        component={MoreVert}
                        sx={{
                          width: "1.25rem!important",
                          height: "1.25rem!important",
                          position: "relative",
                          top: "2px",
                          color: theme.palette.gray[500],
                        }}
                      />
                    </Box>
                    <Menu
                      id="simple-menu-10"
                      anchorEl={anchorEl10}
                      keepMounted
                      open={Boolean(anchorEl10)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Action</MenuItem>
                      <MenuItem onClick={handleClose}>Another action</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Something else here
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Box>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
};

export default Tables;
