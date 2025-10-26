import { IconName } from "../icons/icon.type";

export type ButtonVariant = "filled" | "outlined";

export type StyleVariant = "bg" | "txt" | "icon";
export type SizeButton = "medium" | "small" | "large";

export type ButtonProps = {
  label?: string;
  disabled?: boolean;
  icon?: IconName;
  iconSize?: number;
  isFull?: boolean;
  space?: number;
  variant?: ButtonVariant;
  type?: "submit" | "button" | "reset";
  customStyles?: string;
  customIconStyles?: string;
  size?: SizeButton;
  classnames?: string;
  onClick?: () => void;
};
