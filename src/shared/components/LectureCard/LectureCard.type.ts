import { StaticImageData } from "next/image.js";
import type { BadgeProps } from "../Badge/Badge.type.js";

// type LectureCardSize = "small" | "large";
type LectureCardSize = "large";

interface LectureCardProps {
  title: string;
  subtitle: string;
  imageUrl?: string | StaticImageData;

  tags: Pick<BadgeProps, "content" | "color" | "variant">[];

  size?: LectureCardSize;
}

export type { LectureCardProps };
