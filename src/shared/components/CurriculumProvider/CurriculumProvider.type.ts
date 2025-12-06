type Section = {
  sectionTitle: string;
  lectures: Lecture[];
};

type Lecture = {
  lectureTitle: string;
  duration: number;
};

type Index = {
  readonly sectionIndex: number;
  readonly lectureIndex: number;
};

interface CurriculumProviderProps {
  sections: Section[];
}

interface SectionProps {
  index: Pick<Index, "sectionIndex">;
  section: Section;
}

interface LectureProps {
  index: Index;
  lecture: Lecture;
}

export type { CurriculumProviderProps, SectionProps, LectureProps };
