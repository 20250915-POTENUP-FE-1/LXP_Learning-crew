export interface UserProfile {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  joinDate: Date;
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
