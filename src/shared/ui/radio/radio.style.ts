import clsx from "clsx";

export function getRadioClassName() {
  return clsx(
    "relative",
    "appearance-none",
    "cursor-pointer",
    "bg-white",
    "m-0",
    "p-0",
    "text-current",
    "w-[13px]",
    "h-[13px]",
    "rounded-full",
    "border-[1.2px]",
    "border-secondary",

    'after:content-[""]',
    "after:bg-primary",
    "after:inset-[50%]",
    "after:translate-x-[-50%]",
    "after:translate-y-[-50%]",
    "after:absolute",
    "after:w-[8px]",
    "after:h-[8px]",
    "after:rounded-full",
    "after:scale-0",
    "after:transition-transform",
    "checked:after:scale-100",

    "checked:border-primary"
  );
}
