import React from "react";
import clsx from "clsx";

import { IconProps } from "../icon.type";

const NewDocument = (props: IconProps) => {
  const { size, className } = props;
  return (
    <div className={clsx(className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 21 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.50033 14.3333H14.5003M10.5003 10.3333V18.3333M17.167 25H3.83366C3.12641 25 2.44814 24.719 1.94804 24.219C1.44794 23.7189 1.16699 23.0406 1.16699 22.3333V3.66667C1.16699 2.95942 1.44794 2.28115 1.94804 1.78105C2.44814 1.28095 3.12641 1 3.83366 1H11.2817C11.6353 1.00008 11.9743 1.1406 12.2243 1.39067L19.443 8.60933C19.6931 8.85932 19.8336 9.19841 19.8337 9.552V22.3333C19.8337 23.0406 19.5527 23.7189 19.0526 24.219C18.5525 24.719 17.8742 25 17.167 25Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default NewDocument;
