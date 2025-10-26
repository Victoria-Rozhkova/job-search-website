import React from "react";
import clsx from "clsx";

import { IconProps } from "../icon.type";

const Document = (props: IconProps) => {
  const { size, className } = props;
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
          d="M4.50033 9H9.50033M4.50033 12.3333H9.50033M11.167 16.5H2.83366C2.39163 16.5 1.96771 16.3244 1.65515 16.0118C1.34259 15.6993 1.16699 15.2754 1.16699 14.8333V3.16667C1.16699 2.72464 1.34259 2.30072 1.65515 1.98816C1.96771 1.67559 2.39163 1.5 2.83366 1.5H7.48866C7.70965 1.50005 7.92158 1.58788 8.07783 1.74417L12.5895 6.25583C12.7458 6.41208 12.8336 6.624 12.8337 6.845V14.8333C12.8337 15.2754 12.6581 15.6993 12.3455 16.0118C12.0329 16.3244 11.609 16.5 11.167 16.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Document;
