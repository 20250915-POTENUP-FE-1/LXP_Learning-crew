import React from "react";
import type { ActionButtonProps } from "./ActionButton.type";
import actionButtonStyle from "./ActionButton.style";
import clsx from "clsx";

const ActionButton = ({
  value,
  isFull,
  variant,
  size,
  onClick,
}: ActionButtonProps) => {
  return (
    <button
      className={clsx(actionButtonStyle({ variant, size }), {
        "flex-1": isFull,
      })}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default ActionButton;
