import React, { ReactNode, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  getStorage,
  removeStorage,
  setStorage,
} from "@/shared/hooks/use-storage";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/use-store";
import { setUser as setUserSlice } from "@/shared/model/slices/user.slice";
import { route } from "@/shared/lib/routes";
import { User } from "@/shared/model/types/user.type";
import { ProviderAuthContext } from "@/shared/model/types/auth.type";

export const AuthContext = createContext<ProviderAuthContext>(null!);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.userStore.user);

  function login(user: User) {
    setStorage("user:LI", user);
    setUser();
    navigate(route.home, { replace: true });
  }

  function logout() {
    removeStorage("user:LI");
    dispatch(setUserSlice(null));
    navigate(route.login);
  }

  function setUser() {
    if (getStorage("user:LI")) dispatch(setUserSlice(getStorage("user:LI")));
  }

  useEffect(() => {
    setUser();
  }, []);

  const value: ProviderAuthContext = {
    user,
    setUser,
    login,
    logout,
    isFetching: false,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
