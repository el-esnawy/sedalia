import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import TextInputField from "../components/textInputField";
import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";
import SubmitButton from "../components/SubmitButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { userLoginSchema } from "../formSchema";
import { useDispatch } from "react-redux";
import { userLogin } from "../store/asyncThunk/userThunk";

let defaultUserSchema = {
  identifier: "",
  password: "",
};

const LoginContainer = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userLoginSchema), mode: "onBlur", defaultValues: defaultUserSchema });

  const onFormSubmit = (data) => {
    dispatch(userLogin(data));
    reset();
  };
  return (
    <Container maxWidth="md">
      <Paper
        onSubmit={handleSubmit(onFormSubmit)}
        elevation={4}
        component="form"
        id="userLogin"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          justifyContent: "center",
          alignItems: "center",
          p: 5,
          borderRadius: 10,
        }}>
        <Typography variant="h5" color="primary" textAlign="center" fontWeight="bold">
          Please Log In to View the Sedalia Dashboard
        </Typography>
        <TextInputField
          label="User Identifier"
          icon={PersonIcon}
          fullWidth
          placeholder="Enter Unique Identifier"
          {...register("identifier")}
          error={errors.identifier?.message ? true : false}
          helperText={errors.identifier?.message}
        />
        <TextInputField
          label="Password"
          icon={HttpsIcon}
          fullWidth
          placeholder="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message ? true : false}
          helperText={errors.password?.message}
        />
        <SubmitButton>Log In</SubmitButton>
      </Paper>
    </Container>
  );
};

export default LoginContainer;
