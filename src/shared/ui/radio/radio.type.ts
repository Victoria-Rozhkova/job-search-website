import { ReactNode } from "react";
import { ChangeEvent } from "react";

export type RadioProps = {
  checked?: boolean;
  name: string;
  value: string | number | readonly string[] | undefined;
  labelWidth?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label?: string | ReactNode;
};
