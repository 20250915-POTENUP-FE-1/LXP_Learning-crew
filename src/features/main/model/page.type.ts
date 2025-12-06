import { CourseCardProps } from "@/shared/components/CourseCard/CourseCard.type";
import { ReactNode } from "react";

interface CourseListProps {
  name: string;
  courses?: CourseCardProps[];
}

export type { CourseListProps };
