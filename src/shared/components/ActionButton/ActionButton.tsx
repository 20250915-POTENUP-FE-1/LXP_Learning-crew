import React from "react";
import type { ActionButtonProps } from "./ActionButton.type";
import actionButtonStyle from "./ActionButton.style";
import clsx from "clsx";

const ActionButton = ({
  value,
  isFull,
  width,
  variant,
  size,
  onClick,
}: ActionButtonProps) => {
  return (
    <button
      className={clsx(actionButtonStyle({ variant, size }), {
        "flex-1": isFull,
        [`w-[${width}px]`]: width,
      })}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default ActionButton;
