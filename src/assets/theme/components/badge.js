const componentStyles = (theme) => ({
  badgePositionRelative: {
    position: "relative",
    transform: "none",
    border: "none!important",
  },
  badgeRound: {
    borderRadius: "10rem",
    paddingRight: ".875em",
    paddingLeft: ".875em",
  },
  badgeCircle: {
    fontSize: ".75rem",
    fontWeight: "600",
    display: "inline-flex",
    width: "1.25rem",
    height: "1.25rem",
    padding: "0!important",
    textAlign: "center",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeBorderWhite: {
    borderColor: theme.palette.white.main,
  },
  badgeSizeMd: {
    padding: ".65em 1em",
    "&$badgeCircle": {
      width: "1.5rem",
      height: "1.5rem",
    },
  },
  badgeSizeLg: {
    padding: ".85em 1.375em",
    "&$badgeCircle": {
      width: "2rem",
      height: "2rem",
    },
  },
  badgeInfo: {
    color: theme.palette.info.badge,
    backgroundColor: theme.palette.info.badgeBg,
  },
  badgeSuccess: {
    color: theme.palette.success.badge,
    backgroundColor: theme.palette.success.badgeBg,
  },
  badgeWarning: {
    color: theme.palette.warning.badge,
    backgroundColor: theme.palette.warning.badgeBg,
  },
  badgeLink: {
    "&[href] $badgeInfo:hover": {
      backgroundColor: theme.palette.info.badgeBgHover,
    },
    "&[href] $badgeSuccess:hover": {
      backgroundColor: theme.palette.success.badgeBgHover,
    },
    "&[href] $badgeWarning:hover": {
      backgroundColor: theme.palette.warning.badgeBgHover,
    },
  },
});

export default componentStyles;
