import React, { FC } from "react";
import clsx from "clsx";

import { IconProps } from "../icon.type";

const Article: FC<IconProps> = ({ size, className }) => {
  return (
    <div className={clsx(className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.4167 0.75H2.58333C1.575 0.75 0.75 1.575 0.75 2.58333V15.4167C0.75 16.425 1.575 17.25 2.58333 17.25H15.4167C16.425 17.25 17.25 16.425 17.25 15.4167V2.58333C17.25 1.575 16.425 0.75 15.4167 0.75ZM10.8333 13.5833H4.41667V11.75H10.8333V13.5833ZM13.5833 9.91667H4.41667V8.08333H13.5833V9.91667ZM13.5833 6.25H4.41667V4.41667H13.5833V6.25Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Article;
