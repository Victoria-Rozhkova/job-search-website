import React, { FC } from "react";

const Error: FC<{ error?: string }> = ({ error }) => {
  return (
    <>
      {!!error && (
        <p className="text-ro14reg text-red mt-[5px]">
          <>{error}</>
        </p>
      )}
    </>
  );
};

export default Error;
