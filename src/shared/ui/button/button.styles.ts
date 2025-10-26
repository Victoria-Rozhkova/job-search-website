import clsx from "clsx";
import { ButtonVariant, SizeButton, StyleVariant } from "./button.types";

const buttonSizes: Record<ButtonVariant, Record<SizeButton, string>> = {
  filled: { small: "py-[2px]", medium: "py-[8px]", large: "py-[15px]" },
  outlined: { small: "py-[1px]", medium: "py-[7px]", large: "py-[14px]" },
};

export const buttonsVariant: Record<ButtonVariant, Record<StyleVariant, string>> = {
  filled: {
    bg: "bg-primary hover:opacity-[0.8] disabled:bg-gray_100",
    txt: "text-white disabled:disabled:text-gray_300",
    icon: "mr-[4px] ml-[-6px]",
  },
  outlined: {
    bg: "bg-white border-[1px] border-primary hover:bg-primary disabled:bg-pri-1",
    txt: "text-pri2 disabled:text-pri3",
    icon: "mr-[8px] ml-[-3px]",
  },
};

export const buttonClassName = ({
  customStyles,
  size,
  variant,
  isFull,
}: {
  customStyles: string | undefined;
  size: SizeButton;
  variant: ButtonVariant;
  isFull: boolean;
}) =>
  clsx(
    customStyles || buttonsVariant[variant].bg,
    customStyles || buttonsVariant[variant].txt,
    buttonSizes[variant][size],
    size === "small" ? "text-ro14reg" : "text-ro16reg",
    "font-medium",
    "transition",
    "no-underline",
    "tracking-wide",
    "rounded",
    "inline-flex",
    "items-center",
    isFull && "w-full justify-center"
  );
