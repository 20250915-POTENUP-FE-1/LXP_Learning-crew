import type { TagResponse } from "../tag";
import type { EnumResponse } from "./enums";

export type CourseSummaryResponse = {
  courseId: string;
  instructorName: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  level: EnumResponse;
  tags: TagResponse[];
};

export interface ResponseGetCourses {
  content: CourseSummaryResponse[];
  totalElements: number;
  totalPages: number;
  page: number;
  size: number;
}
