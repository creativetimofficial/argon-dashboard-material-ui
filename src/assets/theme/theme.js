// @material-ui/core components
import { createMuiTheme } from "@material-ui/core/styles";
// core components
// these are all of the box shadows
import boxShadows from "assets/theme/box-shadow.js";
// this is used to convert hex colors (e.g. `#000`) to rgb color numbers (e.g. `0, 0, 0`)
import hexToRgb from "assets/theme/hex-to-rgb.js";
// this represents all of our state colors, such as primary, dark, secondary, ..., facebook, ..., github
import states from "assets/theme/states.js";
// these are all of our colors
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
// // we add our colors here, so we can use them on the bellow components
let theme = createMuiTheme({
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
    fontSize: 16,
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
    body1: {
      lineHeight: "1.43!important",
    },
  },
});

// theme for the components
theme = createMuiTheme(theme, {
  components: {
    MuiDrawer: {
      styleOverrides: {
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
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          display: "block",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          color: theme.palette.gray[700],
        },
        gutters: {
          paddingLeft: "1rem",
          paddingRight: "1rem",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          minWidth: "12rem",
          fontSize: "1rem",
          color: theme.palette.gray[700],
          textAlign: "left",
          listStyle: "none",
          backgroundColor: theme.palette.white.main,
          backgroundClip: "padding-box",
          border:
            "0 solid rgba(" + hexToRgb(theme.palette.black.main) + ",.15)",
          borderRadius: ".4375rem",
          boxShadow: boxShadows.menuBoxShadow,
          padding: ".5rem 0",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: ".5rem 1rem",
          fontSize: ".875rem",
          display: "block",
          width: "100%",
          clear: "both",
          fontWeight: 400,
          color: theme.palette.gray[900],
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
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          width: "100%",
          marginTop: ".25rem",
          fontSize: "80%",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          paddingTop: "0!important",
          paddingBottom: "0!important",
          paddingLeft: "9px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          width: "1.25rem",
          height: "1.25rem",
          top: "calc(50% - 11px)",
        },
        root: {
          "&$disabled": {
            backgroundColor: theme.palette.gray[200],
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.gray[700],
          fontSize: ".875rem",
          fontWeight: "600",
          display: "inline-block",
          marginBottom: ".5rem",
          lineHeight: "1",
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          marginBottom: "1.5rem",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          display: "block",
          width: "100%",
          height: "calc(1.5em + 1.25rem + 2px)",
          padding: ".625rem .75rem",
          fontWeight: 400,
          lineHeight: 1.5,
          color: theme.palette.gray[600],
          backgroundColor: theme.palette.white.main,
          backgroundClip: "padding-box",
          border: "1px solid #cad1d7",
          borderRadius: ".375rem",
          boxShadow: "none",
          transition: "all .2s cubic-bezier(.68,-.55,.265,1.55)",
          fontSize: ".875rem",
          boxSizing: "border-box",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.MuiInputLabel-outlined.MuiInputLabel-shrink": {
            transform: "translate(14px, -6px) scale(0.75)",
          },
        },
        outlined: {
          transform: "translate(14px, 15px) scale(1)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: ".625rem .75rem",
          border: 0,
        },
        root: {
          paddingRight: "0",
          "&:hover $notchedOutline": {
            borderColor: theme.palette.gray[300],
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.gray[200],
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.gray[300],
            },
          },
          "& textarea": {
            padding: "0!important",
            height: "auto!important",
            resize: "none!important",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.gray[300],
          },
          "&.MuiInputBase-adornedEnd": {
            paddingRight: "14px",
          },
        },
        multiline: {
          padding: ".625rem .75rem",
        },
      },
      variants: [
        {
          props: { color: "success" },
          style: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.success.main + "!important",
            },
          },
        },
        {
          props: { color: "error" },
          style: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.warning.main + "!important",
            },
          },
        },
      ],
    },
    MuiFilledInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            display: "none",
          },
          "&:after": {
            borderRadius: ".375rem",
            height: "100%",
            border: "2px solid " + theme.palette.primary.main,
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
          backgroundColor: theme.palette.white.main + "!important",
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
        },
        inputAdornedStart: {
          paddingLeft: ".75rem",
        },
        inputAdornedEnd: {
          paddingRight: ".75rem",
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          transition: "all .2s cubic-bezier(.68,-.55,.265,1.55)",
          display: "flex",
          alignItems: "center",
          padding: ".625rem 0",
          marginBottom: "0",
          fontSize: ".875rem",
          fontWeight: "400",
          lineHeight: "1.5",
          color: theme.palette.gray[500],
          textAlign: "center",
          whiteSpace: "nowrap",
          backgroundColor: theme.palette.white.main,
          border: "0",
          marginTop: "0!important",
          height: "calc(1.5em + 1.25rem + 2px)",
          "& + .MuiFilledInput-input": {
            borderLeft: 0,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
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
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root": {
            width: "1.5rem",
            height: "1.5rem",
          },
          "&:not(.Mui-checked) .MuiSvgIcon-root": {
            color: theme.palette.gray[300],
          },
        },
      },
      variants: [
        ...states.map((prop, key) => {
          return {
            props: { color: prop },
            style: {
              backgroundColor: themeColors.transparent.main + "!important",
            },
          };
        }),
      ],
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root": {
            width: "1.5rem",
            height: "1.5rem",
          },
          "&:not(.Mui-checked) .MuiSvgIcon-root": {
            color: theme.palette.gray[300],
          },
        },
      },
      variants: [
        ...states.map((prop, key) => {
          return {
            props: { color: prop },
            style: {
              backgroundColor: themeColors.transparent.main + "!important",
            },
          };
        }),
      ],
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: "3.25rem",
          height: "1.5rem",
          padding: 0,
        },
        switchBase: {
          padding: "3px",
          color: theme.palette.gray[200],
          "&.Mui-checked": {
            transform: "translateX(28px)",
            "& + .MuiSwitch-track": {
              backgroundColor: theme.palette.transparent.main + "!important",
              opacity: 1,
            },
          },
        },
        thumb: {
          width: "18px",
          height: "18px",
          boxShadow: "none",
        },
        track: {
          backgroundColor: theme.palette.transparent.main,
          border: "1px solid " + theme.palette.gray[200],
          opacity: 1,
          borderRadius: "34px",
        },
      },
      variants: [
        ...states.map((prop, key) => {
          return {
            props: { color: prop },
            style: {
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                borderColor: theme.palette[prop].main + "!important",
              },
            },
          };
        }),
      ],
    },
    MuiIconButton: {
      variants: [
        ...states.map((prop, key) => {
          return {
            props: { color: prop },
            style: {
              borderColor: theme.palette[prop].main,
              backgroundColor: theme.palette[prop].main,
              color:
                prop === "secondary"
                  ? theme.palette.dark.main
                  : theme.palette.white.main,
              "&:hover": {
                borderColor: theme.palette[prop].dark,
                color:
                  prop === "secondary"
                    ? theme.palette.dark.main
                    : theme.palette.white.main,
              },
              "&.Mui-disabled": {
                backgroundColor: theme.palette[prop].main,
                opacity: 0.65,
                color:
                  prop === "secondary"
                    ? theme.palette.dark.main
                    : theme.palette.white.main,
              },
            },
          };
        }),
      ],
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: boxShadows.boxShadow,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          wordWrap: "break-word",
          backgroundColor: theme.palette.white.main,
          backgroundClip: "initial",
          border: "0",
          borderRadius: ".375rem",
          overflow: "unset",
          marginBottom: "30px",
          "& > .MuiCardHeader-root": {
            borderRadius: "calc(.375rem - 1px) calc(.375rem - 1px) 0 0",
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "1.25rem 1.5rem",
          marginBottom: "0",
          backgroundColor: theme.palette.white.main,
          borderBottom:
            "1px solid rgba(" + hexToRgb(theme.palette.black.main) + ",.05)",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          flex: "1 1 auto",
          minHeight: "1px",
          padding: "1.5rem",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          "&:last-of-type": {
            borderRadius: "0 0 calc(.375rem - 1px) calc(.375rem - 1px)",
            padding: "1.25rem 1.5rem",
            backgroundColor: theme.palette.white.main,
            borderTop:
              "1px solid rgba(" + hexToRgb(theme.palette.black.main) + ",.05)",
          },
        },
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "0!important",
        },
        grouped: {
          minWidth: "unset",
          "&:not(:last-of-type)": {
            marginLeft: "-1px",
            "&:hover": {
              zIndex: 1,
            },
          },
        },
      },
      variants: [
        ...states.map((prop, key) => {
          return {
            props: { variant: "contained", color: prop },
            style: {
              "& .MuiButtonGroup-grouped:not(:last-of-type),& .MuiButtonGroup-grouped": {
                borderColor: theme.palette[prop].main,
                "&:hover": {
                  borderColor: theme.palette[prop].dark,
                },
              },
            },
          };
        }),
      ],
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
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
          "&:hover": {
            boxShadow: boxShadows.buttonBoxShadow,
            transform: "translateY(-1px)",
          },
        },
        text: {
          padding: ".625rem 1.25rem",
          boxShadow: "none!important",
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            boxShadow:
              "0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            boxShadow: "none!important",
            "&:hover": {
              boxShadow: "none!important",
            },
          },
        },
        {
          props: { size: "small" },
          style: {
            fontSize: ".75rem",
            padding: ".25rem .5rem",
            lineHeight: "1.5",
            borderRadius: ".375rem",
            minWidth: "unset",
          },
        },
        {
          props: { size: "large" },
          style: {
            fontSize: ".875rem",
            lineHeight: 1.5,
            padding: ".875rem 1rem",
            borderRadius: ".4375rem",
          },
        },
        ...states.map((prop, key) => {
          return {
            props: { variant: "active", color: prop },
            style: {
              borderColor: theme.palette[prop].dark + "!important",
              backgroundColor: theme.palette[prop].dark + "!important",
              color:
                prop === "secondary"
                  ? theme.palette.dark.main + "!important"
                  : theme.palette.white.main + "!important",
              boxShadow: boxShadows.buttonBoxShadow + "!important",
              transform: "translateY(-1px)!important",
            },
          };
        }),
        ...states.map((prop, key) => {
          return {
            props: { variant: "neutral", color: prop },
            style: {
              borderColor: theme.palette.white.main,
              backgroundColor: theme.palette.white.main,
              color:
                prop === "secondary"
                  ? theme.palette.secondary.colorSecondary
                  : theme.palette[prop].main,
              boxShadow:
                "0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)",
              "&:hover": {
                backgroundColor: theme.palette.white.main,
                color:
                  prop === "secondary"
                    ? theme.palette.secondary.colorSecondary
                    : theme.palette[prop].main,
              },
            },
          };
        }),
        ...states.map((prop, key) => {
          return {
            props: { variant: "contained", color: prop },
            style: {
              borderColor: theme.palette[prop].main,
              backgroundColor: theme.palette[prop].main,
              color:
                prop === "secondary"
                  ? theme.palette.dark.main
                  : theme.palette.white.main,
              "&:hover": {
                borderColor: theme.palette[prop].dark,
                color:
                  prop === "secondary"
                    ? theme.palette.dark.main
                    : theme.palette.white.main,
              },
              "&.Mui-disabled": {
                backgroundColor: theme.palette[prop].main,
                opacity: 0.65,
                color:
                  prop === "secondary"
                    ? theme.palette.dark.main
                    : theme.palette.white.main,
              },
            },
          };
        }),
        ...states.map((prop, key) => {
          return {
            props: { variant: "outlined", color: prop },
            style: {
              borderColor: theme.palette[prop].main,
              color:
                prop === "secondary"
                  ? theme.palette[prop].btnOutline
                  : theme.palette[prop].main,
              "&:hover": {
                backgroundColor: theme.palette[prop].main,
                color:
                  prop === "secondary"
                    ? theme.palette.dark.main
                    : theme.palette.white.main,
              },
              "&.Mui-disabled": {
                borderColor: theme.palette[prop].main,
                backgroundColor: theme.palette.gray[100],
                opacity: 0.65,
                color:
                  prop === "secondary"
                    ? theme.palette[prop].btnOutline
                    : theme.palette[prop].main,
              },
            },
          };
        }),
      ],
    },
    MuiContainer: {
      styleOverrides: {
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
    },
    MuiGrid: {
      styleOverrides: {
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
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          width: "14px",
          height: "14px",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          width: "100%",
          marginBottom: "1rem",
          color: theme.palette.gray[700],
          backgroundColor: theme.palette.transparent.main,
          borderCollapse: "collapse",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:last-of-type": {
            "& th,& td": {
              border: 0,
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: ".8125rem",
          whiteSpace: "nowrap",
          padding: "1rem",
          verticalAlign: "top",
          borderTop: "1px solid " + theme.palette.gray[200],
          borderBottom: "1px solid " + theme.palette.gray[200],
        },
        head: {
          padding: "1rem",
          borderTop: "1px solid " + theme.palette.gray[200],
          fontWeight: "600",
          whiteSpace: "nowrap",
          verticalAlign: "bottom",
          paddingTop: ".75rem",
          paddingBottom: ".75rem",
          fontSize: ".65rem",
          textTransform: "uppercase",
          letterSpacing: "1px",
          borderBottom: "1px solid " + theme.palette.gray[200],
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-head,& .MuiTableCell-boyd": {
            paddingTop: "1rem",
            paddingBottom: "1rem",
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: "8px",
          marginBottom: "1rem",
          overflow: "hidden",
          borderRadius: ".25rem",
          backgroundColor: theme.palette.gray[200] + "!important",
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
          color: theme.palette.white.main,
          textAlign: "center",
          whiteSpace: "nowrap",
          transition: "width .6s ease",
          boxShadow: "none",
          borderRadius: 0,
          height: "auto",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          width: "36px",
          height: "36px",
          fontSize: ".875rem",
          color: theme.palette.gray[600],
          border: "1px solid " + theme.palette.gray[300],
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: theme.palette.gray[300],
          },
        },
        outlined: {
          color: theme.palette.gray[600],
          border: "1px solid " + theme.palette.gray[300],
          "&:hover": {
            backgroundColor: theme.palette.gray[300],
          },
        },
        outlinedPrimary: {
          "&.Mui-selected": {
            "&, &:hover": {
              backgroundColor: theme.palette.primary.main + "!important",
              color: theme.palette.white.main,
              boxShadow: boxShadows.buttonBoxShadow,
            },
          },
        },
      },
      variants: [
        {
          props: { size: "large" },
          style: {
            lineHeight: "46px",
            width: "46px",
            height: "46px",
            borderRadius: "50%",
          },
        },
        {
          props: { size: "small" },
          style: {
            lineHeight: "30px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
          },
        },
      ],
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          border: "none!important",
          height: "1px",
          backgroundColor:
            "rgba(" + hexToRgb(theme.palette.black.main) + ", 0.1)",
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          height: "5px",
          borderRadius: "5px",
          padding: "15px 0",
        },
        rail: {
          height: "5px",
          borderRadius: "5px",
          backgroundColor: theme.palette.gray[300],
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
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          fontSize: ".875rem",
          position: "relative",
          marginBottom: "1rem",
          padding: "1rem 1.5rem",
          border: "1px solid transparent",
          borderRadius: ".375rem",
          flexWrap: undefined,
        },
        message: {
          padding: "0",
          // "@media (min-width: 576px)": {
          display: "flex",
          // },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
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
          border: "none",
        },
      },
      variants: [
        ...states.map((prop, key) => {
          return {
            props: { color: prop, variant: "rounded-full" },
            style: {
              "& .MuiBadge-badge": {
                color: theme.palette[prop].badge,
                backgroundColor: theme.palette[prop].badgeBg,
                border: "3px solid " + themeColors.white.main,
                borderRadius: "50%",
                width: "1.5rem",
                height: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              "&[href]:hover .MuiBadge-badge": {
                color:
                  prop === "secondary"
                    ? themeColors.gray[900]
                    : themeColors.white.main,
                backgroundColor: theme.palette[prop].badgeBgHover,
              },
            },
          };
        }),
        ...states.map((prop, key) => {
          return {
            props: { color: prop, variant: "relative-circle" },
            style: {
              "& .MuiBadge-badge": {
                color: theme.palette[prop].badge,
                backgroundColor: theme.palette[prop].badgeBg,
                position: "relative",
                transform: "none",
                transformOrigin: "unset",
                top: 0,
                right: 0,
                width: "1.25rem",
                height: "1.25rem",
                borderRadius: "50%",
                display: "inline-flex",
                padding: "0!important",
                fontSize: ".75rem",
                textAlign: "center",
                alignItems: "center",
                fontWeight: "600",
                justifyContent: "center",
              },
              "&[href]:hover .MuiBadge-badge": {
                color:
                  prop === "secondary"
                    ? themeColors.gray[900]
                    : themeColors.white.main,
                backgroundColor: theme.palette[prop].badgeBgHover,
              },
            },
          };
        }),
        ...states.map((prop, key) => {
          return {
            props: { color: prop, variant: "relative" },
            style: {
              "& .MuiBadge-badge": {
                color: theme.palette[prop].badge,
                backgroundColor: theme.palette[prop].badgeBg,
                position: "relative",
                transform: "none",
                transformOrigin: "unset",
                top: 0,
                right: 0,
              },
              "&[href]:hover .MuiBadge-badge": {
                color:
                  prop === "secondary"
                    ? themeColors.gray[900]
                    : themeColors.white.main,
                backgroundColor: theme.palette[prop].badgeBgHover,
              },
            },
          };
        }),
        ...states.map((prop, key) => {
          return {
            props: { color: prop, variant: "relative-md" },
            style: {
              "& .MuiBadge-badge": {
                color: theme.palette[prop].badge,
                backgroundColor: theme.palette[prop].badgeBg,
                position: "relative",
                transform: "none",
                transformOrigin: "unset",
                top: 0,
                right: 0,
                padding: ".65em 1em",
              },
              "&[href]:hover .MuiBadge-badge": {
                color:
                  prop === "secondary"
                    ? themeColors.gray[900]
                    : themeColors.white.main,
                backgroundColor: theme.palette[prop].badgeBgHover,
              },
            },
          };
        }),
        ...states.map((prop, key) => {
          return {
            props: { color: prop, variant: "relative-lg" },
            style: {
              "& .MuiBadge-badge": {
                color: theme.palette[prop].badge,
                backgroundColor: theme.palette[prop].badgeBg,
                position: "relative",
                transform: "none",
                transformOrigin: "unset",
                padding: ".85em 1.375em",
                top: 0,
                right: 0,
              },
              "&[href]:hover .MuiBadge-badge": {
                color:
                  prop === "secondary"
                    ? themeColors.gray[900]
                    : themeColors.white.main,
                backgroundColor: theme.palette[prop].badgeBgHover,
              },
            },
          };
        }),
        ...states.map((prop, key) => {
          return {
            props: { color: prop, variant: "relative", overlap: "circular" },
            style: {
              "& .MuiBadge-badge": {
                color: theme.palette[prop].badge,
                backgroundColor: theme.palette[prop].badgeBg,
                position: "relative",
                transform: "none",
                transformOrigin: "unset",
                paddingRight: ".875em",
                paddingLeft: ".875em",
                borderRadius: "10rem",
                top: 0,
                right: 0,
              },
              "&[href]:hover .MuiBadge-badge": {
                color:
                  prop === "secondary"
                    ? themeColors.gray[900]
                    : themeColors.white.main,
                backgroundColor: theme.palette[prop].badgeBgHover,
              },
            },
          };
        }),
        ...states.map((prop, key) => {
          return {
            props: { color: prop, variant: "relative-md", overlap: "circular" },
            style: {
              "& .MuiBadge-badge": {
                color: theme.palette[prop].badge,
                backgroundColor: theme.palette[prop].badgeBg,
                position: "relative",
                transform: "none",
                transformOrigin: "unset",
                padding: ".65em 1em",
                paddingRight: ".875em",
                paddingLeft: ".875em",
                borderRadius: "10rem",
                top: 0,
                right: 0,
              },
              "&[href]:hover .MuiBadge-badge": {
                color:
                  prop === "secondary"
                    ? themeColors.gray[900]
                    : themeColors.white.main,
                backgroundColor: theme.palette[prop].badgeBgHover,
              },
            },
          };
        }),
        ...states.map((prop, key) => {
          return {
            props: { color: prop, variant: "relative-lg", overlap: "circular" },
            style: {
              "& .MuiBadge-badge": {
                color: theme.palette[prop].badge,
                backgroundColor: theme.palette[prop].badgeBg,
                position: "relative",
                transform: "none",
                transformOrigin: "unset",
                padding: ".85em 1.375em",
                paddingRight: ".875em",
                paddingLeft: ".875em",
                borderRadius: "10rem",
                top: 0,
                right: 0,
              },
              "&[href]:hover .MuiBadge-badge": {
                color:
                  prop === "secondary"
                    ? themeColors.gray[900]
                    : themeColors.white.main,
                backgroundColor: theme.palette[prop].badgeBgHover,
              },
            },
          };
        }),
      ],
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.black.main,
          maxWidth: "200px",
          padding: "0.25rem 0.5rem",
          textAlign: "center",
          borderRadius: "0.375rem",
          fontWeight: 400,
          lineHeight: 1.5,
          fontSize: "0.875rem",
        },
        arrow: {
          color: theme.palette.black.main,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          padding: "0.5rem 0.95rem",
          color: theme.palette.gray[700],
          boxShadow: boxShadows.popoverBoxShadow,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: "none",
        },
        scroller: {
          padding: ".5rem",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
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
            color: theme.palette.white.main + "!important",
            backgroundColor: theme.palette.primary.main + "!important",
          },
          "&:not(:last-of-type)": {
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
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          width: "100%",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          position: "relative",
          padding: "1.5rem",
          flex: "1 1 auto",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
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
  },
});

export default theme;
