import clsx from "clsx";
import { HeadingPageProps } from "./heading.type";

export function getWrapperHeadingPageClassName(
  className: string,
  heading: HeadingPageProps["heading"]
) {
  return clsx(
    heading === "h1" && "min-h-[60px]",
    "flex",
    "items-center",
    className
  );
}

export function getHeadingPageClassName(heading: HeadingPageProps["heading"]) {
  return clsx(
    heading === "h1" && "text-ro18bol",
    heading === "h2" && "text-ro24bol",
    heading === "h3" && "text-ro30bol",
    "text-pri2"
  );
}
