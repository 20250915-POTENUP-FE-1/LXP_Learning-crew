export type LectureCreateRequest = {
  title: string;
  videoUrl: string;
};

export type LectureResponse = {
  id: string;
  title: string;
  videoUrl: string;
  order: number;
  durationInSeconds: number;
};
