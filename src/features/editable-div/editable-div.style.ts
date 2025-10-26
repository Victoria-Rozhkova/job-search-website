import clsx from "clsx";

export function getTextStyle(isText: boolean) {
  return clsx(
    "pt-[10px] pb-[23px] text-center text-ro12reg",
    isText ? "text-pri2" : "text-pri3"
  );
}
