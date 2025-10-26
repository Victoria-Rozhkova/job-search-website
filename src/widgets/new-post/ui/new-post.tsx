import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { Avatar, Card, Loading } from "@/shared/ui";
import { ImagesBlock } from "@/widgets/new-post";
import useAuth from "@/shared/hooks/use-auth";
import { useCreatePostMutation } from "@/shared/model/api/post.api";
import { NewPostFields, NewPostProps } from "../model/types";
import NewPostForm from "@/features/new-post-form/ui";

const NewPostWidget: FC<NewPostProps> = ({ avatarUrl }) => {
  const auth = useAuth();

  const form = useForm<NewPostFields>({
    defaultValues: { image: [], post: "" },
  });
  const { handleSubmit, reset } = form;

  const [createPost, { isLoading }] = useCreatePostMutation();

  const createNewPost = (data: NewPostFields) => {
    if (auth.user?.id && data.post.trim()) {
      createPost({
        author: auth.user,
        likes: 0,
        post: data.post,
        postImage: data.image,
      })
        .unwrap()
        .then(() => reset());
    }
  };

  return (
    <Card customStyles="mt-[9px] w-full">
      {isLoading && <Loading fullScreen />}
      <div className="flex flex-col gap-[15px] pt-[13px] pb-[31px]">
        <div className="flex gap-[10px] pl-[13px] pr-[27px]">
          <Avatar size={60} src={auth.user?.avatar?.data_url} />
          <NewPostForm form={form} onKeyDown={handleSubmit(createNewPost)} />
        </div>
        <ImagesBlock form={form} />
      </div>
    </Card>
  );
};

export default NewPostWidget;
