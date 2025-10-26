import clsx from "clsx";
import { PopconfirmPlacement } from "./popconfirm.type";

export function getPopconfirmWrapperClassName(
  value: boolean,
  placement: PopconfirmPlacement
) {
  return clsx(
    "absolute",
    "z-[1000]",
    value ? "visible opacity-100 scale-y-100" : "invisible opacity-0 scale-y-0",
    "transition-all",
    "flex",
    "flex-col",
    "bg-white",
    "border",
    "border-pri3",
    "shadow-ft",
    "p-[12px]",
    "rounded-[8px]",
    placement === "left"
      ? `top-[50%] left-[-10px] translate-x-[-100%] translate-y-[-50%] origin-top`
      : "",
    placement === "right"
      ? `top-[50%] right-[-10px] translate-x-[100%] translate-y-[-50%] origin-top`
      : "",
    placement === "top"
      ? `left-[50%] top-[-12px] translate-x-[-50%] translate-y-[-100%] origin-bottom`
      : "",
    placement === "bottom"
      ? `left-[50%] bottom-[-12px] translate-x-[-50%] translate-y-[100%] origin-top`
      : ""
  );
}

export function getPopconfirmWrapperPointerClassName(
  placement: PopconfirmPlacement
) {
  return clsx(
    "w-[12px]",
    "h-[12px]",
    "border-l",
    "border-b",
    "border-l-pri3",
    "border-b-pri3",
    "bg-white",
    "absolute",
    placement === "left" ? "rotate-[220deg] right-[-6px] top-[calc(50%-6px)]" : "",
    placement === "right" ? "rotate-45 left-[-6px] top-[calc(50%-6px)]" : "",
    placement === "top" ? "rotate-45 bottom-[-6px] left-[calc(50%-6px)]" : "",
    placement === "bottom" ? "rotate-45 top-[-6px] left-[calc(50%-6px)]" : ""
  );
}

export function getPopconfirmTitleClassName() {
  return clsx("ml-[8px]", "text-[14px]");
}

export function getPopconfirmCancelButtonClassName() {
  return clsx(
    "text-[14px]",
    "px-[7px]",
    "rounded-[4px]",
    "hover:bg-primary hover:text-white"
  );
}

export function getPopconfirmOkButtonClassName() {
  return clsx(
    "text-[14px]",
    "px-[7px]",
    "rounded-[4px]",
    "hover:bg-red hover:text-white"
  );
}
