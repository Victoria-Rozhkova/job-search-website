import { ReactElement } from "react";
import { Route } from "../model/types/route.type";

export const route: Record<Route, string> = {
  get home() {
    return "/";
  },
  get prefixAuth() {
    return this.home + "auth";
  },
  get login() {
    return this.prefixAuth + "/login";
  },
  get register() {
    return this.prefixAuth + "/register";
  },
  get profile() {
    return this.home + "profile";
  },
  get users() {
    return this.home + "users";
  },
};

export type RouteProps = {
  children: ReactElement;
};
