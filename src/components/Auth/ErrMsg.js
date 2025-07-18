import { WarningCircle } from "phosphor-react";
import React from "react";

const ErrMsg = (props) => {
  return (
    <>
      <div className="flex gap-1 items-center text-xs text-blue-700">
        <WarningCircle size={18} color="currentColor" />
        <span className="text-blue-700">{props.children}</span>
      </div>
    </>
  );
};

export default ErrMsg;
