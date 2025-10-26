import React, { FC } from "react";
import { v4 } from "uuid";

import { Document, Icon, Upload } from "@/shared/ui";
import { ImagesBlockProps, LinkType } from "../model/types";

const ImagesBlock: FC<ImagesBlockProps> = ({ form }) => {
  const { register, setValue, watch } = form;

  const links: LinkType[] = [
    // { id: v4(), icon: "Image", text: "Photo" },
    { id: v4(), icon: "Video", text: "Videos" },
    { id: v4(), icon: "Business", text: "Working" },
    { id: v4(), icon: "Article", text: "Create Article" },
  ];

  function deleteDocument(index: number) {
    let cloneValue = null;

    cloneValue = [...watch().image];
    cloneValue.splice(index, 1);

    setValue("image", cloneValue);
  }

  return (
    <>
      <div>
        {watch()?.image.map((img, index) => {
          return (
            <Document
              key={img?.data_url}
              title={img?.name}
              url={img?.data_url}
              onDelete={() => deleteDocument(index)}
            />
          );
        })}
      </div>
      <div className="flex justify-between pl-[23px] pr-[42px] items-end">
        <Upload
          {...register("image")}
          value={watch().image}
          multiple
          showDocument={false}
          onChange={(value) => setValue("image", value)}
          drag={false}
          elem={
            <div className="flex items-center gap-[5px] cursor-pointer">
              <Icon
                name="Image"
                size={16}
                className="inline-block text-white bg-secondary hover:bg-primary rounded-[15px] p-[7px]"
              />
              <span className="text-pri2 text-ro14reg">Photo</span>
            </div>
          }
        />
        {links.map((link) => {
          return (
            <div
              key={link.id}
              className="flex items-center gap-[5px] cursor-pointer"
            >
              <Icon
                name={link.icon}
                size={16}
                className="inline-block text-white bg-secondary hover:bg-primary rounded-[15px] p-[7px]"
              />
              <span className="text-pri2 text-ro14reg">{link.text}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImagesBlock;
