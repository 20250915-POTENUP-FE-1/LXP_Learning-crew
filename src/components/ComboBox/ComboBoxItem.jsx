import clsx from "clsx";
import React from "react";

const ComboBoxItem = ({ text }) => {
  return (
    <div className={clsx("rounded-lg p-2", "hover:bg-[#f6f6f6]")}>
      <span>{text}</span>
    </div>
  );
};

export default ComboBoxItem;
