import { NextRequest, NextResponse } from "next/server";
import MOCK_STORE from "../../store.mock";

interface Params {
  params: { courseId: string };
}

export const GET = async ({ params }: Params) => {
  const course = MOCK_STORE.courses.find(
    async (course) => course.courseId === (await params.courseId),
  );

  return NextResponse.json({ course }, { status: 200 });
};
