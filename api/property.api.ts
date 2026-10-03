import { TPropertyFormData } from "@/types/auth.types";
import axios, { AxiosError } from "axios";

export const createProperty = async (data: TPropertyFormData) => {
  try {
    const res = await axios.post("http://localhost:8080/property/", data);
    return res.data;
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof AxiosError) {
      throw error.response?.data;
    }
  }
};
