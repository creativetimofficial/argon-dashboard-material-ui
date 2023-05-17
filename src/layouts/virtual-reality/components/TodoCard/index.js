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
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function TodoCard() {
  return (
    <Card>
      <ArgonBox bgColor="dark" variant="gradient">
        <ArgonBox p={3}>
          <ArgonBox display="flex" justifyContent="space-between">
            <ArgonTypography variant="h5" color="white">
              To Do
            </ArgonTypography>
            <ArgonBox textAlign="center" lineHeight={1}>
              <ArgonTypography variant="h1" color="white" fontWeight="bold">
                7
              </ArgonTypography>
              <ArgonTypography variant="button" color="white" fontWeight="regular">
                items
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
          <ArgonTypography variant="body2" color="white" fontWeight="regular">
            Shopping
          </ArgonTypography>
          <ArgonTypography variant="body2" color="white" fontWeight="regular">
            Meeting
          </ArgonTypography>
        </ArgonBox>
        <Tooltip title="Show More" placement="top" sx={{ cursor: "pointer" }}>
          <ArgonBox textAlign="center" color="white" py={0.5} lineHeight={0}>
            <Icon sx={{ fontWeight: "bold" }} color="inherit" fontSize="default">
              keyboard_arrow_down
            </Icon>
          </ArgonBox>
        </Tooltip>
      </ArgonBox>
    </Card>
  );
}

export default TodoCard;
