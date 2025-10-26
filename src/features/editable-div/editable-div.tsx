import React, { useState, FC, KeyboardEvent } from "react";

import { Input } from "@/shared/ui";
import { EditableDivProps } from "./editable-div.type";
import { getTextStyle } from "./editable-div.style";

const EditableDiv: FC<EditableDivProps> = (props) => {
  const { text, onSubmit } = props;

  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(text || "");

  const changeEditMode = (status: boolean) => {
    setEditMode(status);
  };

  const activateEditMode = () => {
    changeEditMode(true);
    setValue(text);
  };

  const onEditHandler = () => {
    setEditMode(false);
    onSubmit(value);
  };

  const onBlur = () => {
    onEditHandler();
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      onEditHandler();
    }
  };

  return !editMode ? (
    <div onDoubleClick={activateEditMode} className={getTextStyle(!!text)}>
      {text ? text : "Click to set status"}
    </div>
  ) : (
    <div className="mx-[10px]">
      <Input
        placeholder="New status"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus
        onBlur={onBlur}
        onKeyDown={onKeyDownHandler}
      />
    </div>
  );
};

export default EditableDiv;
