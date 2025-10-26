import { FileItem } from "@/shared/model/types/common.type";
import { ReactNode } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export type UploadProps = {
  value: FileItem[] | FileItem | null;
  description?: ReactNode;
  label?: string;
  accept?: string;
  elem?: ReactNode;
  showDocument?: boolean;
  onChange: (fileList: any) => void;
  onDelete?: (file: FileItem[]) => void;
  multiple?: boolean;
  drag?: boolean;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  url?: string;
  removable?: boolean;
};
