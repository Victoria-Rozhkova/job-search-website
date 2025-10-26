import { ReactNode } from "react";

export type HeadingPageProps = {
  title: string | ReactNode;
  className?: string;
  heading?: "h1" | "h2" | "h3";
};
