import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import {
  User,
  addUserToStore,
  findUserByEmail,
  getUserStore,
} from "../shared/userStore";
import type {
  RegisterDto,
  ValidationError,
  ApiResponse,
} from "../shared/types";
import { validateRegisterDto } from "../shared/validation";

function repoFindByEmail(email: string): User | undefined {
  const found = findUserByEmail(email);
  return found;
}

function repoSave(user: User): User {
  addUserToStore(user);

  return user;
}

function validateRegisterRequest(dto: RegisterDto): ValidationError | null {
  const result = validateRegisterDto(dto);
  if (!result) console.log("[Validate] 검증 통과!");
  return result;
}

function registerUser(registerDto: RegisterDto) {
  const validationError = validateRegisterRequest(registerDto);
  if (validationError) {
    console.error("검증 실패:", validationError.message);
    throw validationError;
  }

  const email = registerDto.email.trim().toLowerCase();
  const existingUser = repoFindByEmail(email);
  if (existingUser) {
    console.error("이메일 중복:", email);
    throw { code: "AUTH_004", message: "이미 사용 중인 이메일 주소 입니다." };
  }

  const user: User = {
    userId: crypto.randomUUID(),
    email,
    password: registerDto.password.trim(),
    name: registerDto.name,
    role: registerDto.role,
    tagIds: registerDto.tagIds || [],
    level: registerDto.level || "JUNIOR",
  };

  repoSave(user);

  return user;
}

function findAllUsers() {
  const store = getUserStore();
  return store.map((user: User) => ({
    userId: user.userId,
    email: user.email,
    password: user.password,
    name: user.name,
    role: user.role,
    tagIds: user.tagIds,
    level: user.level,
  }));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const user = registerUser(body as RegisterDto);

    const response: ApiResponse = {
      data: {
        content: [
          {
            userId: user.userId,
            email: user.email,
            password: user.password,
            name: user.name,
            role: user.role,
            tagIds: user.tagIds,
            level: user.level,
          },
        ],
      },
      error: null,
      success: true,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error("회원가입 실패!");

    if (error && typeof error === "object" && "code" in error) {
      const err = error as ValidationError;
      const response: ApiResponse = {
        data: null,
        error: err,
        success: false,
        timestamp: new Date().toISOString(),
      };

      if (err.code === "AUTH_004") {
        return NextResponse.json(response, { status: 409 });
      }

      if (err.code === "AUTH_005") {
        return NextResponse.json(response, { status: 400 });
      }
    }

    const response: ApiResponse = {
      data: null,
      error: {
        code: "AUTH_001",
        message: "서버 오류가 발생했습니다.",
      },
      success: false,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, { status: 500 });
  }
}

export async function GET() {
  const users = findAllUsers();
  return NextResponse.json({
    totalCount: users.length,
    users,
  });
}
