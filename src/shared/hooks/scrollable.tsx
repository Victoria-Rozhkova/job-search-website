import React, { FC, useEffect, useRef, useState } from "react";

import { Icon } from "../ui";
import { ScrollableProps } from "../ui/slider/slider.type";

const Scrollable: FC<ScrollableProps> = (props) => {
  const { _class, children, data } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState(0);

  const scrollLeft = () => {
    if (ref.current) {
      ref.current.scrollTo({
        left: value + -110 * 4,
        behavior: "smooth",
      });
      if (value > 0) {
        setValue((prev) => {
          const val = prev + -110 * 4;
          if (val < 0) {
            return 0;
          }
          return val;
        });
      }
    }
  };

  const right =
    (ref?.current && ref?.current?.scrollWidth - ref?.current?.offsetWidth) ||
    1;

  const scrollRight = () => {
    if (ref.current) {
      ref.current.scrollTo({
        left: value + 110 * 4,
        behavior: "smooth",
      });

      if (value < right) {
        setValue((prev) => {
          const val = prev + 110 * 4;
          if (val > right) {
            return right;
          }
          return val;
        });
      }
    }
  };

  useEffect(() => {
    const el = ref.current;

    if (el) {
      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 4,
          behavior: "smooth",
        });
        setValue(el.scrollLeft + e.deltaY * 4);
      };
      el.addEventListener("wheel", onWheel);

      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  useEffect(() => {
    if (value < 0) {
      setValue(0);
    } else if (value > right) {
      setValue(right);
    }
  }, [value]);

  const getDataCount = data.length > 9;

  const isShowLeftArrow = () => {
    return getDataCount && value <= right && value !== 0;
  };

  const isShowRightArrow = () => {
    return getDataCount && value < right && value >= 0;
  };

  return (
    <div ref={ref} className={_class}>
      {isShowLeftArrow() && (
        <div
          onClick={scrollLeft}
          className="absolute left-[4px] cursor-pointer"
        >
          <Icon
            name="ArrowLeft"
            size={11}
            className="bg-secondary hover:bg-primary p-[7px] rounded-[100px]"
          />
        </div>
      )}
      {children}
      {isShowRightArrow() && (
        <div
          onClick={scrollRight}
          className="absolute right-[4px] cursor-pointer"
        >
          <Icon
            name="ArrowRight"
            size={11}
            className="bg-secondary hover:bg-primary p-[7px] rounded-[100px]"
          />
        </div>
      )}
    </div>
  );
};

export default Scrollable;
