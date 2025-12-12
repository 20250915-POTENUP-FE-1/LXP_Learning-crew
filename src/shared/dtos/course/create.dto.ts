import type { CourseDifficulty } from "./enums";
import type { SectionCreateRequest } from "./section.dto";

export type CourseCreateRequest = {
  title: string;
  description: string;
  instructorId: string;
  thumbnailUrl?: string;
  level: CourseDifficulty;
  tags?: number[];
  sections?: SectionCreateRequest[];
};
