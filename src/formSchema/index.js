import * as yup from "yup";

export const userLoginSchema = yup.object().shape({
  identifier: yup.string().required("Required Field"),
  password: yup.string().required("Required Field").min(8, "Password must be more than 8 Characters"),
});
