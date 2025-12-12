import type { SectionResponse } from "./section.dto";
import type { TagResponse } from "../tag";
import type { EnumResponse } from "./enums";

export type CourseResponse = {
  id: string;
  title: string;
  description: string;
  instructorName: string;
  level: EnumResponse;
  durationInHours: number;
  tags: TagResponse[];
  sections: SectionResponse[];
};
