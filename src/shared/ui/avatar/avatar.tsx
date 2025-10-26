import React, { FC } from "react";
import { getAvatarStyle, getDefaultAvatarStyle } from "./avatar.style";
import { AvatarProps } from "./avatar.types";
import Icon from "../icons";

const Avatar: FC<AvatarProps> = (props) => {
  const { src, alt = "avatar", size = 50, variant } = props;

  if (!src)
    return (
      <div className={getDefaultAvatarStyle(variant)}>
        <Icon name="Avatar" size={size} className="cursor-pointer" />
      </div>
    );
  return (
    <img
      style={{ width: `${size}px`, height: `${size}px` }}
      className={getAvatarStyle(variant)}
      src={src}
      alt={alt}
    />
  );
};

export default Avatar;
