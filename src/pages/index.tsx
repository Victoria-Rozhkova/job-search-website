import React from "react";
import { Routes, Route } from "react-router-dom";

import { route } from "@/shared/lib/routes";
import { HomePage } from "./home";
import Layout from "./layout/main";
import { PrivateRoute } from "@/app/hoc/routes";
import { AuthRoutes } from "@/routes/auth";
import { UsersPage } from "./users";
import { ProfilePage } from "./profile";

const PagesRouting = () => {
  return (
    <Routes>
      {AuthRoutes}
      <Route
        path={route.profile}
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
      <Route
        path={route.home}
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path={route.users} element={<UsersPage />} />
      </Route>
    </Routes>
  );
};

export default PagesRouting;
