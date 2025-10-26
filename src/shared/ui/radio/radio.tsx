import React, {
  FC,
  useState,
  useEffect,
  forwardRef,
  ForwardedRef,
  ChangeEvent,
} from "react";
import clsx from "clsx";
import { RadioProps } from "./radio.type";
import { getRadioClassName } from "./radio.style";

const Radio: FC<RadioProps> = forwardRef(
  (props, forwardedRef: ForwardedRef<HTMLInputElement>) => {
    const {
      name,
      onChange,
      id,
      label,
      checked = false,
      value,
      labelWidth,
      ...remainingProps
    } = props;
    const [fieldChecked, setChecked] = useState(false);

    useEffect(() => {
      setChecked(checked);
    }, [checked, fieldChecked]);

    function handleChangeChecked(event: ChangeEvent<HTMLInputElement>) {
      onChange?.(event);
    }

    return (
      <div className="flex items-center">
        <label htmlFor={id} className="flex items-center">
          <input
            ref={forwardedRef}
            checked={fieldChecked}
            type="radio"
            name={name}
            id={id}
            value={value}
            className={getRadioClassName()}
            onChange={handleChangeChecked}
            {...remainingProps}
          />
          {label && (
            <span
              className={clsx(
                "text-ro14reg text-gray_900 cursor-pointer pl-[8px] select-none",
                labelWidth && labelWidth
              )}
            >
              {label}
            </span>
          )}
        </label>
      </div>
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
