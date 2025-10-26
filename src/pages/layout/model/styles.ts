import clsx from "clsx";

export const getLayoutStyles = () => {
  return clsx("bg-gray", "min-h-[100vh]");
};

export const getLayoutContentStyles = () => {
  return clsx(
    "flex",
    "justify-between",
    "gap-[30px]",
    "max-w-widthApp",
    "my-0",
    "mx-auto",
    "mt-[23px]"
  );
};

export const getLayoutOutletStyles = () => {
  return clsx("flex", "grow", "justify-center");
};
