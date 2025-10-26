import { ChangeEvent, KeyboardEvent } from "react";
import { IconName } from "../icons/icon.type";

export type InputProps = {
  placeholder: string;
  beforeIcon?: IconName;
  icon?: IconName;
  type?: string;
  defaultValue?: string;
  autoFocus?: boolean;
  label?: string;
  error?: string;
  value?: string;
  onIconClick?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
};
