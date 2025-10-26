import { UseFormReturn } from "react-hook-form";

import { FileItem } from "@/shared/model/types/common.type";
import { IconName } from "@/shared/ui/icons/icon.type";

export type NewPostProps = {
  avatarUrl?: string;
};

export type LinkType = {
  id: string;
  icon: IconName;
  text: string;
};

export type NewPostFields = {
  post: string;
  image: FileItem[];
};

export type ImagesBlockProps = {
  form: UseFormReturn<NewPostFields>;
};
