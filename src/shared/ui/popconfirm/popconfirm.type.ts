import { ReactElement } from "react";

export type PopconfirmProps = {
  children: ReactElement;
  title: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  width?: number;
  disabled?: boolean;
  placement?: PopconfirmPlacement;
};

export type PopconfirmPlacement = "top" | "left" | "right" | "bottom";
