import React, { FC, useState } from "react";

import Icon from "../icons";
import { AccordionProps } from "./accordion.type";
import {
  getAccordionContentStyle,
  getAccordionIconStyle,
  getAccordionTitleBlockStyle,
  getAccordionTitleStyle,
} from "./accordion.style";

const Accordion: FC<AccordionProps> = (props) => {
  const { show, title, children, variant = "small" } = props;

  const [isOpen, setOpen] = useState<boolean>(show || true);

  function onClickHandler() {
    setOpen((prev) => !prev);
  }

  return (
    <div>
      <div onClick={onClickHandler} className={getAccordionTitleBlockStyle()}>
        <h3 className={getAccordionTitleStyle(variant)}>{title}</h3>
        <Icon
          name="ArrowRight"
          size={11}
          className={getAccordionIconStyle(isOpen)}
        />
      </div>
      <div className={getAccordionContentStyle(isOpen)}>{children}</div>
    </div>
  );
};

export default Accordion;
