import React, { FC, ReactNode } from "react";
import RouteProvider from "./route-provider";
import StoreProvider from "./store-provider";
import AuthProvider from "./auth-provider";

const WithProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <RouteProvider>
      <StoreProvider>
        <AuthProvider>{children}</AuthProvider>
      </StoreProvider>
    </RouteProvider>
  );
};

export default WithProviders;
