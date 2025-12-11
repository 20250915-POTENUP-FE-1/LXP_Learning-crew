import { NextRequest, NextResponse } from "next/server";
import MOCK_STORE from "../store.mock";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;

  const keyword = searchParams.get("keyword") || "";
  const page = parseInt(searchParams.get("page") || "0", 10);
  const size = parseInt(searchParams.get("size") || "10", 10);
  const sort = searchParams.get("sort") || "createdAt_desc";

  const response = MOCK_STORE.courses.filter(
    (course) =>
      course.title.includes(decodeURI(keyword)) ||
      course.description.includes(decodeURI(keyword)),
  );

  return NextResponse.json(
    {
      contents: response.slice(page * size, page * size + size),
      totalElements: response.length,
      totalPages: Math.ceil(response.length / size),
      page,
    },
    { status: 200 },
  );
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  MOCK_STORE.courses.push(body);

  const response = MOCK_STORE.courses.find(
    (course) => course.courseId === body.courseId,
  );

  return NextResponse.json({ ...response }, { status: 201 });
};
