import React, { FC } from "react";
import clsx from "clsx";

import { IconProps } from "../icon.type";

const ArrowRight: FC<IconProps> = ({ size, className }) => {
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
          d="M0.575769 1.15056C0.354569 0.916348 0.365069 0.54715 0.599336 0.325938C0.833544 0.104727 1.20274 0.115268 1.42394 0.349488L6.38244 5.59951C6.59478 5.82426 6.59478 6.17572 6.3825 6.40054L1.42394 11.6514C1.20279 11.8856 0.833602 11.8962 0.599336 11.675C0.365127 11.4538 0.354511 11.0846 0.575711 10.8504L5.15599 6.00008L0.575769 1.15056Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default ArrowRight;
