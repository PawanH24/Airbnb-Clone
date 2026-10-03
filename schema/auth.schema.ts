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

export const propertyFormSchema = yup.object({
  propertyName: yup.string().required("property name is required"),
  propertyDescription: yup
    .string()
    .required("property description is required"),
  propertyType: yup
    .string()
    .oneOf(["apartment", "house", "condo", "townhouse", "tree house"])
    .required("Must select a property type"),
  room: yup.number().required("Atleast one room is required"),
});
