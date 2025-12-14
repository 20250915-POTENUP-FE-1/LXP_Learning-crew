import type { EnrollmentState } from "@/shared/dtos/enrollment";

export type StoreEnrollment = {
  enrollmentId: string;
  courseId: string;
  userId: string;
  state: EnrollmentState;
  enrolledAt: string;
  completedAt?: string;
  canceledAt?: string;
};

export const ENROLLMENTS_STORE: StoreEnrollment[] = [
  // mock-user-id (사용자 1)
  {
    enrollmentId: "enrollment-1",
    courseId: "course-1",
    userId: "mock-user-id",
    state: "ENROLLED",
    enrolledAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    enrollmentId: "enrollment-2",
    courseId: "course-2",
    userId: "mock-user-id",
    state: "ENROLLED",
    enrolledAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    enrollmentId: "enrollment-3",
    courseId: "course-3",
    userId: "mock-user-id",
    state: "COMPLETED",
    enrolledAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    completedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },

  // user-002 (사용자 2)
  {
    enrollmentId: "enrollment-4",
    courseId: "course-2",
    userId: "user-002",
    state: "ENROLLED",
    enrolledAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    enrollmentId: "enrollment-5",
    courseId: "course-4",
    userId: "user-002",
    state: "ENROLLED",
    enrolledAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },

  // user-003 (사용자 3)
  {
    enrollmentId: "enrollment-6",
    courseId: "course-1",
    userId: "user-003",
    state: "COMPLETED",
    enrolledAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
    completedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    enrollmentId: "enrollment-7",
    courseId: "course-5",
    userId: "user-003",
    state: "ENROLLED",
    enrolledAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
];
