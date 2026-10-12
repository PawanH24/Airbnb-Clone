import AuthContext from "@/context/auth.context";
import { useContext } from "react";

const useAuth = () => {
  if (!AuthContext) {
    console.log("useAuth must be used inside auth provider");
  }
  return useContext(AuthContext);
};
export default useAuth;
