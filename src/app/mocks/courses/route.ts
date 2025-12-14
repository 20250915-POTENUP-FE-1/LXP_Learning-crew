import { NextRequest, NextResponse } from "next/server";
import MOCK_STORE from "../store.mock";
import type { ResponseGetCourses } from "@/shared/dtos";
import type { SortOrder } from "@/shared/dtos/course";
import type { StoreCourse } from "../store/courses";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;

  const keyword = searchParams.get("keyword") || "";
  const page = parseInt(searchParams.get("page") || "0", 10);
  const size = parseInt(searchParams.get("size") || "10", 35);
  const sort = (searchParams.get("sort") || "LATEST") as SortOrder;

  const filtered = MOCK_STORE.courses
    .filter(
      (course: StoreCourse) =>
        course.title.includes(decodeURI(keyword)) ||
        course.description.includes(decodeURI(keyword)),
    )
    .reverse();

  const body: ResponseGetCourses = {
    contents: filtered.slice(page * size, page * size + size),
  };

  return NextResponse.json(
    {
      ...body,
      totalElements: filtered.length,
      totalPages: Math.ceil(filtered.length / size),
      page,
    },
    { status: 200 },
  );
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  // 쿠키에서 사용자 정보 가져오기
  const accessToken = request.cookies.get("access_token")?.value;
  let instructorId = body.instructorId;

  // instructorId가 없으면 현재 로그인한 사용자의 이메일을 사용
  if (!instructorId && accessToken) {
    const { getSession } = await import("@/app/api/auth/shared/sessionStore");
    const session = getSession(accessToken);
    if (session) {
      instructorId = session.user.email;
    }
  }

  // courseId 생성
  const courseId = `course-${MOCK_STORE.courses.length + 1}`;
  const courseData: StoreCourse = {
    ...body,
    courseId,
    instructorId,
  };

  MOCK_STORE.courses.push(courseData);

  return NextResponse.json(courseData, { status: 201 });
};
