import React, { forwardRef, ForwardedRef, ChangeEvent } from "react";
import clsx from "clsx";

import { InputProps } from "./input.types";
import Icon from "../icons";
import Error from "../error";

const Input = forwardRef(
  (props: InputProps, forwardedRef: ForwardedRef<HTMLInputElement>) => {
    const {
      placeholder,
      beforeIcon,
      icon,
      error,
      defaultValue,
      label = "",
      type = "text",
      autoFocus = false,
      onIconClick,
      onChange,
      onBlur,
      ...rest
    } = props;

    function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
      onChange?.(event);
    }

    function handleOnBlur(event: ChangeEvent<HTMLInputElement>) {
      onBlur?.(event);
    }

    return (
      <>
        <label className="flex flex-col gap-[5px]">
          <span className="text-pri2 text-ro16reg">{label}</span>
          <div
            className={clsx(
              "flex items-center justify-center px-[30px] py-[15px] pr-[45px] bg-gray rounded-[25px] relative",
              !!error && "outline outline-1 outline-red"
            )}
          >
            {beforeIcon && (
              <div className="mr-[15px]">
                <Icon name={beforeIcon} size={16} />
              </div>
            )}
            <input
              ref={forwardedRef}
              defaultValue={defaultValue}
              className={clsx("bg-gray outline-none w-[488px]")}
              placeholder={placeholder}
              type={type}
              autoFocus={autoFocus}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              {...rest}
            />
            {icon && (
              <div
                onClick={onIconClick}
                className="text-slate-300 absolute top-[18px] right-[20px]"
              >
                <Icon name={icon} size={16} />
              </div>
            )}
          </div>
        </label>
        <Error error={error} />
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;
