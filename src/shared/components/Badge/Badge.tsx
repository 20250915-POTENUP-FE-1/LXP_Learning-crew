import React from "react";
import type { BadgeProps } from "./Badge.type";
import { badgeStyle } from "./Badge.style";

const Badge = ({ content, color, variant }: BadgeProps) => {
  return (
    <div className={badgeStyle({ variant, color })}>
      <p>{content}</p>
    </div>
  );
};

export default Badge;
