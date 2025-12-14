import { BadgeColor, BadgeVariant } from "../../components/Badge/Badge.type";
import { CurriculumProviderProps } from "../../components/CurriculumProvider/CurriculumProvider.type";

type CourseDto = {
  courseId: string;
  title: string;
  description: string;
  thumbnailImageUrl: string | null;
  instructorUserId: string; // 강의를 등록한 강사의 userId (필수)
  tags?: {
    content: string;

    color?: BadgeColor;
    variant?: BadgeVariant;
  }[];

  sections: CurriculumProviderProps["sections"];
};

interface ResponseGetCourse {
  course: CourseDto;
}

export type { ResponseGetCourse, CourseDto };
