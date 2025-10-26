import React, { forwardRef, useEffect, useRef, useState } from "react";
import { RefCallBack } from "react-hook-form";
import clsx from "clsx";

import { FileItem } from "@/shared/model/types/common.type";
import { getFileBase64 } from "@/shared/lib/helpers";
import Button from "../button";
import Document from "../document";
import Icon from "../icons";
import { UploadProps } from "./upload.type";
import {
  getDragUploadInputClassName,
  getDragUploadClassName,
  getDragUploadDescriptionClassName,
  getDragUploadLabelClassName,
} from "./upload.style";
import { DocumentVariant } from "../document/document.type";

const Upload = forwardRef<RefCallBack, UploadProps>((props, ref) => {
  const {
    value,
    description,
    accept,
    label,
    onChange,
    onDelete,
    multiple,
    drag = true,
    error,
    url,
    elem,
    removable = true,
    showDocument = true,
  } = props;
  const InputFileRef = useRef<HTMLInputElement | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const defaultAccept =
    ".txt, .png, .jpg, .jpeg, .gif, .bmp, .doc, .docx, .odt, .ods, .pdf, .xls, .xlsx";

  function clickUpload() {
    InputFileRef.current?.click();
  }

  function dropFiles(event: React.DragEvent<HTMLDivElement>) {
    getPreventDefault(event);
    setIsDragOver(false);
    const files = event.dataTransfer.files;
    uploadFiles(files);
  }

  function getPreventDefault(event: React.DragEvent<HTMLDivElement>) {
    event.stopPropagation();
    event.preventDefault();
  }

  function dragOver(event: React.DragEvent<HTMLDivElement>) {
    getPreventDefault(event);
    setIsDragOver(true);
  }

  async function uploadFiles(files: FileList | null) {
    if (!files) return;
    const changedFiles: FileItem[] = [];
    for (const file of [...files]) {
      const extension = file.name.match(/\.\w+$/)?.at(-1);
      if (
        extension &&
        !(accept || defaultAccept).includes(extension.toLowerCase())
      )
        continue;
      const data_url = await getFileBase64(file);
      changedFiles.push({
        name: file.name,
        size: file.size,
        data_url:
          ArrayBuffer.isView(data_url) || !data_url ? "" : (data_url as string),
      });
    }
    if (multiple && Array.isArray(value)) {
      const changedValue = [...value, ...changedFiles];
      onChange(changedValue);
    } else {
      onChange(changedFiles[0]);
    }
  }

  function deleteDocument(index: number) {
    let cloneValue = null;
    let removedFile: FileItem[] = [];
    if (multiple && Array.isArray(value)) {
      cloneValue = [...value];
      removedFile = cloneValue.splice(index, 1);
    }

    if (InputFileRef?.current?.value) InputFileRef.current.value = "";

    onDelete?.(removedFile);
    onChange(cloneValue);
  }

  function getDocumentVariant(item: FileItem): DocumentVariant {
    if (
      !item.data_url &&
      !url?.match(/^\/spublic/gm) &&
      !url?.match(/^\/public/gm)
    )
      return "error";
    return "success";
  }

  useEffect(() => {
    if (value === null && elem && url) {
      if (InputFileRef?.current?.value) InputFileRef.current.value = "";
    }
  }, [url]);

  return (
    <div>
      {description && (
        <p className={getDragUploadDescriptionClassName()}>{description}</p>
      )}
      {showDocument &&
        (Array.isArray(value) ? value : value ? [value] : []).map(
          (item, index) => (
            <div className="my-[8px]" key={index}>
              <Document
                title={item.name}
                url={url || item?.data_url || ""}
                variant={getDocumentVariant(item)}
                onDelete={() => deleteDocument(index)}
                removable={removable}
              />
            </div>
          )
        )}
      <input
        ref={(elem) => {
          InputFileRef.current = elem;
          if (ref) {
            if (elem)
              // eslint-disable-next-line
              // @ts-ignore
              return typeof ref === "function" ? ref([...elem.value]) : ref;
            // eslint-disable-next-line
            // @ts-ignore
            return typeof ref === "function" ? ref([]) : ref;
          }
        }}
        type="file"
        name="upload-file"
        multiple={multiple}
        accept={accept || defaultAccept}
        className={getDragUploadInputClassName()}
        onChange={(event) => uploadFiles(event.target.files)}
      />
      {drag ? (
        <div
          className={getDragUploadClassName(isDragOver)}
          onClick={clickUpload.bind(null)}
          onDragEnter={setIsDragOver.bind(null, true)}
          onDragLeave={setIsDragOver.bind(null, false)}
          onDragOver={(event) => dragOver(event)}
          onDrop={(event) => dropFiles(event)}
        >
          <span className={getDragUploadLabelClassName()}>
            <Icon
              name="NewDocument"
              size={22}
              className="text-gray_300 flex justify-center mb-[8px]"
            />
            {label || (
              <p className="w-[370px]">
                <span className="text-primary_50">Загрузите</span> с компьютера
                или перетащите файл
              </p>
            )}
          </span>
        </div>
      ) : elem ? (
        <div onClick={clickUpload.bind(null)}>{elem}</div>
      ) : (
        <Button
          label={label || "Прикрепить файлы"}
          variant="outlined"
          onClick={clickUpload.bind(null)}
          isFull
        />
      )}
      {error && (
        <span
          className={
            clsx(
              "block",
              "h-[20px]",
              error ? "text-red mt-[4px]" : "text-gray_700 mb-[4px]",
              "text-paragraph_l"
            )
            // fix class - to style.ts
          }
        >
          {JSON.parse(JSON.stringify(error))}
        </span>
      )}
    </div>
  );
});

Upload.displayName = "Upload";

export default Upload;
