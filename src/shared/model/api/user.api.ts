import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { improvedFetchQuery } from "@/shared/lib/api";
import { GetUserParams, UpdateUserParams, User } from "../types/user.type";

export const userApi = createApi({
  reducerPath: "UserQuery",
  tagTypes: ["User"],
  baseQuery: improvedFetchQuery,
  endpoints: (build) => ({
    getUsers: build.query<User[], GetUserParams>({
      query: (params) => ({
        url: "users",
        params,
      }),
      providesTags: ["User"],
    }),
    updateProfile: build.mutation<User, UpdateUserParams>({
      query: ({ id, ...body }) => ({
        url: `users/${id}`,
        method: "PATCH",
        params: { isDefinedArgs: true },
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useUpdateProfileMutation } = userApi;
