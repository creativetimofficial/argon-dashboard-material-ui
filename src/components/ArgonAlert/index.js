/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Fade from "@mui/material/Fade";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Custom styles for the ArgonAlert
import ArgonAlertRoot from "components/ArgonAlert/ArgonAlertRoot";
import ArgonAlertCloseIcon from "components/ArgonAlert/ArgonAlertCloseIcon";

function ArgonAlert({ color, dismissible, children, ...rest }) {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = () => setAlertStatus("fadeOut");

  // The base template for the alert
  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <ArgonAlertRoot ownerState={{ color }} {...rest}>
        <ArgonBox display="flex" alignItems="center" color="white">
          {children}
        </ArgonBox>
        {dismissible ? (
          <ArgonAlertCloseIcon onClick={mount ? handleAlertStatus : null}>
            &times;
          </ArgonAlertCloseIcon>
        ) : null}
      </ArgonAlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

// Setting default values for the props of ArgonAlert
ArgonAlert.defaultProps = {
  color: "info",
  dismissible: false,
};

// Typechecking props of the ArgonAlert
ArgonAlert.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  dismissible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default ArgonAlert;
