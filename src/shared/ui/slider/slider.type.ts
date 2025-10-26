import { ReactNode } from "react";
export type SliderProps = {
  data: SliderData[];
  loading?: boolean;
};

export type SliderData = {
  id: number | string;
  name: string;
  image: string;
};

export type ScrollableProps = {
  _class?: string;
  data: SliderData[];
  children: ReactNode;
};
