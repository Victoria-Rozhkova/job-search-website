import React from "react";
import clsx from "clsx";

import { IconProps } from "../icon.type";

const ErrorCircle = (props: IconProps) => {
  const { size, className } = props;
  return (
    <div className={clsx(className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5.667V9m0 3.333h.008M16.5 9a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
        ></path>
      </svg>
    </div>
  );
};

export default ErrorCircle;
