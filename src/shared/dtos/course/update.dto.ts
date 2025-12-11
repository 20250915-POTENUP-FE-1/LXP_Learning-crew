import type { CourseDifficulty } from "./enums";

export type CourseUpdateRequest = {
  title?: string;
  description?: string;
  thumbnailUrl?: string;
  level?: CourseDifficulty;
  tags?: number[];
};
