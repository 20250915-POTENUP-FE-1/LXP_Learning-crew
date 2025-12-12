import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { User, findUserByEmail, getUserStore } from "../shared/userStore";

import { createSession } from "../shared/sessionStore";
import type { LoginDto, LoginResponse, ValidationError } from "../shared/types";
import { validateLoginDto } from "../shared/validation";

function findUser(email: string): User | undefined {
  const found = findUserByEmail(email);
  return found;
}

function listUsers(): User[] {
  const store = getUserStore();
  return store;
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

  return { accessToken: session.id, expiresIn: 3600 };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = authenticate(body as LoginDto);

    const cookieStore = await cookies();
    cookieStore.set("accessToken", result.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: result.expiresIn,
    });

    return NextResponse.json(
      {
        accessToken: result.accessToken,
        expiresIn: result.expiresIn,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("로그인 실패!");

    if (error && typeof error === "object" && "code" in error) {
      const err = error as ValidationError;

      if (err.code === "AUTH_001") {
        return NextResponse.json(err, { status: 401 });
      }

      if (err.code === "AUTH_002" || err.code === "AUTH_003") {
        return NextResponse.json(err, { status: 400 });
      }
    }

    return NextResponse.json(
      {
        code: "SERVER_ERROR",
        message: "서버 오류가 발생했습니다.",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  const users = listUsers();

  return NextResponse.json({
    totalCount: users.length,
    testAccounts: users.map((user) => ({
      email: user.email,
      password: user.password,
    })),
  });
}
