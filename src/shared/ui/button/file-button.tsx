import React, { ChangeEvent, FC, ForwardedRef, forwardRef } from "react";
import { v4 } from "uuid";
import clsx from "clsx";
import { ButtonVariant, SizeButton } from "./button.types";
import { IconName } from "../icons/icon.type";
import Icon from "../icons";
import { buttonClassName } from "./button.styles";

type FileButtonProps = {
  label: string;
  space?: number;
  size?: SizeButton;
  icon?: IconName;
  variant?: ButtonVariant;
  customStyles?: string;
  isFull?: boolean;
  accept?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FileButton: FC<FileButtonProps> = forwardRef(
  (props, forwardedRef: ForwardedRef<HTMLInputElement>) => {
    const {
      label,
      space = 10,
      size = "medium",
      icon,
      customStyles,
      variant = "filled",
      isFull = false,
      onChange,
      ...remainingProps
    } = props;
    const renderLabel = icon && <Icon name={icon} size={20} />;
    const idOfFileLoader = v4();

    function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
      onChange?.(event);
    }

    return (
      <label htmlFor={idOfFileLoader}>
        <div
          className={clsx(
            buttonClassName({ customStyles, size, isFull, variant }),
            "cursor-pointer font-bold"
          )}
          style={{
            width: `${size}px`,
            paddingRight: `${space}px`,
            paddingLeft: `${space}px`,
          }}
        >
          {renderLabel}
          {label}
        </div>
        <input
          id={idOfFileLoader}
          ref={forwardedRef}
          onChange={handleOnChange}
          type="file"
          className="appearance-none hidden"
          multiple
          {...remainingProps}
        />
      </label>
    );
  }
);

FileButton.displayName = "FileButton";

export default FileButton;
