import type { ChipProps } from "../Badge/Badge.type.js";

type LectureCardSize = "small" | "medium" | "large";

interface LectureCardProps {
  title: string;
  subtitle: string;

  tags: Pick<ChipProps, "content" | "color" | "variant">[];

  size?: LectureCardSize;
}

export type { LectureCardProps };
