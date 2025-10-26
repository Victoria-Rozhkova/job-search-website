import clsx from "clsx";
import React, { FC, useEffect, useRef, useState } from "react";

import {
  getPopconfirmWrapperClassName,
  getPopconfirmTitleClassName,
  getPopconfirmWrapperPointerClassName,
  getPopconfirmCancelButtonClassName,
  getPopconfirmOkButtonClassName,
} from "./popconfirm.styles";
import { PopconfirmProps } from "./popconfirm.type";

const Popconfirm: FC<PopconfirmProps> = (props) => {
  const {
    children,
    title,
    cancelText = "No",
    okText = "Yes",
    onConfirm,
    onCancel,
    width = 150,
    disabled = false,
    placement = "bottom",
  } = props;
  const popconfirmRef = useRef<HTMLDivElement>(null);

  const [showPopconfirm, setShowPopconfirm] = useState<boolean>(false);

  useEffect(() => {
    if (!showPopconfirm) return;
    const handleClick = (e: Event) => {
      if (!popconfirmRef.current?.contains(e.target as HTMLElement)) {
        setShowPopconfirm(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [showPopconfirm]);

  return (
    <div ref={popconfirmRef} className="relative inline-block">
      <div
        onClick={() => {
          if (disabled) return;
          setShowPopconfirm(!showPopconfirm);
        }}
      >
        {children}
      </div>
      <div
        style={{ width: `${width}px` }}
        className={getPopconfirmWrapperClassName(showPopconfirm, placement)}
      >
        <div className={getPopconfirmWrapperPointerClassName(placement)}></div>
        <div className="flex justify-center mb-[8px]">
          {/* <Icon
            name="ArrowDown"
            size={15}
            className="text-primary_100 flex items-center text-pri1"
          /> */}
          <h4 className={getPopconfirmTitleClassName()}>{title}</h4>
        </div>
        <div className={clsx("flex justify-center gap-[10px]")}>
          <button
            className={getPopconfirmCancelButtonClassName()}
            onClick={() => {
              onCancel?.();
              setShowPopconfirm(false);
            }}
          >
            {cancelText}
          </button>
          <button
            className={getPopconfirmOkButtonClassName()}
            onClick={() => {
              onConfirm?.();
              setShowPopconfirm(false);
            }}
          >
            {okText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popconfirm;
