import React, { FC } from "react";
import clsx from "clsx";

import { IconProps } from "../icon.type";

const ArrowLeft: FC<IconProps> = ({ size, className }) => {
  return (
    <div className={clsx(className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.42426 10.8494C6.64546 11.0837 6.63496 11.4528 6.40069 11.6741C6.16649 11.8953 5.79729 11.8847 5.57609 11.6505L0.617588 6.40049C0.405254 6.17574 0.405253 5.82428 0.617528 5.59946L5.57609 0.348644C5.79724 0.114378 6.16643 0.103819 6.40069 0.325019C6.6349 0.546219 6.64552 0.915411 6.42432 1.14962L1.84405 5.99992L6.42426 10.8494Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default ArrowLeft;
