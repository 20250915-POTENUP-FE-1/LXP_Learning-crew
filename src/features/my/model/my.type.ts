import { Tag } from "./my.types";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  joinDate: Date;
  tags?: Tag[]; // 사용자의 관심 태그 (옵셔널)
}

export interface Statistics {
  totalLectures: number;
  completedLectures: number;
  studyHours: number;
}

export interface InstructorCode {
  code: string;
  createdAt: Date;
  isActive: boolean;
}
