import React, { FC } from "react";
import { Outlet } from "react-router";

import Header from "@/widgets/header";
import { LeftLayoutBlock } from "./left-block";
import { RightLayoutBlock } from "./right-block";
import {
  getLayoutContentStyles,
  getLayoutOutletStyles,
  getLayoutStyles,
} from "./model/styles";

const Layout: FC = () => {
  return (
    <div className={getLayoutStyles()}>
      <Header />
      <div className={getLayoutContentStyles()}>
        <LeftLayoutBlock />
        <div className={getLayoutOutletStyles()}>
          <Outlet />
        </div>
        <RightLayoutBlock />
      </div>
    </div>
  );
};

export default Layout;
