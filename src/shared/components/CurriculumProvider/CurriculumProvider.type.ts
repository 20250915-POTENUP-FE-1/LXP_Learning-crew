/**
 * 강의 구성 요소의 타입 정의
 */

/** 강의 모드: 보기 또는 편집 */
type Mode = "view" | "edit";

/** 섹션 및 강의의 인덱스 */
type Index = {
  readonly sectionIndex: number;
  readonly lectureIndex: number;
};

/** 강의(Lecture) 타입 */
type Lecture = {
  index?: number;
  lectureTitle: string;
  duration: number;
};

/** 섹션(Section) 타입 */
type Section = {
  index?: number;
  sectionTitle: string;
  lectures: Lecture[];
};

/** CurriculumProvider 컴포넌트 Props */
interface CurriculumProviderProps {
  /** 강의 섹션 배열 */
  sections: Section[];
  /** 표시 모드 (기본값: "view") */
  mode?: Mode;
}

/** Section 렌더링 컴포넌트 Props */
interface SectionProps {
  /** 섹션의 인덱스 */
  index: Pick<Index, "sectionIndex">;
  /** 섹션 데이터 */
  section: Section;
  /** 표시 모드 (기본값: "view") */
  mode?: Mode;
}

/** Lecture 렌더링 컴포넌트 Props */
interface LectureProps {
  /** 강의의 섹션 및 강의 인덱스 */
  index: Index;
  /** 강의 데이터 */
  lecture: Lecture;
  /** 표시 모드 (기본값: "view") */
  mode?: Mode;
}

export type {
  CurriculumProviderProps,
  SectionProps,
  LectureProps,
  Mode,
  Index,
  Lecture,
  Section,
};
