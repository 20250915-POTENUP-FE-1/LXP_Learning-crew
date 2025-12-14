import { NextRequest, NextResponse } from "next/server";
import { getSession, updateSession } from "../shared/sessionStore";
import { updateUserRole } from "../shared/userStore";

export async function PATCH(request: NextRequest) {
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

    const body = await request.json();
    const { role } = body;

    if (!role) {
      return NextResponse.json(
        {
          code: "VALIDATION_ERROR",
          message: "role이 필요합니다.",
        },
        { status: 400 },
      );
    }

    // userStore에서 사용자 role 업데이트
    const updatedUser = updateUserRole(session.user.userId, role);

    if (!updatedUser) {
      return NextResponse.json(
        {
          code: "USER_NOT_FOUND",
          message: "사용자를 찾을 수 없습니다.",
        },
        { status: 404 },
      );
    }

    // 세션도 업데이트
    updateSession(accessToken, { ...session.user, role });

    return NextResponse.json(
      {
        success: true,
        user: {
          userId: updatedUser.userId,
          email: updatedUser.email,
          name: updatedUser.name,
          role: updatedUser.role,
          tagIds: updatedUser.tagIds,
          level: updatedUser.level,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Role 업데이트 오류:", error);
    return NextResponse.json(
      {
        code: "SERVER_ERROR",
        message: "서버 오류가 발생했습니다.",
      },
      { status: 500 },
    );
  }
}
