import React, { FC } from "react";
import clsx from "clsx";

import { IconProps } from "../icon.type";

const Message: FC<IconProps> = ({ size, className }) => {
  return (
    <div className={clsx(className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.00002 12C2.00002 6.47716 6.47718 2 12 2C17.5229 2 22 6.47716 22 12C22 17.5228 17.5229 22 12 22C10.2547 22 8.61136 21.552 7.18148 20.7644L3.29118 21.9484C2.93788 22.056 2.55406 21.96 2.29292 21.6988C2.03178 21.4378 1.93582 21.0538 2.04336 20.7006L3.22868 16.8059C2.44536 15.379 2.00002 13.7402 2.00002 12ZM8 11C8 11.5523 8.44772 12 9 12H15C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10H9C8.44772 10 8 10.4477 8 11ZM9 14C8.44772 14 8 14.4477 8 15C8 15.5523 8.44772 16 9 16H13C13.5523 16 14 15.5523 14 15C14 14.4477 13.5523 14 13 14H9Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Message;
