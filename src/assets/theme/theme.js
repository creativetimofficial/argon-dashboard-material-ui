// @material-ui/core components
import { createMuiTheme } from "@material-ui/core/styles";
// core components
import boxShadows from "assets/theme/box-shadow.js";
import hexToRgb from "assets/theme/hex-to-rgb.js";
import themeColors from "assets/theme/colors.js";

// these are the default styles that go on all headings (h1,h2,h3,h4,h5,h6)
// the difference only consists in the font size and text transform
const defaultHeaderStyles = {
  marginBottom: ".5rem",
  fontFamily: "inherit",
  fontWeight: 600,
  lineHeight: 1.5,
  color: themeColors.gray[800],
};

// A custom theme for this app
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  palette: {
    ...themeColors,
    buttonLightLabel: {
      main: "rgba(" + hexToRgb(themeColors.white.main) + ", 0.95)",
    },
    sidebarLinks: {
      main: "rgba(" + hexToRgb(themeColors.black.main) + ", 0.5)",
      dark: "rgba(" + hexToRgb(themeColors.black.main) + ", 0.9)",
    },
    adminNavbarSearch: {
      main: "rgba(" + hexToRgb(themeColors.white.main) + ", 0.6)",
    },
    authNavbarLink: {
      main: "rgba(" + hexToRgb(themeColors.white.main) + ", 0.65)",
      dark: "rgba(" + hexToRgb(themeColors.white.main) + ", 0.95)",
    },
  },
  typography: {
    fontFamily: "Open Sans,sans-serif",
    h1: {
      fontSize: "1.625rem",
      ...defaultHeaderStyles,
    },
    h2: {
      fontSize: "1.25rem",
      ...defaultHeaderStyles,
    },
    h3: {
      fontSize: "1.0625rem",
      ...defaultHeaderStyles,
    },
    h4: {
      fontSize: ".9375rem",
      ...defaultHeaderStyles,
    },
    h5: {
      fontSize: ".8125rem",
      ...defaultHeaderStyles,
    },
    h6: {
      fontSize: ".625rem",
      ...defaultHeaderStyles,
    },
  },
  overrides: {
    MuiDrawer: {
      paper: {
        width: "250px",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      },
      paperAnchorDockedLeft: {
        borderRight: "none",
        boxShadow: boxShadows.boxShadow + "!important",
      },
      docked: {
        width: "250px",
      },
    },
    MuiListItem: {
      root: {
        display: "block",
        paddingTop: ".25rem",
        paddingBottom: ".25rem",
        color: themeColors.gray[700],
      },
      gutters: {
        paddingLeft: ".75rem",
        paddingRight: ".75rem",
      },
    },
    MuiMenu: {
      paper: {
        minWidth: "12rem",
        fontSize: "1rem",
        color: themeColors.gray[700],
        textAlign: "left",
        listStyle: "none",
        backgroundColor: themeColors.white.main,
        backgroundClip: "padding-box",
        border: "0 solid rgba(" + hexToRgb(themeColors.black.main) + ",.15)",
        borderRadius: ".4375rem",
        boxShadow: boxShadows.menuBoxShadow,
        padding: ".5rem 0",
      },
    },
    MuiMenuItem: {
      root: {
        padding: ".5rem 1rem",
        fontSize: ".875rem",
        display: "block",
        width: "100%",
        clear: "both",
        fontWeight: 400,
        color: themeColors.gray[900],
        textAlign: "inherit",
        whiteSpace: "nowrap",
        backgroundColor: "initial",
        border: 0,
        "& i": {
          marginRight: "1rem",
          fontSize: "1rem",
          verticalAlign: "-17%",
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: themeColors.gray[700],
        fontSize: ".875rem",
        fontWeight: "600",
        display: "inline-block",
        marginBottom: ".5rem",
      },
    },
    MuiFormGroup: {
      root: {
        marginBottom: "1.5rem",
      },
    },
    MuiInputBase: {
      input: {
        display: "block",
        width: "100%",
        height: "calc(1.5em + 1.25rem + 2px)",
        padding: ".625rem .75rem",
        fontWeight: 400,
        lineHeight: 1.5,
        color: themeColors.gray[600],
        backgroundColor: themeColors.white.main,
        backgroundClip: "padding-box",
        border: "1px solid #cad1d7",
        borderRadius: ".375rem",
        boxShadow: "none",
        transition: "all .2s cubic-bezier(.68,-.55,.265,1.55)",
        fontSize: ".875rem",
        boxSizing: "border-box",
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: "translate(14px, 15px) scale(1)",
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: ".625rem .75rem",
        borderTop: "0",
        borderBottom: "0",
        borderLeft: "0",
        "&:not(:last-child)": {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          paddingRight: 0,
        },
      },
      root: {
        paddingRight: "0",
      },
    },
    MuiFilledInput: {
      underline: {
        "&:before": {
          display: "none",
        },
        "&:after": {
          borderRadius: ".375rem",
          height: "100%",
          border: "2px solid " + themeColors.primary.main,
        },
      },
      multiline: {
        padding: ".625rem .75rem",
      },
      root: {
        boxShadow: boxShadows.inputBoxShadow,
        border: 0,
        transition: "box-shadow .15s ease",
        borderRadius: ".375rem",
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100%",
        backgroundColor: themeColors.white.main + "!important",
      },
      input: {
        border: 0,
        boxShadow: "none",
        position: "relative",
        flex: "1 1 auto",
        width: "1%",
        minWidth: 0,
        marginBottom: 0,
        padding: ".625rem .75rem",
        "&:not(:first-child)": {
          borderLeft: 0,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        },
      },
      inputAdornedStart: {
        paddingLeft: ".75rem",
      },
      inputAdornedEnd: {
        paddingRight: ".75rem",
      },
    },
    MuiInputAdornment: {
      root: {
        transition: "all .2s cubic-bezier(.68,-.55,.265,1.55)",
        display: "flex",
        alignItems: "center",
        padding: ".625rem 0",
        marginBottom: "0",
        fontSize: ".875rem",
        fontWeight: "400",
        lineHeight: "1.5",
        color: themeColors.gray[500],
        textAlign: "center",
        whiteSpace: "nowrap",
        backgroundColor: themeColors.white.main,
        border: "0",
        marginTop: "0!important",
        height: "calc(1.5em + 1.25rem + 2px)",
      },
      positionEnd: {
        paddingLeft: 0,
      },
      positionStart: {
        paddingLeft: 0,
      },
      filled: {
        display: "flex",
        "&$positionStart": {
          marginRight: "-1px",
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
          border: "0",
          boxShadow: "none",
        },
      },
    },
    MuiCheckbox: {
      root: {
        "& .MuiSvgIcon-root": {
          width: "1.5rem",
          height: "1.5rem",
        },
      },
    },
    MuiRadio: {
      root: {
        "& .MuiSvgIcon-root": {
          width: "1.5rem",
          height: "1.5rem",
        },
      },
    },
    MuiSwitch: {
      root: {
        width: "3.25rem",
        height: "1.5rem",
        padding: 0,
      },
      switchBase: {
        padding: "3px",
        "&$checked": {
          transform: "translateX(28px)",
          "& + $track": {
            backgroundColor: themeColors.transparent.main + "!important",
            borderColor: themeColors.primary.main,
            opacity: 1,
          },
          "& $thumb": {
            backgroundColor: themeColors.primary.main,
          },
        },
      },
      checked: {},
      thumb: {
        width: "18px",
        height: "18px",
        boxShadow: "none",
        backgroundColor: themeColors.gray[200],
      },
      track: {
        backgroundColor: themeColors.transparent.main,
        border: "1px solid " + themeColors.gray[400],
        opacity: 1,
        borderRadius: "34px",
      },
    },
    MuiCard: {
      root: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        wordWrap: "break-word",
        backgroundColor: themeColors.white.main,
        backgroundClip: "initial",
        border: "0",
        borderRadius: ".375rem",
        overflow: "unset",
      },
    },
    MuiCardHeader: {
      root: {
        padding: "1.25rem 1.5rem",
        marginBottom: "0",
        backgroundColor: themeColors.white.main,
        borderBottom:
          "1px solid rgba(" + hexToRgb(themeColors.black.main) + ",.05)",
        "&:first-child": {
          borderRadius: "calc(.375rem - 1px) calc(.375rem - 1px) 0 0",
        },
      },
    },
    MuiCardContent: {
      root: {
        flex: "1 1 auto",
        minHeight: "1px",
        padding: "1.5rem",
      },
    },
    MuiCardActions: {
      root: {
        "&:last-child": {
          borderRadius: "0 0 calc(.375rem - 1px) calc(.375rem - 1px)",
          padding: "1.25rem 1.5rem",
          backgroundColor: themeColors.white.main,
          borderTop:
            "1px solid rgba(" + hexToRgb(themeColors.black.main) + ",.05)",
        },
      },
    },
    MuiButton: {
      root: {
        position: "relative",
        textTransform: "none",
        transition: "all .15s ease",
        letterSpacing: ".025em",
        fontSize: ".875rem",
        padding: ".625rem 1.25rem",
        willChange: "transform",
        border: "1px solid transparent",
        lineHeight: "1.5",
        borderRadius: ".375rem",
        userSelect: "none",
        display: "inline-block",
        fontWeight: "600",
        textAlign: "center",
        verticalAlign: "middle",
        boxShadow: "0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)",
        "&:hover": {
          boxShadow: boxShadows.buttonBoxShadow,
          transform: "translateY(-1px)",
        },
      },
      text: {
        padding: ".625rem 1.25rem",
      },
      contained: {
        color: themeColors.white.main,
        borderColor: themeColors.dark.main,
        backgroundColor: themeColors.dark.main,
        "&:hover": {
          boxShadow: boxShadows.buttonBoxShadow,
          backgroundColor: themeColors.dark.dark,
        },
      },
      containedSizeSmall: {
        fontSize: ".75rem",
        padding: ".25rem .5rem",
        lineHeight: "1.5",
        borderRadius: ".375rem",
      },
      containedSizeLarge: {
        fontSize: ".875rem",
        lineHeight: 1.5,
        padding: ".875rem 1rem",
        borderRadius: ".4375rem",
      },
      containedPrimary: {
        borderColor: themeColors.primary.main,
      },
      containedSecondary: {
        borderColor: themeColors.secondary.main,
        "&:hover": {
          borderColor: themeColors.gray[200],
          backgroundColor: themeColors.gray[200],
        },
      },
      outlined: {
        padding: ".625rem 1.25rem",
        color: themeColors.dark.main,
        borderColor: themeColors.dark.main,
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
          backgroundColor: themeColors.dark.main,
          color: themeColors.white.main,
        },
      },
      outlinedSizeSmall: {
        fontSize: ".75rem",
        padding: ".25rem .5rem",
        lineHeight: "1.5",
        borderRadius: ".375rem",
      },
      outlinedSizeLarge: {
        fontSize: ".875rem",
        lineHeight: 1.5,
        padding: ".875rem 1rem",
        borderRadius: ".4375rem",
      },
      outlinedPrimary: {
        color: themeColors.primary.main,
        borderColor: themeColors.primary.main,
        "&:hover": {
          backgroundColor: themeColors.primary.main,
        },
      },
      outlinedSecondary: {
        color: themeColors.secondary.btnOutline,
        borderColor: themeColors.secondary.main,
        backgroundColor: themeColors.transparent.main,
        "&:hover": {
          borderColor: themeColors.secondary.main,
          backgroundColor: themeColors.secondary.main,
          color: themeColors.gray[900],
        },
      },
    },
    MuiContainer: {
      root: {
        width: "100%",
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
      },
      maxWidthXs: {
        "@media (min-width: 576px)": {
          maxWidth: "540px",
        },
      },
      maxWidthSm: {
        "@media (min-width: 576px)": {
          maxWidth: "540px",
        },
      },
      maxWidthMd: {
        "@media (min-width: 768px)": {
          maxWidth: "720px",
        },
      },
      maxWidthLg: {
        "@media (min-width: 992px)": {
          maxWidth: "960px",
        },
      },
      maxWidthXl: {
        "@media (min-width: 1200px)": {
          maxWidth: "1140px",
        },
      },
    },
    MuiGrid: {
      item: {
        paddingRight: "15px",
        paddingLeft: "15px",
      },
      container: {
        marginRight: "-15px",
        marginLeft: "-15px",
        width: "unset",
      },
    },
    MuiSvgIcon: {
      root: {
        width: "14px",
        height: "14px",
      },
    },
    MuiTable: {
      root: {
        width: "100%",
        marginBottom: "1rem",
        color: themeColors.gray[700],
        backgroundColor: themeColors.transparent.main,
        borderCollapse: "collapse",
      },
    },
    MuiTableCell: {
      root: {
        fontSize: ".8125rem",
        whiteSpace: "nowrap",
        padding: "1rem",
        verticalAlign: "top",
        borderTop: "1px solid " + themeColors.gray[200],
        borderBottom: "1px solid " + themeColors.gray[200],
      },
      head: {
        padding: "1rem",
        borderTop: "1px solid " + themeColors.gray[200],
        fontWeight: "600",
        whiteSpace: "nowrap",
        verticalAlign: "bottom",
        paddingTop: ".75rem",
        paddingBottom: ".75rem",
        fontSize: ".65rem",
        textTransform: "uppercase",
        letterSpacing: "1px",
        borderBottom: "1px solid " + themeColors.gray[200],
      },
    },
    MuiLinearProgress: {
      root: {
        height: "8px",
        marginBottom: "1rem",
        overflow: "hidden",
        borderRadius: ".25rem",
        backgroundColor: themeColors.gray[200] + "!important",
        boxShadow: boxShadows.linearProgressBoxShadow,
        display: "flex",
        lineHeight: "0",
        fontSize: ".75rem",
      },
      bar: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        color: themeColors.white.main,
        textAlign: "center",
        whiteSpace: "nowrap",
        transition: "width .6s ease",
        boxShadow: "none",
        borderRadius: 0,
        height: "auto",
      },
    },
    MuiAvatar: {
      root: {
        color: themeColors.white.main,
        backgroundColor: themeColors.gray[500],
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
        borderRadius: "50%",
        height: "48px",
        width: "48px",
      },
      img: {
        width: "100%",
        borderRadius: "50%",
        verticalAlign: "middle",
        borderStyle: "none",
      },
    },
    MuiAvatarGroup: {
      avatar: {
        position: "relative",
        zIndex: "5!important",
        border: "2px solid " + themeColors.white.main,
        marginLeft: "-.75rem",
        "&:hover": {
          zIndex: "6!important",
        },
      },
    },
    MuiPaginationItem: {
      root: {
        width: "36px",
        height: "36px",
        fontSize: ".875rem",
        color: themeColors.gray[600],
        border: "1px solid " + themeColors.gray[300],
        borderRadius: "50%",
        "&:hover": {
          backgroundColor: themeColors.gray[300],
        },
      },
      outlined: {
        color: themeColors.gray[600],
        border: "1px solid " + themeColors.gray[300],
        "&:hover": {
          backgroundColor: themeColors.gray[300],
        },
      },
      outlinedPrimary: {
        "&.Mui-selected": {
          "&, &:hover": {
            backgroundColor: themeColors.primary.main + "!important",
            color: themeColors.white.main,
            boxShadow: boxShadows.buttonBoxShadow,
          },
        },
      },
      sizeLarge: {
        lineHeight: "46px",
        width: "46px",
        height: "46px",
        borderRadius: "50%",
      },
      sizeSmall: {
        lineHeight: "30px",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "rgba(" + hexToRgb(themeColors.black.main) + ", 0.1)",
      },
    },
    MuiSlider: {
      root: {
        height: "5px",
        borderRadius: "5px",
        padding: "15px 0",
      },
      rail: {
        height: "5px",
        borderRadius: "5px",
        backgroundColor: themeColors.gray[300],
        boxShadow: boxShadows.sliderBoxShadow,
      },
      track: {
        height: "5px",
        borderRadius: "5px",
      },
      thumb: {
        width: "15px",
        height: "15px",
      },
    },
    MuiSnackbarContent: {
      root: {
        fontSize: ".875rem",
        position: "relative",
        marginBottom: "1rem",
        padding: "1rem 1.5rem",
        border: "1px solid transparent",
        borderRadius: ".375rem",
      },
      message: {
        padding: "0",
        display: "flex",
      },
    },
    MuiBadge: {
      root: {
        textDecoration: "none",
        "&[href] $badge:hover": {
          color: themeColors.white.main,
          backgroundColor: themeColors.dark.badgeBgHover,
        },
        "&[href] $colorPrimary:hover": {
          backgroundColor: themeColors.primary.badgeBgHover,
        },
        "&[href] $colorSecondary:hover": {
          color: themeColors.gray[900],
          backgroundColor: themeColors.secondary.badgeBgHover,
        },
        "&[href] $colorError:hover": {
          backgroundColor: themeColors.error.badgeBgHover,
        },
      },
      badge: {
        height: "unset",
        fontSize: "66%",
        fontWeight: "600",
        lineHeight: "1",
        display: "inline-block",
        padding: ".35rem .375rem",
        transition:
          "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        textAlign: "center",
        verticalAlign: "baseline",
        whiteSpace: "nowrap",
        borderRadius: ".375rem",
        textTransform: "uppercase",
        border: "3px solid",
        color: themeColors.white.main,
        backgroundColor: themeColors.dark.badgeBg,
      },
      colorPrimary: {
        color: themeColors.primary.badge,
        backgroundColor: themeColors.primary.badgeBg,
      },
      colorSecondary: {
        color: themeColors.gray[900],
        backgroundColor: themeColors.secondary.main,
      },
      colorError: {
        color: themeColors.error.badge,
        backgroundColor: themeColors.error.badgeBg,
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: themeColors.black.main,
        maxWidth: "200px",
        padding: "0.25rem 0.5rem",
        textAlign: "center",
        borderRadius: "0.375rem",
        fontWeight: 400,
        lineHeight: 1.5,
        fontSize: "0.875rem",
      },
      arrow: {
        color: themeColors.black.main,
      },
    },
    MuiPopover: {
      paper: {
        padding: "0.5rem 0.95rem",
        color: themeColors.gray[700],
        boxShadow: boxShadows.popoverBoxShadow,
      },
    },
    MuiTabs: {
      indicator: {
        display: "none",
      },
      scroller: {
        padding: ".5rem",
      },
    },
    MuiTab: {
      root: {
        fontSize: ".875rem",
        fontWeight: 500,
        padding: ".75rem 1rem",
        transition: "all .15s ease",
        boxShadow: "0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)",
        borderRadius: ".375rem",
        display: "block",
        textAlign: "center",
        flex: "1 1 auto",
        maxWidth: "unset",
        "&$selected": {
          color: themeColors.white.main + "!important",
          backgroundColor: themeColors.primary.main + "!important",
        },
        "&:not(:last-child)": {
          marginRight: "1rem",
        },
        "& svg": {
          width: "1rem!important",
          height: "1rem!important",
          position: "relative",
          top: "2px",
        },
      },
      wrapper: {
        flexDirection: "row",
      },
      labelIcon: {
        minHeight: "unset",
        paddingTop: ".75rem",
      },
    },
    MuiTabPanel: {
      root: {
        padding: "0",
      },
    },
    MuiDialog: {
      paper: {
        width: "100%",
      },
    },
    MuiDialogContent: {
      root: {
        position: "relative",
        padding: "1.5rem",
        flex: "1 1 auto",
      },
    },
    MuiDialogActions: {
      root: {
        display: "flex",
        padding: "1.25rem",
        borderBottomRightRadius: ".4375rem",
        borderBottomLeftRadius: ".4375rem",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "flex-end",
      },
    },
  },
});

export default theme;
