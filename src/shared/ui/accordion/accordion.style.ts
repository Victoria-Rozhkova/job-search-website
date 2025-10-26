import clsx from "clsx";
import { TitleVariant } from "./accordion.type";

export function getAccordionTitleBlockStyle() {
  return clsx(
    "flex",
    "justify-between",
    "items-center",
    "cursor-pointer",
    "hover:opacity-90",
    "select-none"
  );
}

export function getAccordionTitleStyle(variant: TitleVariant) {
  return clsx(
    'text-pri1',
    variant === "small" ? "text-ro14med" : "text-ro18bol"
  );
}

export function getAccordionIconStyle(isOpen: boolean) {
  return clsx(
    isOpen ? "rotate-0" : "rotate-90",
    "transition",
    "duration-180",
    "text-gray_500",
    "bg-secondary",
    "p-[7px]",
    "rounded-[100px]"
  );
}

export function getAccordionContentStyle(isOpen: boolean) {
  return clsx(
    isOpen ? "h-full scale-y-100 opacity-100" : "h-0 scale-y-0 opacity-90",
    "transition",
    "origin-[50%_0]",
    "w-full"
  );
}
