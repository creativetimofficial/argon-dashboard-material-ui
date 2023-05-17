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
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

import { useArgonController } from "context";

function TodoList() {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox p={3}>
        <ArgonBox display="flex" lineHeight={1}>
          <ArgonBox mr={2}>
            <ArgonTypography variant="h6" fontWeight="medium">
              08:00
            </ArgonTypography>
          </ArgonBox>
          <ArgonBox>
            <ArgonTypography variant="h6" fontWeight="medium">
              Synk up with Mark
            </ArgonTypography>
            <ArgonTypography variant="button" fontWeight="regular" color="secondary">
              Hangouts
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
        <Divider />
        <ArgonBox display="flex" lineHeight={0}>
          <ArgonBox mr={2}>
            <ArgonTypography variant="h6" fontWeight="medium">
              09:30
            </ArgonTypography>
          </ArgonBox>
          <ArgonBox>
            <ArgonTypography variant="h6" fontWeight="medium">
              Gym
            </ArgonTypography>
            <ArgonTypography variant="button" fontWeight="regular" color="secondary">
              World Class
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
        <Divider />
        <ArgonBox display="flex" lineHeight={1}>
          <ArgonBox mr={2}>
            <ArgonTypography variant="h6" fontWeight="medium">
              11:00
            </ArgonTypography>
          </ArgonBox>
          <ArgonBox>
            <ArgonTypography variant="h6" fontWeight="medium">
              Design Review
            </ArgonTypography>
            <ArgonTypography variant="button" fontWeight="regular" color="secondary">
              Zoom
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      </ArgonBox>
      <ArgonBox bgColor={darkMode ? "transparent" : "grey-100"} mt="auto">
        <Tooltip title="Show More" placement="top" sx={{ cursor: "pointer" }}>
          <ArgonBox textAlign="center" py={0.5} color="info" lineHeight={0}>
            <Icon sx={{ fontWeight: "bold" }} color="inherit" fontSize="default">
              keyboard_arrow_down
            </Icon>
          </ArgonBox>
        </Tooltip>
      </ArgonBox>
    </Card>
  );
}

export default TodoList;
