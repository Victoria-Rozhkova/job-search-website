import React from "react";
import { v4 } from "uuid";

import { Icon } from "@/shared/ui";
import { ActionType } from "../model/types";

const Actions = () => {
  const actions: ActionType[] = [
    { id: v4(), icon: "Like", text: "Like" },
    { id: v4(), icon: "Message", text: "Comment" },
    { id: v4(), icon: "Bookmark", text: "Saved" },
    { id: v4(), icon: "Send", text: "Send" },
    { id: v4(), icon: "Share", text: "Share" },
  ];
  return (
    <div className="flex justify-evenly text-pri2">
      {actions.map((action) => {
        return (
          <div
            key={action.id}
            className="flex gap-[8px] items-center cursor-pointer hover:text-primary"
          >
            <Icon name={action.icon} size={18} />
            <span>{action.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Actions;
