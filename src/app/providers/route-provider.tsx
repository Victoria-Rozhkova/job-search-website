import React, { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

const RouteProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default RouteProvider;