import React, { FC, useState } from "react";
import clsx from "clsx";

import { DocumentProps, DocumentVariant } from "./document.type";
import {
  getDocumentClassName,
  getDocumentTitleClassName,
} from "./document.style";
import { IconName } from "../icons/icon.type";
import Icon from "../icons";

const Document: FC<DocumentProps> = (props) => {
  const { title, variant = "success", url, onDelete, removable = true } = props;
  const [showClose, setShowClose] = useState(false);

  function getIconName(variant: DocumentVariant): IconName {
    return variant === "success"
      ? "Document"
      : variant === "error"
      ? "ErrorCircle"
      : "ErrorCircle";
  }

  function onMouseDocument(status: boolean) {
    if (typeof onDelete !== "function") return;
    setShowClose(status);
  }

  function openDocumentOnNewWindow() {
    if (url) {
      if (url.match(/^data:image/gm)) {
        const contentType = url.match(/[^data:]\w+\/\w+/)?.[0];

        const byteCharacters = atob(
          url.substr(`data:${contentType};base64,`.length)
        );
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
          const slice = byteCharacters.slice(offset, offset + 1024);

          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }

          const byteArray = new Uint8Array(byteNumbers);

          byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, { type: contentType });
        const blobUrl = URL.createObjectURL(blob);

        window.open(blobUrl, "_blank");
      }
      window.open(`${url}`, "_blank");
    }
  }

  return (
    <div
      className={getDocumentClassName()}
      onMouseEnter={onMouseDocument.bind(null, true)}
      onMouseLeave={onMouseDocument.bind(null, false)}
    >
      <Icon
        name={getIconName(variant)}
        size={16}
        className={clsx(variant === "error" ? "text-red" : "text-pri1")}
      />
      <span
        onClick={openDocumentOnNewWindow}
        className={getDocumentTitleClassName()}
      >
        {title}
      </span>
      {showClose && removable && (
        <div
          className="pb-[1px] absolute  right-[5px] hover:text-primary"
          onClick={onDelete?.bind(null)}
        >
          <Icon name="Close" size={12} className="text-gray_300" />
        </div>
      )}
    </div>
  );
};

export default Document;
