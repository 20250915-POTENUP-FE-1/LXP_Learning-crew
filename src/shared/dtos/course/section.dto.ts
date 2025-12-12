import type { LectureCreateRequest, LectureResponse } from "./lecture.dto";

export type SectionCreateRequest = {
  title: string;
  lectures?: LectureCreateRequest[];
};

export type SectionResponse = {
  id: string;
  title: string;
  durationInSeconds: number;
  order: number;
  lectures: LectureResponse[];
};
