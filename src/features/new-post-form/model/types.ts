import { UseFormReturn } from "react-hook-form";
import { NewPostFields } from "@/widgets/new-post/model/types";

export type NewPostFormProps = {
  form: UseFormReturn<NewPostFields>;
  onKeyDown: () => void;
};
