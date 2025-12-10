export interface UserProfile {
  id: string;
  name: string;
  nickname?: string;
  email?: string;
  profileImageUrl?: string;
}

export interface EnrollmentSummary {
  enrollmentId: string;
  courseId?: string;
  title: string;
  description?: string;
  thumbnail?: string;
  progress?: number;
}
