import { ReactNode } from "react";
import { ButtonProps } from "../button/button.types";
import { IconName } from "../icons/icon.type";

export type ModalProps = {
  value: boolean;
  setValue: (value: boolean) => void;
  title: string;
  footerType?: "horizontal" | "vertical" | "confirmation";
  size?: "small" | "medium" | "large";
  children: ReactNode;
  onConfirm?: () => void;
  confirmText?: string;
  confirmDisabled?: boolean;
  confirmButtonVariant?: ButtonProps["variant"];
  cancelText?: string;
  cancelIcon?: IconName | undefined;
  cancelTypeButton?: ButtonProps["variant"];
  onCancel?: () => void;
  loading?: boolean;
  cancelDisabled?: boolean;
  onClosed?: () => void;
  onBack?: () => void;
  handleScroll?: (e: any) => void;
  isFullHeight?: boolean;
};
