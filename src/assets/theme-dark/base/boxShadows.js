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

/**
 * The base box-shadow styles for the Argon Dashboard 2 MUI.
 * You can add new box-shadow using this file.
 * You can customized the box-shadow for the entire Argon Dashboard 2 MUI using thie file.
 */

// Argon Dashboard 2 MUI Base Styles
import colors from "assets/theme-dark/base/colors";

// Argon Dashboard 2 MUI Helper Functions
import boxShadow from "assets/theme-dark/functions/boxShadow";

const { black, white, info, tabs, dark, text } = colors;

const boxShadows = {
  xs: boxShadow([0, 2], [9, -5], black.main, 0.15),
  sm: boxShadow([0, 5], [10, 0], black.main, 0.12),
  md: `${boxShadow([0, 4], [6, -1], black.main, 0.12)}, ${boxShadow(
    [0, 2],
    [4, -1],
    black.main,
    0.07
  )}`,
  lg: `${boxShadow([0, 8], [26, -4], black.main, 0.15)}, ${boxShadow(
    [0, 8],
    [9, -5],
    black.main,
    0.06
  )}`,
  xl: boxShadow([0, 23], [45, -11], black.main, 0.25),
  xxl: boxShadow([0, 20], [27, 0], black.main, 0.05),
  inset: boxShadow([0, 1], [2, 0], black.main, 0.075, "inset"),
  navbarBoxShadow: `${boxShadow([0, 0], [1, 1], black.main, 0.9, "inset")}, ${boxShadow(
    [0, 20],
    [27, 0],
    black.main,
    0.05
  )}`,
  cardBoxShadow: `${boxShadow([0, 0], [16, 0], black.main, 0.075)}`,
  buttonBoxShadow: {
    main: `${boxShadow([0, 4], [6, 0], dark.main, 0.1)}, ${boxShadow(
      [0, 1],
      [3, 0],
      black.main,
      0.08
    )}`,
    stateOf: `${boxShadow([0, 7], [14, 0], dark.main, 0.1)}, ${boxShadow(
      [0, 3],
      [6, 0],
      black.main,
      0.08
    )}`,
    stateOfNotHover: boxShadow([0, 0], [0, 3.2], info.main, 0.5),
  },
  inputBoxShadow: `${boxShadow([0, 3], [9, 0], info.main, 0)}, ${boxShadow(
    [3, 4],
    [8, 0],
    info.main,
    0.1
  )}`,
  sliderBoxShadow: {
    thumb: boxShadow([0, 1], [13, 0], black.main, 0.2),
  },
  tabsBoxShadow: {
    indicator: boxShadow([0, 1], [5, 1], black.main, 0.5),
  },
};

export default boxShadows;
