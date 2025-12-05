import { StaticImageData } from "next/image";
import type { BadgeProps } from "../Badge/Badge.type";

// type LectureCardSize = "small" | "large";
type LectureCardSize = "large";

interface LectureCardProps {
  lectureId: number;
  title: string;
  subtitle: string;
  thumbnailImageUrl?: string | StaticImageData;

  tags: Pick<BadgeProps, "content" | "color" | "variant">[];

  size?: LectureCardSize;
}

export type { LectureCardProps };
