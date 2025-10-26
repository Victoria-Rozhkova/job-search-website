import React, { FC } from "react";
import clsx from "clsx";

import { IconProps } from "../icon.type";

const MinusCircle: FC<IconProps> = ({ size, className }) => {
  return (
    <div className={clsx(className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_280)">
          <path
            d="M7.00001 12.8333C10.2217 12.8333 12.8333 10.2217 12.8333 6.99999C12.8333 3.77833 10.2217 1.16666 7.00001 1.16666C3.77834 1.16666 1.16667 3.77833 1.16667 6.99999C1.16667 10.2217 3.77834 12.8333 7.00001 12.8333Z"
            fill="currentColor"
            stroke="currentColor"
            strokeOpacity="0.75"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.66667 7H9.33334"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_280">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default MinusCircle;
