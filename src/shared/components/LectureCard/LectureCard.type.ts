import type { BadgeProps } from "../Badge/Badge.type.js";

type LectureCardSize = "small" | "medium" | "large";

interface LectureCardProps {
  title: string;
  subtitle: string;

  tags: Pick<BadgeProps, "content" | "color" | "variant">[];

  size?: LectureCardSize;
}

export type { LectureCardProps };
