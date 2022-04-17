import { createTheme } from "@mui/material/styles";

const PRIMARY_MAIN = "#0383d3";

const theme = createTheme({
  palette: {
    primary: { main: PRIMARY_MAIN, contrastText: "#EFF7F8" },
    secondary: { main: "#FF7D16", contrastText: "#FFFFFF", dark: "rgb(255, 125, 22, 0.6)" },
    customBackgroundColor: "#F2F8FF",
    fieldBackgroundColor: "#EFF7F8",
  },
  typography: {
    fontFamily: "Poppins",
    letterSpacing: "1px",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    // MuiFormHelperText: {
    //   styleOverrides: {
    //     root: {
    //       "& .Mui-error": {
    //         color: ERROR_MAIN,
    //       },
    //     },
    //   },
    // },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#F2F8FF",
          "&:hover": {
            backgroundColor: "#F2F8FF",
          },
          "&:focus": {
            backgroundColor: "#F2F8FF",
          },
          "&.Mui-error": {
            "&::after": {
              borderBottom: "1px solid transparent",
            },
          },

          "&.Mui-focused": {
            "&::after": { borderBottom: "1px solid transparent" },
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: `1px solid ${PRIMARY_MAIN}`,
          },
        },
        underline: {
          "&::after": { borderBottom: "1px solid transparent" },
          "&::before": { borderBottom: "1px solid transparent" },
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          "&::before": {
            borderBottom: "none",
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: `1px solid ${PRIMARY_MAIN}`,
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
  },
});

export default theme;
