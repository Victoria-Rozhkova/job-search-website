import React, { FC, ReactNode } from "react";
import { HashRouter  } from "react-router-dom";

const RouteProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <HashRouter >{children}</HashRouter >;
};

export default RouteProvider;
