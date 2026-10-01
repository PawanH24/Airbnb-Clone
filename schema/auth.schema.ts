import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const registerSchema = yup.object({
  fullName: yup.string().required(),
  email: yup
    .string()
    .email("invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  phone: yup.string().required(),
  role: yup
    .string()
    .oneOf(["USER", "HOST"], "Invalid role selected")
    .required(),
  profile_image: yup.mixed(),
});
