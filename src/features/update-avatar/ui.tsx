import React, { FC, useState, MouseEvent } from "react";

import useAuth from "@/shared/hooks/use-auth";
import { Avatar } from "@/shared/ui";

import { UpdateAvatarProps } from "./model/types";

const UpdateAvatar: FC<UpdateAvatarProps> = ({ onDelete }) => {
  const auth = useAuth();

  const [showClose, setShowClose] = useState(false);

  function onMouseDocument(status: boolean) {
    if (typeof onDelete !== "function") return;
    setShowClose(status);
  }

  function deleteAvatar(e: MouseEvent<HTMLSpanElement>) {
    e.stopPropagation();
    onDelete?.();
  }

  return (
    <div
      onMouseEnter={onMouseDocument.bind(null, true)}
      onMouseLeave={onMouseDocument.bind(null, false)}
      className="bg-white rounded-full  relative"
    >
      <Avatar src={auth.user?.avatar?.data_url} size={90} variant="large" />
      {auth.user?.avatar && onDelete && (
        <div className={showClose ? "delete-upload-img" : "hidden"}>
          <span
            onClick={(e) => deleteAvatar(e)}
            className="hover:text-primary_100"
          >
            Удалить
          </span>
        </div>
      )}
    </div>
  );
};

export default UpdateAvatar;
