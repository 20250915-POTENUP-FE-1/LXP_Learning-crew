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

type Mode = "view" | "edit";

interface CurriculumProviderProps {
  sections: Section[];

  mode?: Mode;
}

interface SectionProps {
  index: Pick<Index, "sectionIndex">;
  section: Section;

  mode?: Mode;
}

interface LectureProps {
  index: Index;
  lecture: Lecture;

  mode?: Mode;
}

export type { CurriculumProviderProps, SectionProps, LectureProps };
