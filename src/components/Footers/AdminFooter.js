import React from "react";

// material-ui components
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemLink from '@material-ui/core/ListItemText';

const Footer = () => {
  return (
    <footer className="footer">
      <Grid container spacing={3}>
        <Grid item xl={6}>
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href="https://www.creative-tim.com?ref=adr-admin-footer"
              rel="noopener noreferrer"
              target="_blank"
            >
              Creative Tim
            </a>
          </div>
        </Grid>

        <Grid item xl={6}>
          <List>
            <ListItem>
              <ListItemLink
                href="https://www.creative-tim.com?ref=adr-admin-footer"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ListItemText>Creative Tim</ListItemText>
              </ListItemLink>
            </ListItem>

            <ListItem>
              <ListItemLink
                href="https://www.creative-tim.com/presentation?ref=adr-admin-footer"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ListItemText>About Us</ListItemText>
              </ListItemLink>
            </ListItem>

            <ListItem>
              <ListItemLink
                href="http://blog.creative-tim.com?ref=adr-admin-footer"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ListItemText>Blog</ListItemText>
              </ListItemLink>
            </ListItem>

            <ListItem>
              <ListItemLink
                href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-admin-footer"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ListItemText>MIT License</ListItemText>
              </ListItemLink>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
