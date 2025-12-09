import { NextRequest } from "next/server";
import MOCK_STORE from "../store.mock";

const RECOMMENDED_COURSES_IDS = ["course-10", "course-16", "course-20"];

export const GET = async (request: NextRequest) => {
  const recommendedCourses = MOCK_STORE.courses.filter((course) => {
    return RECOMMENDED_COURSES_IDS.includes(course.courseId);
  });

  return Response.json(
    {
      recommendedCourses,
    },
    { status: 200 },
  );
};
