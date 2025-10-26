import clsx from "clsx";
import { LinkVariant } from "./link.type";

export function getLinkStyle(variant: LinkVariant) {
  return clsx(
    "hover:font-bold",
    variant === "small" && "text-ro12med text-green1",
    variant === "medium" && "text-ro14med text-green2"
  );
}
