import React, { useContext } from "react";
import { AuthContext } from "@/app/providers/auth-provider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
