import { CircularProgress, Container, Typography } from "@mui/material";
import React from "react";

const LoadingOverlay = ({ loadingText }) => {
  return (
    <Container
      sx={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <CircularProgress color="primary" size="200px" thickness={7} />
      <Typography sx={{ fontSize: 36, fontWeight: "semi-bold", mt: 10 }} color="primary">
        {loadingText || "Loading..."}
      </Typography>
    </Container>
  );
};

export default LoadingOverlay;
