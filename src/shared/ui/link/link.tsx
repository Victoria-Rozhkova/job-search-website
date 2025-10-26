import React, { FC } from "react";
import { Link as LinkFromRouter } from "react-router-dom";
import { LinkProps } from "./link.type";
import { getLinkStyle } from "./link.style";

const Link: FC<LinkProps> = (props) => {
  const { to, title, variant = "small" } = props;

  return (
    <LinkFromRouter to={to} className={getLinkStyle(variant)}>
      {title}
    </LinkFromRouter>
  );
};

export default Link;
