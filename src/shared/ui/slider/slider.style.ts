import clsx from "clsx";

export const sliderWrapperStyles = () => {
  return clsx(
    "flex",
    "items-center",
    "justify-center",
    "bg-white",
    "rounded-[12px]",
    "p-[8px]",
    // "py-[8px]",
    // "px-[30px]",
    "relative"
  );
};

export const sliderBlockStyles = () => {
  return clsx("max-w-[614px]", "min-w-[614px]");
};

export const sliderItemsStyles = (isCount: boolean) => {
  return clsx(
    "slider",
    "flex",
    "items-center",
    isCount && "justify-center",
    "overflow-x-scroll",
    "gap-[15px]",
    "pt-[4px]",
    "px-[4px]"
  );
};

export const sliderItemStyles = () => {
  return clsx("w-[52px]", "flex", "flex-col");
};

export const sliderItemTextStyles = () => {
  return clsx("truncate", "w-[60px]", "text-center");
};
