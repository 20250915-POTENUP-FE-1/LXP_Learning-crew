import { NextRequest, NextResponse } from "next/server";
import { User, findUserByEmail, getUserStore } from "../shared/userStore";

import { createSession } from "../shared/sessionStore";
import { saveLoginLog } from "../shared/log";
import type { LoginDto, LoginResponse, ValidationError } from "../shared/types";
import { validateLoginDto } from "../shared/validation";

function findUser(email: string): User | undefined {
  const found = findUserByEmail(email);
  return found;
}

function validateLoginRequest(dto: LoginDto): ValidationError | null {
  const err = validateLoginDto(dto);
  if (!err) console.log("[Validate] 검증 통과!");
  return err;
}

function authenticate(loginDto: LoginDto): LoginResponse {
  const email = loginDto.email.trim().toLowerCase();
  const password = loginDto.password.trim();

  const validationError = validateLoginRequest({ email, password });
  if (validationError) {
    console.error("검증 실패:", validationError.message);
    throw validationError;
  }

  const user = findUser(email);
  if (!user) {
    console.error("사용자를 찾을 수 없음:", email);
    throw { code: "AUTH_001", message: "ID나 PW가 일치하지 않습니다." };
  }

  if (user.password !== password) {
    console.error("비밀번호 불일치");
    throw { code: "AUTH_001", message: "ID나 PW가 일치하지 않습니다." };
  }

  const session = createSession(user);

  console.log("[인증] 세션 생성:", {
    sessionId: session.id,
    email: user.email,
  });

  return { accessToken: session.id, expiresIn: 3600 };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log("[로그인 요청] 이메일:", body.email);

    const result = authenticate(body as LoginDto);

    console.log("[로그인 성공] 토큰:", result.accessToken);

    const nextResponse = NextResponse.json(
      {
        accessToken: result.accessToken,
        expiresIn: result.expiresIn,
      },
      { status: 200 },
    );

    nextResponse.cookies.set("access_token", result.accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: result.expiresIn,
    });

    console.log("[쿠키 설정] access_token:", result.accessToken);

    // 로그인 성공 기록
    const email = body.email?.toString().toLowerCase() || "unknown";
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    saveLoginLog(email, true, ip);

    return nextResponse;
  } catch (error) {
    const email = "unknown";
    saveLoginLog(email, false);

    console.error("로그인 실패!");

    if (error && typeof error === "object" && "code" in error) {
      const err = error as ValidationError;

      if (err.code === "AUTH_001") {
        return NextResponse.json(
          {
            code: err.code,
            message: err.message,
          },
          { status: 401 },
        );
      }

      if (err.code === "AUTH_005") {
        return NextResponse.json(
          {
            code: err.code,
            message: err.message,
          },
          { status: 400 },
        );
      }
    }

    return NextResponse.json(
      {
        code: "AUTH_001",
        message: "서버 오류가 발생했습니다.",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  const users = getUserStore();

  return NextResponse.json(
    {
      totalCount: users.length,
      users: users.map((user) => ({
        email: user.email,
        password: user.password,
      })),
    },
    { status: 200 },
  );
}
