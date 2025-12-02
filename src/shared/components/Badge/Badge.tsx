import React from "react";
import type { BadgeProps } from "./Badge.type.js";
import { badgeStyle } from "./Badge.style.js";

const Badge = ({ content, color, variant }: BadgeProps) => {
  return (
    <div className={badgeStyle({ variant, color })}>
      <p>{content}</p>
    </div>
  );
};

export default Badge;
