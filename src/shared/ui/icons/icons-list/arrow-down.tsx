import React, { FC } from "react";
import clsx from "clsx";

import { IconProps } from "../icon.type";

const ArrowDown: FC<IconProps> = ({ size, className }) => {
  return (
    <div className={clsx(className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9033 0.612402C11.1359 0.389533 11.5052 0.397393 11.728 0.630072C11.9509 0.862692 11.943 1.23195 11.7104 1.45482L6.49596 6.45074C6.27273 6.66467 5.92128 6.66719 5.69495 6.45652L0.408814 1.53563C0.172973 1.31617 0.159774 0.947059 0.379294 0.711217C0.598813 0.475433 0.96792 0.462177 1.2037 0.681697L6.08663 5.22717L10.9033 0.612402Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default ArrowDown;
