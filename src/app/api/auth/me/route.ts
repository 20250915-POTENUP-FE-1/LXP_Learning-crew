import { NextRequest, NextResponse } from "next/server";
import { getSession } from "../shared/sessionStore";

export async function GET(request: NextRequest) {
  try {
    const accessToken = request.cookies.get("access_token")?.value;

    if (!accessToken) {
      return NextResponse.json(
        {
          code: "AUTH_002",
          message: "인증 토큰이 없습니다.",
        },
        { status: 401 },
      );
    }

    const session = getSession(accessToken);

    if (!session) {
      return NextResponse.json(
        {
          code: "AUTH_002",
          message: "유효하지 않거나 만료된 토큰입니다.",
        },
        { status: 401 },
      );
    }

    return NextResponse.json(
      {
        user: {
          userId: session.user.userId,
          email: session.user.email,
          name: session.user.name,
          role: session.user.role,
          tagIds: session.user.tagIds,
          level: session.user.level,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("세션 확인 오류:", error);
    return NextResponse.json(
      {
        code: "AUTH_001",
        message: "서버 오류가 발생했습니다.",
      },
      { status: 500 },
    );
  }
}
