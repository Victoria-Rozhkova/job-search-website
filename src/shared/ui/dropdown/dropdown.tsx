import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import {
  DropdownIconStyle,
  DropdownItemStyle,
  DropdownListStyle,
  DropdownStyle,
} from "./dropdown.style";
import { DropdownProps } from "./dropdown.type";
import { useProxyState } from "@/shared/hooks";
import Icon from "../icons";

const Dropdown: FC<DropdownProps> = ({ data, children, showArrow = true }) => {
  const state = useProxyState({ show: false });

  return (
    <div className={DropdownStyle}>
      <div
        onClick={() => (state.show = !state.show)}
        className="flex items-center justify-center gap-[10px] cursor-pointer select-none"
      >
        {children}
        {showArrow && (
          <div className={DropdownIconStyle}>
            <Icon
              className={clsx(state.show ? "rotate-0" : "rotate-90")}
              name="ArrowRight"
              size={11}
            />
          </div>
        )}
      </div>
      <div className={DropdownListStyle(state.show)}>
        {data.map((item) => {
          return (
            <div key={item.id} className={DropdownItemStyle}>
              {item.to ? (
                <NavLink to={item.to}>{item.title}</NavLink>
              ) : (
                <div
                  onClick={() => {
                    item.onClick?.(item.id);
                    if (item?.setState) {
                      state.show = !state.show;
                    }
                  }}
                >
                  {item.title}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Dropdown;
