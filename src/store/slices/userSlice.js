import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { userLogin } from "../asyncThunk/userThunk";

const validToken = () =>
  (localStorage.getItem("token") &&
    jwt_decode(localStorage.getItem("token"))?.exp > Date.now() / 1000 &&
    localStorage.getItem("token")) ||
  "";

const userInitialState = {
  token: validToken(),
  user: {},
  loading: false,
  error: false,
  errorMessage: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: userInitialState,
  reducers: {
    logoutUser: (state, action) => {
      localStorage.clear();
      return { role: "", token: "", loading: false, Ref: null, error: false, errorMessage: "" };
    },
  },
  extraReducers: {
    [userLogin.fulfilled]: (state, action) => {
      action.payload.jwt && localStorage.setItem("token", action.payload.jwt);
      return { loading: false, error: false, errorMessage: "", token: action.payload?.jwt, user: action.payload?.user };
    },
    [userLogin.pending]: (state, action) => {
      return { ...state, loading: true, error: false, errorMessage: "" };
    },
    [userLogin.rejected]: (state, action) => {
      const [errorMessages] = action.payload;
      const { messages } = errorMessages;
      return { ...state, loading: false, error: true, errorMessage: messages[0].message };
    },
  },
});
export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
