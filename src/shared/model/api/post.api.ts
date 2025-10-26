import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { improvedFetchQuery } from "@/shared/lib/api";
import { CreatePostParams, Post } from "../types/post.type";

export const postApi = createApi({
  reducerPath: "PostQuery",
  tagTypes: ["Posts"],
  baseQuery: improvedFetchQuery,
  endpoints: (build) => ({
    getPosts: build.query<Post[], null>({
      query: () => ({
        url: "/posts?_sort=id&_order=desc",
      }),
      providesTags: (postResponse) =>
        postResponse
          ? [
              ...postResponse.map(({ id }) => ({
                type: "Posts" as const,
                id,
              })),
              "Posts",
            ]
          : [],
    }),
    createPost: build.mutation<Post, CreatePostParams>({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePost: build.mutation<Post, number>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: build.mutation<Post, any>({
      query: ({ id, ...body }) => ({
        url: `posts/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postApi;
