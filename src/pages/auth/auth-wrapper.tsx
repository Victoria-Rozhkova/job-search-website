import React, { FC, ReactNode } from "react";

const AuthWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-center justify-center my-auto mx-0 h-[100vh]">
      {children}
    </div>
  );
};

export default AuthWrapper;
