import React from "react";

import { useGetPostsQuery } from "@/shared/model/api/post.api";
import PostItem from "./post";

const Posts = () => {
  const { data } = useGetPostsQuery(null);

  return (
    <>
      <div className="flex justify-between my-[15px]">
        <div className="text-ro14reg text-pri1">News</div>
        <div className="border-t border-pri1 h-[10px] w-[77%] mt-[10px]"></div>
        <div className="text-ro14reg text-pri1">Popular</div>
      </div>
      <PostItem posts={data || []} />
    </>
  );
};

export default Posts;
