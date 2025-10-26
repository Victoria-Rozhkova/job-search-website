import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Heading } from "@/shared/ui";
import { HeadingPageProps } from "./heading-page.type";

const HeadingPage: FC<HeadingPageProps> = ({ to, title, titleTo }) => {
  return (
    <>
      <Heading heading="h2" title={title} />
      <span>or</span>
      <Link to={to} className="text-2xl text-pri2 hover:underline">
        {titleTo}
      </Link>
    </>
  );
};

export default HeadingPage;
