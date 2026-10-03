import {
  loginSchema,
  propertyFormSchema,
  registerSchema,
} from "@/schema/auth.schema";
import * as yup from "yup";

export type TLoginInput = yup.InferType<typeof loginSchema>;
export type TRegisterInput = yup.InferType<typeof registerSchema>;
export type TPropertyFormData = yup.InferType<typeof propertyFormSchema>;

// export type TLoginInput = {
//   email: string;
//   password: string;
// };

// export type TRegisterInput = {
//   email: string;
//   password: string;
//   fullName: string;
//   phone: string;
//   role: "USER" | "HOST";
//   profile_image: FileList | "";
// };
