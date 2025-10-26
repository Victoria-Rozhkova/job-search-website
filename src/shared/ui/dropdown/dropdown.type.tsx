import { ReactNode } from "react";

export type DropdownProps = {
  data: DropdownData[];
  children: ReactNode;
  showArrow?: boolean;
};

export type DropdownData = {
  id: number | string;
  title: string | ReactNode;
  to?: string;
  onClick?: (id: number | string) => void;
  setState?: boolean;
};
