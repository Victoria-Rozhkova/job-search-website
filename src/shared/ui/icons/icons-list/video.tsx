import React, { FC } from "react";
import clsx from "clsx";

import { IconProps } from "../icon.type";

const Video: FC<IconProps> = ({ size, className }) => {
  return (
    <div className={clsx(className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0.833344C4.93999 0.833344 0.833328 4.94001 0.833328 10C0.833328 15.06 4.93999 19.1667 10 19.1667C15.06 19.1667 19.1667 15.06 19.1667 10C19.1667 4.94001 15.06 0.833344 10 0.833344ZM8.16666 14.125V5.87501L13.6667 10L8.16666 14.125Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Video;
