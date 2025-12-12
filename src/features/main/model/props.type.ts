import { CourseCardProps } from "@/shared/components/CourseCard/CourseCard.type";
import { CurriculumProviderProps } from "@/shared/components/CurriculumProvider/CurriculumProvider.type";

interface CourseListProps {
  name: string;
  courses?: CourseCardProps[];
}

interface CourseViewProps extends CourseCardProps, CurriculumProviderProps {}

export type { CourseListProps, CourseViewProps };
