/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useTheme } from "@emotion/react";

const Alert = React.forwardRef(function Alert(props, ref) {
  const theme = useTheme();
  return (
    <MuiAlert
      elevation={6}
      ref={ref}
      variant="outlined"
      {...props}
      sx={{
        backgroundColor: theme.palette.fieldBackgroundColor,
        opacity: 1,
        borderWidth: "3px",
      }}
    />
  );
});

const ErrorAlert = ({ errorText, error }) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  React.useEffect(() => {
    if (error) {
      setOpen(true);
      setMessage(errorText);
    }
  }, [error]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert onClose={handleClose} severity={error ? "error" : "success"} sx={{ width: "100%" }}>
          {message?.length === 0 && error ? "An Error Occured, please try again later" : message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default ErrorAlert;
