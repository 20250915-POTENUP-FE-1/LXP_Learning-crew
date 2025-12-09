import { NextResponse } from "next/server";
import MOCK_STORE from "../store.mock";

export const GET = async () => {
  return NextResponse.json(
    {
      courses: MOCK_STORE.courses,
    },
    { status: 200 },
  );
};
