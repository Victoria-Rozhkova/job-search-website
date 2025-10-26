import React, { FC, KeyboardEvent } from "react";

import { Input } from "@/shared/ui";
import { NewPostFormProps } from "../model/types";

const NewPostForm: FC<NewPostFormProps> = ({ form, onKeyDown }) => {
  const { register } = form;

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      onKeyDown();
    }
  };

  return (
    <div className="w-[520px]">
      <Input
        {...register("post")}
        placeholder="Start a post"
        onKeyDown={onKeyDownHandler}
      />
    </div>
  );
};

export default NewPostForm;
