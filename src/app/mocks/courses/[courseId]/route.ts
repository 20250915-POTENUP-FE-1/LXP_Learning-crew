import { NextRequest, NextResponse } from "next/server";
import MOCK_STORE from "../../store.mock";
import type { ResponseGetCourse } from "@/shared/dtos";
import type { StoreCourse } from "../../store/courses";

interface CourseParams {
  params: Promise<{ courseId: string }>;
}

export const GET = async (request: NextRequest, { params }: CourseParams) => {
  const { courseId } = await params;

  const response = MOCK_STORE.courses.find(
    (course: StoreCourse) => course.courseId === courseId,
  );

  const body: ResponseGetCourse = {
    course: response as StoreCourse,
  };

  return NextResponse.json(body);
};

export const PUT = async (request: NextRequest, { params }: CourseParams) => {
  const { courseId } = await params;
  const body = await request.json();

  const courseIndex = MOCK_STORE.courses.findIndex(
    (course: StoreCourse) => course.courseId === courseId,
  );

  MOCK_STORE.courses[courseIndex] = {
    ...MOCK_STORE.courses[courseIndex],
    ...body,
  };

  Object.assign(MOCK_STORE.courses[courseIndex], body);

  const updated: ResponseGetCourse = {
    course: MOCK_STORE.courses[courseIndex] as StoreCourse,
  };

  return NextResponse.json(updated);
};

export const DELETE = async (
  request: NextRequest,
  { params }: CourseParams,
) => {
  const { courseId } = await params;

  MOCK_STORE.courses = MOCK_STORE.courses.filter(
    (course) => course.courseId !== courseId,
  );

  return NextResponse.json({ message: "강의 삭제 성공" }, { status: 204 });
};
