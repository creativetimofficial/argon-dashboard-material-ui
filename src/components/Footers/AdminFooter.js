import React from "react";

// @material-ui/core components
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components

const Footer = () => {
  const theme = useTheme();
  return (
    <Box component="footer" sx={{ width: "100%", padding: "2.5rem 0" }}>
      <Grid
        container
        sx={{
          [theme.breakpoints.down("lg")]: {
            justifyContent: "center!important",
          },
        }}
      >
        <Box
          item
          xs={12}
          xl={6}
          component={Grid}
          sx={{
            display: "flex",
            alignItems: "center",
            [theme.breakpoints.down("lg")]: {
              justifyContent: "center!important",
            },
          }}
        >
          <Box
            sx={{
              color: theme.palette.gray[600],
              fontSize: ".875rem",
              textAlign: "center",
              [theme.breakpoints.up("md")]: {
                textAlign: "left",
              },
            }}
          >
            © {new Date().getFullYear()}{" "}
            <Box
              component="a"
              sx={{
                fontWeight: "600",
                marginLeft: ".25rem",
                color: theme.palette.primary.main,
                backgroundColor: "initial",
                textDecoration: "none",
                "&:hover": {
                  color: theme.palette.primary.dark,
                },
              }}
              href="https://www.creative-tim.com?ref=adr-admin-footer"
              rel="noopener noreferrer"
              target="_blank"
            >
              Creative Tim
            </Box>
          </Box>
        </Box>

        <Grid
          item
          xl={6}
          component={Box}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Box
            component={List}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column!important",
              },
            }}
          >
            <ListItem
              component="a"
              href="https://www.creative-tim.com?ref=adr-admin-footer"
              rel="noopener noreferrer"
              target="_blank"
              sx={{
                width: "auto",
                color: theme.palette.gray[600],
                fontSize: ".875rem",
              }}
            >
              Creative Tim
            </ListItem>

            <ListItem
              component="a"
              href="https://www.creative-tim.com/presentation?ref=adr-admin-footer"
              rel="noopener noreferrer"
              target="_blank"
              sx={{
                width: "auto",
                color: theme.palette.gray[600],
                fontSize: ".875rem",
              }}
            >
              About Us
            </ListItem>

            <ListItem
              component="a"
              href="http://blog.creative-tim.com?ref=adr-admin-footer"
              rel="noopener noreferrer"
              target="_blank"
              sx={{
                width: "auto",
                color: theme.palette.gray[600],
                fontSize: ".875rem",
              }}
            >
              Blog
            </ListItem>

            <ListItem
              component="a"
              href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-admin-footer"
              rel="noopener noreferrer"
              target="_blank"
              sx={{
                width: "auto",
                color: theme.palette.gray[600],
                fontSize: ".875rem",
              }}
            >
              MIT License
            </ListItem>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
