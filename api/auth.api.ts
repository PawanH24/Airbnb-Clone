//* mutation function

import { TLoginInput } from "@/types/auth.types";
import { AxiosError } from "axios";
import api from ".";

export const login = async (data: TLoginInput) => {
  try {
    const response = await api.post("/v1/auth/login", data);
    return response.data;
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof AxiosError) {
      throw error.response?.data;
    }
  }
};
