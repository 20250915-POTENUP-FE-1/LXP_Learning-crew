import { NextRequest, NextResponse } from "next/server";
import MOCK_STORE from "../store.mock";
import type { ResponseGetRecommendedCourses } from "@/shared/dtos";
import type { StoreCourse } from "../store/courses";

export const GET = async (request: NextRequest) => {
  const response = MOCK_STORE.courses.slice(0, 5) as StoreCourse[];

  const body: ResponseGetRecommendedCourses = {
    recommendedCourses: response,
  };

  return NextResponse.json(body, { status: 200 });
};
