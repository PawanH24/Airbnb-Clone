//* mutation function

import { TLoginInput } from "@/types/auth.types";
import axios, { AxiosError } from "axios";

export const login = async (data: TLoginInput) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/v1/auth/login",
      data,
    );
    return response.data;
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof AxiosError) {
      throw error.response?.data;
    }
  }
};
