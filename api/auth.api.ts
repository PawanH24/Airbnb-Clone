//* mutation function

import { TLoginInput, TRegisterInput, TUser } from "@/types/auth.types";
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

export const logout = async () => {
  try {
    const response = await api.post("/v1/auth/logout");
    return response.data;
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof AxiosError) {
      throw error.response?.data;
    }
  }
};

export const register = async (data: TRegisterInput) => {
  try {
    const response = await api.post("/v1/auth/register", data);
    return response.data;
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof AxiosError) {
      throw error.response?.data;
    }
  }
};

export const getProfile = async () => {
  try {
    const response = await api.get("/v1/auth/getProfile");
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      // If it's a 401 (Unauthorized) or 404, just return null.
      // This is expected for guests. Don't log it as an error.
      if (error.response?.status === 401 || error.response?.status === 404) {
        return null;
      }
    }
    // Only log actual unexpected errors
    console.log("Unexpected getProfile error:", error);
    throw error;
  }
};
