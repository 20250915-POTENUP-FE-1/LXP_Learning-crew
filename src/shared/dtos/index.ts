// Controller-based re-exports
export * as Auth from "./auth";
export * as Course from "./course";
export * as Tag from "./tag";
export * as Recommendation from "./recommendation";

// Common
export type { ErrorResponse } from "./common/error.dto";

// Legacy DTOs for mocks/compatibility
export type {
  ResponseGetRecommendedCourses,
  ResponseGetCourses,
} from "./course/courses.dto";
export type { ResponseGetCourse, CourseDto } from "./course/course.dto";
