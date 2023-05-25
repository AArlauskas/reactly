import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter your password")
    .min(6, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  repeatPassword: Yup.string("Enter your password")
    .min(6, "Password should be of minimum 8 characters length")
    .required("Password is required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

export default validationSchema;
