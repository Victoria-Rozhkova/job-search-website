import React, { FC } from "react";

import { CardProps } from "./card.type";
import { CardStyle } from "./card.style";

const Card: FC<CardProps> = ({ children, customStyles }) => {
  return <div className={CardStyle(customStyles)}>{children}</div>;
};

export default Card;
