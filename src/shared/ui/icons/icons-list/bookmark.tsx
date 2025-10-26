import React, { FC } from "react";
import clsx from "clsx";

import { IconProps } from "../icon.type";

const Bookmark: FC<IconProps> = ({ size, className }) => {
  return (
    <div className={clsx(className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 18L7 13L0 18V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H12C12.5304 0 13.0391 0.210714 13.4142 0.585786C13.7893 0.960859 14 1.46957 14 2V18Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};
export default Bookmark;
