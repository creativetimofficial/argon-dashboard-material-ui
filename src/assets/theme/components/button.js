const componentStyles = (theme) => ({
  buttonContainedInfo: {
    backgroundColor: theme.palette.info.main,
    borderColor: theme.palette.info.main,
    color: theme.palette.white.main,
    "&:hover": {
      backgroundColor: theme.palette.info.dark,
      borderColor: theme.palette.info.dark,
    },
  },
  buttonContainedSuccess: {
    backgroundColor: theme.palette.success.main,
    borderColor: theme.palette.success.main,
    color: theme.palette.white.main,
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
      borderColor: theme.palette.success.dark,
    },
  },
  buttonContainedError: {
    backgroundColor: theme.palette.error.main,
    borderColor: theme.palette.error.main,
    color: theme.palette.white.main,
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
      borderColor: theme.palette.error.dark,
    },
  },
  buttonContainedWarning: {
    backgroundColor: theme.palette.warning.main,
    borderColor: theme.palette.warning.main,
    color: theme.palette.white.main,
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
      borderColor: theme.palette.warning.dark,
    },
  },
  buttonOutlineInfo: {
    color: theme.palette.info.main,
    borderColor: theme.palette.info.main,
    "&:hover": {
      backgroundColor: theme.palette.info.main,
    },
  },
  buttonOutlineSuccess: {
    color: theme.palette.success.main,
    borderColor: theme.palette.success.main,
    "&:hover": {
      backgroundColor: theme.palette.success.main,
    },
  },
  buttonOutlineError: {
    color: theme.palette.error.main,
    borderColor: theme.palette.error.main,
    "&:hover": {
      backgroundColor: theme.palette.error.main,
    },
  },
  buttonOutlineWarning: {
    color: theme.palette.warning.main,
    borderColor: theme.palette.warning.main,
    "&:hover": {
      backgroundColor: theme.palette.warning.main,
    },
  },
  buttonActive: {
    backgroundColor: theme.palette.dark.dark,
    borderColor: theme.palette.dark.dark,
  },
  buttonActivePrimary: {
    backgroundColor: theme.palette.primary.dark,
    borderColor: theme.palette.primary.dark,
  },
  buttonActiveSecondary: {
    backgroundColor: theme.palette.secondary.btnActive,
    borderColor: theme.palette.secondary.btnActive,
  },
  buttonActiveInfo: {
    backgroundColor: theme.palette.info.dark,
    borderColor: theme.palette.info.dark,
  },
  buttonActiveSuccess: {
    backgroundColor: theme.palette.success.dark,
    borderColor: theme.palette.success.dark,
  },
  buttonActiveError: {
    backgroundColor: theme.palette.error.dark,
    borderColor: theme.palette.error.dark,
  },
  buttonActiveWarning: {
    backgroundColor: theme.palette.warning.dark,
    borderColor: theme.palette.warning.dark,
  },
  buttonDisabled: {
    opacity: ".65",
    boxShadow: "none!important",
    pointerEvents: "none",
  },
});

export default componentStyles;
