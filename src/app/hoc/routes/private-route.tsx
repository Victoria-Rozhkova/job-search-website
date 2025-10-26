import React, { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";

import useAuth from "@/shared/hooks/use-auth";
import { RouteProps, route } from "@/shared/lib/routes";

const PrivateRoute: FC<RouteProps> = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return (
      <Navigate
        to={route.login}
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children;
};

export default PrivateRoute;
