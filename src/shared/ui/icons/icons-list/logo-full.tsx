import React, { FC } from "react";
import clsx from "clsx";

import { IconProps } from "../icon.type";

const LogoFull: FC<IconProps> = ({ size, className }) => {
  return (
    <div className={clsx(className)}>
      <svg
        width="68"
        height="16"
        viewBox="0 0 68 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="68" height="16" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_1_261"
              transform="matrix(0.00373134 0 0 0.0158582 0 -0.0153918)"
            />
          </pattern>
          <image
            id="image0_1_261"
            width="268"
            height="65"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
};

export default LogoFull;
