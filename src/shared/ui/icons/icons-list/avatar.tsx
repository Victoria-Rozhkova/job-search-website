import React, { FC } from "react";
import clsx from "clsx";

import { IconProps } from "../icon.type";

const Avatar: FC<IconProps> = ({ size, className }) => {
  return (
    <div className={clsx(className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_287_2243)">
          <circle cx="18" cy="18" r="18" fill="#E6E6E6" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 20C19.5913 20 21.1174 19.3679 22.2426 18.2426C23.3679 17.1174 24 15.5913 24 14C24 12.4087 23.3679 10.8826 22.2426 9.75736C21.1174 8.63214 19.5913 8 18 8C16.4087 8 14.8826 8.63214 13.7574 9.75736C12.6321 10.8826 12 12.4087 12 14C12 15.5913 12.6321 17.1174 13.7574 18.2426C14.8826 19.3679 16.4087 20 18 20ZM4 38C4 36.1615 4.36212 34.341 5.06569 32.6424C5.76925 30.9439 6.80048 29.4005 8.1005 28.1005C9.40053 26.8005 10.9439 25.7693 12.6424 25.0657C14.341 24.3621 16.1615 24 18 24C19.8385 24 21.659 24.3621 23.3576 25.0657C25.0561 25.7693 26.5995 26.8005 27.8995 28.1005C29.1995 29.4005 30.2307 30.9439 30.9343 32.6424C31.6379 34.341 32 36.1615 32 38H4Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_287_2243">
            <rect width="36" height="36" rx="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Avatar;
