import React from "react";
import type { ActionButtonProps } from "./ActionButton.type.js";
import actionButtonStyle from "./ActionButton.style.js";

const ActionButton = ({
  value,
  variant,
  size,
  onClick,
  ...rest
}: ActionButtonProps) => {
  return (
    <button
      className={actionButtonStyle({ variant, size })}
      onClick={onClick}
      {...rest}
    >
      {value}
    </button>
  );
};

export default ActionButton;
