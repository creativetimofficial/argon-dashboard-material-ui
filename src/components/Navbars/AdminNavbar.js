import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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

import componentStyles from "assets/theme/components/admin-navbar.js";

const useStyles = makeStyles(componentStyles);

export default function AdminNavbar({ brandText }) {
  const classes = useStyles();
  return (
    <>
      <AppBar
        position="absolute"
        color="transparent"
        elevation={0}
        classes={{ root: classes.appBarRoot }}
      >
        <Toolbar disableGutters>
          <Container
            maxWidth={false}
            component={Box}
            classes={{ root: classes.containerRoot }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              marginTop="0.5rem"
            >
              <div>
                <Typography
                  className={classes.brandTitle}
                  variant="h4"
                  component="a"
                >
                  {brandText}
                </Typography>
              </div>
              <Box display="flex" alignItems="center" width="auto">
                <Box
                  display="flex"
                  alignItems="center"
                  width="auto"
                  marginRight="1rem"
                  classes={{
                    root: classes.searchBox,
                  }}
                >
                  <SearchIcon className={classes.searchIcon} />
                  <InputBase
                    placeholder="Search"
                    classes={{
                      input: classes.searchInput,
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
