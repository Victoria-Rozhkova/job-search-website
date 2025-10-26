import React, { FC } from "react";

import Scrollable from "@/shared/hooks/scrollable";
import Avatar from "../avatar";
import {
  sliderBlockStyles,
  sliderItemStyles,
  sliderItemTextStyles,
  sliderItemsStyles,
  sliderWrapperStyles,
} from "./slider.style";
import { SliderProps } from "./slider.type";
import Loading from "../loading";

const Slider: FC<SliderProps> = ({ data, loading }) => {
  if (loading) return <Loading />;

  return data.length ? (
    <section className={sliderWrapperStyles()}>
      <div className={sliderBlockStyles()}>
        <Scrollable
          _class={sliderItemsStyles(data.length < 9)}
          data={data}
        >
          {data.map((elem) => {
            const { name, image, id } = elem;
            return (
              <div className={sliderItemStyles()} key={id}>
                <Avatar src={image} size={52} variant="medium" />
                <div className={sliderItemTextStyles()}>{name}</div>
              </div>
            );
          })}
        </Scrollable>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Slider;
