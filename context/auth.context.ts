"use client";

import { Role, TLoginInput, TRegisterInput, TUser } from "@/types/auth.types";
import React from "react";

type TAuthContextType = {
  user: null | TUser;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (data: TLoginInput) => void;
  logout: () => void;
  createAccount: (data: TRegisterInput) => void;
};

const initialValues: TAuthContextType = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  createAccount: () => {},
};

const AuthContext = React.createContext<TAuthContextType>(initialValues);
export default AuthContext;
