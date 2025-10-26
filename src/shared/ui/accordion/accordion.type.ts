import { ReactNode } from "react";

export type AccordionProps = {
  title: string;
  children: ReactNode;
  show?: boolean;
  variant?: TitleVariant;
};

export type TitleVariant = "small" | "medium";
