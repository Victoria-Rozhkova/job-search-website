import { clsx } from "clsx";

export const DropdownIconStyle = clsx(
  "bg-secondary",
  "p-[7px]",
  "rounded-[100px]",
  "cursor-pointer"
);

export const DropdownStyle = clsx("relative");

export const DropdownListStyle = (show: boolean) =>
  clsx(
    "absolute",
    "top-[100%]",
    "bg-white",
    "p-[10px]",
    "origin-[50%_0]",
    "transition-transform",
    show ? "scale-y-100" : "scale-y-0"
  );

export const DropdownItemStyle = clsx(
  "cursor-pointer",
  "transition-colors",
  "hover:text-primary"
);
