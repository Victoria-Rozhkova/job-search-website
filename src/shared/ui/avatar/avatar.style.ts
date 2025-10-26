import clsx from "clsx";
import { AvatarVariant } from "./avatar.types";

export function getDefaultAvatarStyle(variant?: AvatarVariant) {
  return clsx(
    "inline-block rounded-full bg-white flex items-center justify-center",
    variant === "large" && "ring-[6px] ring-gray",
    variant === "medium" && "ring-[4px] ring-[rgba(52, 86, 255, 0.5)]",
    variant === "small" && "ring-[2.5px] ring-[rgba(219, 231, 255, 1)]"
  );
}

export function getAvatarStyle(variant?: AvatarVariant) {
  return clsx(
    "inline-block rounded-full object-cover",
    variant === "large" && "ring-[6px] ring-gray",
    variant === "medium" && "ring-[4px] ring-[rgba(52, 86, 255, 0.5)]",
    variant === "small" && "ring-[2.5px] ring-[rgba(219, 231, 255, 1)]"
  );
}
