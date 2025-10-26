import React, { FC, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Button from "../button";

import Loading from "../loading";
import {
  getModalWrapperClassName,
  getModalClassName,
  getModalTitleClassName,
  getModalCloseIconClassName,
  getModalBodyClassName,
  getModalFooterClassName,
  getModalFooterActionClassName,
} from "./modal.style";
import { ModalProps } from "./modal.type";
import { getDelay } from "@/shared/lib/helpers";
import Icon from "../icons";

const Modal: FC<ModalProps> = (props) => {
  const {
    value,
    setValue,
    title,
    footerType = "horizontal",
    size = "medium",
    children,
    onConfirm,
    confirmText,
    confirmDisabled,
    confirmButtonVariant,
    cancelText,
    cancelIcon,
    onCancel,
    cancelTypeButton = "outlined",
    loading = false,
    onClosed,
    onBack,
    handleScroll,
    cancelDisabled = false,
    isFullHeight = false,
  } = props;
  const ModalWrapperRef = useRef<HTMLDivElement | null>(null);
  const [confirmation, setConfirmation] = useState(false);
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    if (value) setShowChildren(value);
    else getDelay(100).then(() => setShowChildren(value));
  }, [value]);

  function closeModal() {
    setValue(false);
    setTimeout(() => {
      setConfirmation(false);
      onClosed?.();
    }, 100); // think how to fix it
  }

  function clickActionModal(isPrimaryAction: boolean) {
    if (isPrimaryAction) {
      onConfirm?.();
    } else {
      if (onBack) {
        onBack();
        return;
      }
      if (footerType === "confirmation") {
        // closeModal()
        setConfirmation(true);
        return;
      }
      closeModal();
    }
  }

  function shouldShowAdditionalFooterAction() {
    return confirmation || (!confirmation && cancelText);
  }

  return (
    <div
      ref={ModalWrapperRef}
      onScroll={handleScroll}
      className={getModalWrapperClassName(value)}
      style={{ zIndex: 1001 }}
      onClick={(e) => e.target === ModalWrapperRef.current && closeModal()}
    >
      <div className={getModalClassName(size)}>
        {loading && <Loading zIndex={1001} />}
        <h3 className={getModalTitleClassName()}>
          {title}
          <div
            className={getModalCloseIconClassName()}
            onClick={closeModal.bind(null)}
          >
            <Icon name="Close" size={12} />
          </div>
        </h3>
        {showChildren && (
          <div className={getModalBodyClassName(isFullHeight)}>{children}</div>
        )}
        <div className={getModalFooterClassName(footerType)}>
          {shouldShowAdditionalFooterAction() && (
            <div className={getModalFooterActionClassName(footerType)}>
              {!confirmation && cancelText && (
                <Button
                  label={cancelText}
                  variant={cancelTypeButton}
                  isFull
                  onClick={() =>
                    onCancel ? onCancel() : clickActionModal(false)
                  }
                  icon={cancelIcon}
                  iconSize={16}
                  disabled={loading || cancelDisabled}
                />
              )}
            </div>
          )}
          {confirmText && (
            <div
              className={clsx(
                getModalFooterActionClassName(footerType),
                !shouldShowAdditionalFooterAction() && "!basis-[100%]"
              )}
            >
              <Button
                label={confirmText}
                isFull
                variant={confirmButtonVariant}
                onClick={() => clickActionModal(true)}
                disabled={loading || confirmDisabled || confirmation}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
