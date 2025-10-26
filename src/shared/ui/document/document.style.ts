import clsx from "clsx";

export function getDocumentClassName() {
  return clsx(
    "flex",
    "items-center",
    "p-[8px]",
    "relative",
    "cursor-pointer",
    "mr-[15px]",
    "rounded-[8px]",
    "hover:bg-gray"
  );
}

export function getDocumentTitleClassName() {
  return clsx("inline-block", "grow", "pl-[8px]", "text-pri1");
}
