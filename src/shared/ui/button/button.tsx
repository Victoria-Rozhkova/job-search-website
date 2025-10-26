import React, { FC } from "react";
import clsx from "clsx";
import { ButtonProps } from "./button.types";
import { buttonClassName, buttonsVariant } from "./button.styles";
import Icon from "../icons";

const Button: FC<ButtonProps> = (props) => {
  const {
    label,
    disabled,
    icon,
    customIconStyles,
    iconSize = 24,
    isFull = false,
    space = 38,
    type = "button",
    variant = "filled",
    customStyles,
    size = "medium",
    onClick,
    classnames,
  } = props;

  const buttonSpacingStyle = {
    paddingLeft: `${space}px`,
    paddingRight: `${space}px`,
  };

  const renderIcon = icon && (
    <div className={clsx(buttonsVariant[variant].icon, customIconStyles)}>
      <Icon
        name={icon}
        size={iconSize}
        className={clsx(customStyles || buttonsVariant[variant].txt)}
      />
    </div>
  );

  return (
    <div>
      <button
        type={type}
        onClick={onClick?.bind(null)}
        disabled={disabled}
        className={clsx(buttonClassName({ variant, size, customStyles, isFull }), classnames)}
        style={buttonSpacingStyle}
      >
        {renderIcon}
        {label}
      </button>
    </div>
  );
};

export default Button;
