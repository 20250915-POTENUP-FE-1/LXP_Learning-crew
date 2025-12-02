import type { ChipProps } from "../Chip/Chip.type.ts";

type LectureCardSize = "small" | "medium" | "large";

interface LectureCardProps {
  title: string;
  subtitle: string;

  tags: Pick<ChipProps, "content" | "color" | "variant">[];

  size?: LectureCardSize;
}

export type { LectureCardProps };
