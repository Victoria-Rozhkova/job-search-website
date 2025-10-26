import React from "react";
import { Outlet, Route } from "react-router-dom";

import { route } from "@/shared/lib/routes";
import { PublicRoute } from "@/app/hoc/routes";
import { AuthWrapper } from "@/pages/auth";
import LoginPage from "@/pages/auth/login/login";
import RegisterPage from "@/pages/auth/register/register";

export const AuthRoutes = (
  <Route
    path={route.prefixAuth}
    element={
      <PublicRoute>
        <AuthWrapper>
          <Outlet />
        </AuthWrapper>
      </PublicRoute>
    }
  >
    <Route path={route.login} element={<LoginPage />} />
    <Route path={route.register} element={<RegisterPage />} />
  </Route>
);
