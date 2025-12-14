// Enrollment 관련 DTO 정의

export type EnrollmentState = "ENROLLED" | "COMPLETED" | "CANCELED";

export type EnrollmentCreateRequest = {
  courseId: string;
};

export type EnrollmentResponse = {
  id: string;
  courseId: string;
  userId: string;
  state: EnrollmentState;
  enrolledAt: string;
  completedAt?: string;
  canceledAt?: string;
};

export type EnrollmentSummaryResponse = {
  id: string;
  courseId: string;
  courseTitle: string;
  state: EnrollmentState;
  enrolledAt: string;
  progress?: number;
};

export type EnrollmentCancelRequest = {
  reason?: string;
};

export type EnrollCourseRequest = {
  courseId: string;
};

export type EnrollCourseResponse = {
  enrollmentId: string;
  courseId: string;
  message: string;
};

export type CancelEnrollmentRequest = {
  enrollmentId: string;
  reason?: string;
};

export type CancelEnrollmentResponse = {
  enrollmentId: string;
  message: string;
};
