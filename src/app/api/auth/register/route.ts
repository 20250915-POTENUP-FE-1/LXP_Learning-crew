import { NextRequest, NextResponse } from "next/server";
import {
  User,
  addUserToStore,
  findUserByEmail,
  getUserStore,
} from "../shared/userStore";
import type { RegisterDto, ValidationError } from "../shared/types";
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
    throw { code: "AUTH_DUP", message: "이미 사용 중인 이메일 주소 입니다." };
  }

  const user: User = {
    email,
    password: registerDto.password.trim(),
    name: registerDto.name,
    role: registerDto.role,
    tags: registerDto.tags || [],
    learnerLevel: registerDto.learnerLevel || "JUNIOR",
  };

  repoSave(user);

  return { success: true };
}

function findAllUsers() {
  const store = getUserStore();
  return store.map((user: User) => ({
    email: user.email,
    password: user.password,
    name: user.name,
    role: user.role,
    tags: user.tags,
    learnerLevel: user.learnerLevel,
  }));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = registerUser(body as RegisterDto);

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("회원가입 실패!");

    if (error && typeof error === "object" && "code" in error) {
      const err = error as ValidationError;

      if (err.code === "AUTH_DUP") {
        return NextResponse.json(err, { status: 409 });
      }

      if (err.code === "AUTH_BAD" || err.code === "TAG_SIZE_VIOLATION") {
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
  const users = findAllUsers();
  return NextResponse.json({
    totalCount: users.length,
    users: users,
  });
}
