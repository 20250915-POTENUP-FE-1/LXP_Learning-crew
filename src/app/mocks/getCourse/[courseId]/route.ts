import { NextRequest, NextResponse } from "next/server";
import MOCK_STORE from "../../store.mock";

interface Params {
  params: Promise<{ courseId: string }>;
}

export const GET = async (request: NextRequest, { params }: Params) => {
  const { courseId } = await params;

  const course = MOCK_STORE.courses.find(
    async (course) => course.courseId === courseId,
  );

  return NextResponse.json({ course }, { status: 200 });
};
