import { StaticImageData } from "next/image";
import type { BadgeProps } from "../Badge/Badge.type";

// type CourseCardSize = "small" | "large";
type CourseCardSize = "large";

interface CourseCardProps {
  courseId: number;
  title: string;
  subtitle: string;
  thumbnailImageUrl?: string | StaticImageData;

  tags: Pick<BadgeProps, "content" | "color" | "variant">[];

  size?: CourseCardSize;
}

export type { CourseCardProps };
