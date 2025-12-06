import { BadgeColor, BadgeVariant } from "../components/Badge/Badge.type";

type CoursesDto = {
  courseId: string;
  title: string;
  description: string;
  thumbnailImageUrl: string;

  tags?: {
    content: string;

    color?: BadgeColor;
    variant?: BadgeVariant;
  }[];
};

interface ResponseGetRecommendedCourses {
  courses: CoursesDto[];
}

interface ResponseGetCourses {
  courses: CoursesDto[];
}

export type { ResponseGetRecommendedCourses, ResponseGetCourses };
