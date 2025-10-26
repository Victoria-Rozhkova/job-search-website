import clsx from "clsx";

export const CardStyle = (customStyles?: string) => {
  return clsx(
    "w-[292px]",
    "rounded-[32px]",
    "overflow-hidden",
    "bg-white",
    customStyles
  );
};
