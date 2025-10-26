import clsx from "clsx";

export function getDragUploadClassName(isDrag: boolean) {
  return clsx(
    "w-full",
    "h-max",
    "flex",
    "justify-center",
    "items-center",
    "px-[21.5px]",
    "py-[29px]",
    "bg-white",
    "border",
    "border-dashed",
    "rounded-[8px]",
    "cursor-pointer",
    "hover:border-primary",
    isDrag ? "border-primary" : "border-gray_300"
  );
}

export function getDragUploadDescriptionClassName() {
  return clsx("block", "text-paragraph-l", "text-gray_700", "mb-[4px]");
}

export function getDragUploadInputClassName() {
  return clsx("opacity-0", "absolute", "z-[-1]");
}

export function getDragUploadLabelClassName() {
  return clsx("text-gray_600", "text-paragraph_l");
}
