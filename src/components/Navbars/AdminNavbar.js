import React from "react";
// @material-ui/core components
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import InputBase from "@material-ui/core/InputBase";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
import SearchIcon from "@material-ui/icons/Search";

// core components
import NavbarDropdown from "components/Dropdowns/NavbarDropdown.js";
import boxShadows from "assets/theme/box-shadow.js";

export default function AdminNavbar({ brandText }) {
  const theme = useTheme();
  return (
    <>
      <AppBar
        position="absolute"
        color="transparent"
        elevation={0}
        sx={{
          [theme.breakpoints.down("sm")]: {
            display: "none",
          },
        }}
      >
        <Toolbar disableGutters>
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                marginTop: "0.5rem",
              }}
            >
              <div>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    margin: "0",
                    color: theme.palette.white.main,
                    [theme.breakpoints.down("md")]: {
                      display: "none",
                    },
                  }}
                  variant="h4"
                  component="a"
                >
                  {brandText}
                </Typography>
              </div>
              <Box
                sx={{ display: "flex", alignItems: "center", width: "auto" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "auto",
                    marginRight: "1rem",
                    borderColor: theme.palette.adminNavbarSearch.main + "!important",
                    borderRadius: "2rem",
                    border: "2px solid",
                    backgroundColor: "initial",
                    boxShadow: boxShadows.inputBoxShadow,
                    transition: "box-shadow .15s ease",
                  }}
                >
                  <SearchIcon
                    sx={{
                      color: theme.palette.adminNavbarSearch.main,
                      marginRight: "0.5rem",
                      marginLeft: "1rem",
                    }}
                  />
                  <InputBase
                    placeholder="Search"
                    sx={{
                      "& input": {
                        color: theme.palette.adminNavbarSearch.main,
                        width: "270px",
                        backgroundColor: "initial",
                        border: 0,
                        boxShadow: "none",
                        padding: "0",
                      },
                    }}
                  />
                </Box>
                <NavbarDropdown />
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
