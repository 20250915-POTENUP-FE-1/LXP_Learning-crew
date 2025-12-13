import { NextRequest, NextResponse } from "next/server";
import { destroySession } from "../shared/sessionStore";

export async function POST(request: NextRequest) {
  try {
    const accessToken = request.cookies.get("access_token")?.value;

    if (accessToken) {
      destroySession(accessToken);
      console.log("[로그아웃] 세션 삭제:", accessToken);
    }

    const response = NextResponse.json(
      {
        data: null,
        error: null,
        success: true,
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    );

    response.cookies.set("access_token", "", {
      httpOnly: false,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    });

    return response;
  } catch (error) {
    console.error("로그아웃 오류:", error);
    return NextResponse.json(
      {
        data: null,
        error: {
          code: "AUTH_001",
          message: "서버 오류가 발생했습니다.",
        },
        success: false,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}
