import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

export default function TemporaryDrawer({ routes }) {
  // creates the links that appear in the left menu / Sidebar
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      return (
        <ListItem key={key}>
          <Link to={prop.layout + prop.path}>
            <ListItemIcon>
              <i className={prop.icon} />
            </ListItemIcon>
            <ListItemText primary={prop.name} />
          </Link>
        </ListItem>
      );
    });
  };

  return (
    <>
      <Drawer variant="permanent" anchor="left" open>
        <List>{createLinks(routes)}</List>
      </Drawer>
    </>
  );
}
