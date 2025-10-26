import { createApi } from "@reduxjs/toolkit/dist/query/react";
import {
  AuthResponse,
  LoginData,
  RegistrationData,
} from "@/shared/model/types/auth.type";
import { improvedFetchQuery } from "@/shared/lib/api";

export const authApi = createApi({
  reducerPath: "AuthQuery",
  tagTypes: ["Auth"],
  baseQuery: improvedFetchQuery,
  endpoints: (build) => ({
    login: build.mutation<AuthResponse, LoginData>({
      query: (body) => ({
        url: "/login",
        body,
        method: "POST",
      }),
    }),
    register: build.mutation<AuthResponse, RegistrationData>({
      query: (body) => ({
        url: "/register",
        body,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
