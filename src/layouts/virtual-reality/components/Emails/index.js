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

// @mui material components
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function Emails() {
  return (
    <Card>
      <ArgonBox display="flex" justifyContent="space-between" p={3} lineHeight={1}>
        <ArgonTypography variant="body2" color="text">
          Emails (21)
        </ArgonTypography>
        <Tooltip title="Check your emails" placement="top">
          <ArgonBox component="a" href="#">
            <ArgonTypography variant="body2">Check</ArgonTypography>
          </ArgonBox>
        </Tooltip>
      </ArgonBox>
    </Card>
  );
}

export default Emails;
