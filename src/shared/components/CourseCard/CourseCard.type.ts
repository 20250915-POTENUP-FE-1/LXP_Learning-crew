import { StaticImageData } from "next/image";
import type { BadgeProps } from "../Badge/Badge.type";

// type CourseCardSize = "small" | "large";
type CourseCardSize = "large";

interface CourseCardProps {
  courseId: string;
  title: string;
  description: string;
  thumbnailImageUrl: string | StaticImageData | null;

  tags?: Pick<BadgeProps, "content" | "color" | "variant">[];

  size?: CourseCardSize;
}

export type { CourseCardProps };
