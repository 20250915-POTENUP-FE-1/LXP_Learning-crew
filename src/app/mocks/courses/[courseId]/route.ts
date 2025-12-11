import { NextRequest, NextResponse } from "next/server";
import MOCK_STORE from "../../store.mock";

interface CourseParams {
  params: Promise<{ courseId: string }>;
}

export const GET = async (request: NextRequest, { params }: CourseParams) => {
  const { courseId } = await params;

  const response = MOCK_STORE.courses.find(
    (course) => course.courseId === courseId,
  );

  return NextResponse.json({ ...response });
};

export const PUT = async (request: NextRequest, { params }: CourseParams) => {
  const { courseId } = await params;
  const body = await request.json();

  const courseIndex = MOCK_STORE.courses.findIndex(
    (course) => course.courseId === courseId,
  );

  MOCK_STORE.courses[courseIndex] = {
    ...MOCK_STORE.courses[courseIndex],
    ...body,
  };

  Object.assign(MOCK_STORE.courses[courseIndex], body);

  return NextResponse.json({ ...MOCK_STORE.courses[courseIndex] });
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
