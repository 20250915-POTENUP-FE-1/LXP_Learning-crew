import React from "react";
import type { ChipProps } from "./Chip.type.js";
import { chipStyle } from "./Chip.style.js";

const Chip = ({ content, color, variant }: ChipProps) => {
  return (
    <div className={chipStyle({ variant, color })}>
      <p>{content}</p>
    </div>
  );
};

export default Chip;
