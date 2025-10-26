import { ReactElement } from "react";

export type Route = "home" | "profile" | "prefixAuth" | "login" | "register" | "users";

export type DecoratorRouteProps = {
  children: ReactElement;
  conditionalRedirect?: {
    to: string;
    condition: boolean;
    rememberLocation?: boolean;
  };
  loading?: boolean;
};
