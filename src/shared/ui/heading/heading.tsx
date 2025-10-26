import React, { FC } from "react";
import {
  getHeadingPageClassName,
  getWrapperHeadingPageClassName,
} from "./heading.style";
import { HeadingPageProps } from "./heading.type";

const Heading: FC<HeadingPageProps> = (props) => {
  const { title, className = "", heading = "h1" } = props;

  return (
    <div className={getWrapperHeadingPageClassName(className, heading)}>
      {React.createElement(
        heading,
        { className: getHeadingPageClassName(heading) },
        title
      )}
    </div>
  );
};

export default Heading;
