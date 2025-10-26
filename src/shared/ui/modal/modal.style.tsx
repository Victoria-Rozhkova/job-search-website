import clsx from "clsx";
import { ModalProps } from "./modal.type";

export function getModalWrapperClassName(value: boolean) {
  return clsx(
    "fixed",
    "inset-0",
    "z-[1000]",
    "flex",
    "overflow-y-auto",
    value ? "visible opacity-100" : "invisible opacity-0",
    "transition-all",
    "flex",
    "justify-center",
    // 'items-center',
    "bg-black/50"
  );
}

export function getModalClassName(size: ModalProps["size"]) {
  return clsx(
    "relative",
    // 'max-h-[75vh]',
    // 'min-h-[388px]',
    "min-h-[200px]",
    size === "small" && "w-[380px]",
    size === "medium" && "w-[480px]",
    size === "large" && "w-[580px]",
    "flex",
    "flex-col",
    "bg-white",
    "rounded-[12px]",
    "shadow-ft",
    "px-[24px]",
    "pb-[24px]",
    "pt-[16px]",
    "mt-[16px]",
    "m-auto",
    "text-paragraph_l",
    "text-gray_600",
    "max-h-[calc(100vh-33px)]"
  );
}

export function getModalTitleClassName() {
  return clsx(
    "sticky",
    "top-0",
    "z-10",
    "text-heading_h3",
    "text-gray_900",
    "bg-white",
    "py-[8px]"
  );
}

export function getModalCloseIconClassName() {
  return clsx("absolute", "top-[16px]", "right-[16px]", "cursor-pointer");
}

export function getModalBodyClassName(isFullHeight: boolean) {
  return clsx(
    "grow",
    "pt-[8px]",
    "break-words",
    isFullHeight && "overflow-y-auto",
    "pr-[10px]"
  );
}

export function getModalFooterClassName(type: ModalProps["footerType"]) {
  return clsx(
    "sticky",
    "bottom-0",
    "z-[1000]",
    "flex",
    type !== "horizontal" && "flex-col-reverse",
    "items-center",
    "justify-center",
    "py-[8px]",
    "bg-white"
  );
}

export function getModalFooterActionClassName(type: ModalProps["footerType"]) {
  return clsx(
    type === "horizontal"
      ? "first:mr-[12px] basis-[50%]"
      : "w-full last:mb-[12px]"
  );
}

export function getModalFooterAdditionalConfirmationClassName() {
  return clsx("flex", "items-center");
}

export function getModalFooterAdditionalQuestionConfirmationClassName() {
  return clsx("grow", "text-gray_900", "mr-[12px]");
}

export function getModalFooterAdditionalConfirmActionClassName() {
  return clsx("mr-[12px] basis-[33%]");
}

export function getModalFooterAdditionalCancelActionClassName() {
  return clsx("basis-[33%]");
}
