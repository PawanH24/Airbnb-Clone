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
  profile_image: yup.mixed<File>().optional(),
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
  propertyPrice: yup.number().required("price required"),
  propertyPriceType: yup
    .string()
    .oneOf(["per_day", "per_week", "per_month"])
    .required("Must select a property price type"),
  country: yup.string().required("Must enter a country"),
  city: yup.string().required("Must enter a city"),
  street: yup.string().required("Must enter a street"),
  zipcode: yup.string().required("Must enter a zipcode"),
  mainImage: yup.mixed<File>().required("Main image is required"),
  galleryImage: yup
    .array()
    .of(yup.mixed<File>().required())
    .min(1, "At least one gallery image is required")
    .max(8, "Maximum 8 imaages allowed")
    .required("Gallery images are required"),
});
