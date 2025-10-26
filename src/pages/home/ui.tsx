import React from "react";

import { Slider } from "@/shared/ui";
import { NewPostWidget } from "@/widgets/new-post";
import Posts from "@/widgets/posts";
import { useGetUsersQuery } from "@/shared/model/api/user.api";
import useAuth from "@/shared/hooks/use-auth";

const HomePage = () => {
  const auth = useAuth();

  const { data, isLoading } = useGetUsersQuery({});

  return (
    <div>
      <Slider
        data={
          data
            ?.filter((user) => user.id !== auth.user?.id)
            .map((user) => ({
              id: user.id,
              name: user.firstname || "No name",
              image: user.avatar?.data_url || "",
            })) || []
        }
        loading={isLoading}
      />
      <NewPostWidget />
      <Posts />
    </div>
  );
};

export default HomePage;
