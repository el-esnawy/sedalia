import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import LoginContainer from "../containers/LoginContainer";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoadingOverlay from "../components/LoadingOverlay";

const LoginPrompt = () => {
  const theme = useTheme();
  return (
    <Stack alignItems="center" gap={1} justifyContent="center">
      <Typography
        variant="h1"
        color="white"
        fontWeight="bold"
        textAlign="center"
        sx={{
          letterSpacing: 10,
          WebkitTextStroke: `1px ${theme.palette.primary.main}`,
        }}>
        Sedalia
      </Typography>
      <Typography
        variant="h3"
        color="white"
        textAlign="center"
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
        }}>
        new era of pharmacy
      </Typography>
      <LoginContainer />
    </Stack>
  );
};
const LoginPage = () => {
  const { user } = useSelector((state) => state);

  if (user.loading) return <LoadingOverlay />;
  return (
    <Container
      sx={{
        display: "grid",
        placeItems: "center",
        maxWidth: "none !important",
        height: "100vh",
        background: "linear-gradient(-15deg, rgba(3, 131, 211, 0.4)70%, rgba(255, 125, 22, 0.4) 95%);",
      }}>
      {!user.token ? <LoginPrompt /> : <Outlet />}
    </Container>
  );
};

export default LoginPage;
