import { LectureCardProps } from "@/shared/components/LectureCard/LectureCard.type";
import { ReactNode } from "react";

interface LectureListProps {
  name: string;
  lectures?: LectureCardProps[];
}

export type { LectureListProps };
