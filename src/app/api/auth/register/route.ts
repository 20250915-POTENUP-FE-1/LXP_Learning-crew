import { NextRequest, NextResponse } from "next/server";

// ==================== Types ====================
interface User {
  email: string;
  password: string;
  name: string;
  role: string;
  tags: string[];
  learnerLevel: string;
}

interface RegisterDto {
  email: string;
  password: string;
  name: string;
  role: string;
  tags?: string[];
  learnerLevel?: string;
}

interface ValidationError {
  code: string;
  message: string;
}

// ==================== Global Store ====================
const globalUserStore: User[] = [];

// ==================== In-Memory Database ====================
class UserRepository {
  findByEmail(email: string): User | undefined {
    const found = globalUserStore.find((user) => user.email === email);
    console.log(`🔍 이메일 찾기: ${email} → ${found ? "존재" : "없음"}`);
    return found;
  }

  save(user: User): User {
    globalUserStore.push(user);
    console.log(
      `✅ 저장됨! 현재 총 ${globalUserStore.length}명의 사용자가 있습니다.`,
    );
    console.log("📊 저장된 모든 사용자:", globalUserStore);
    return user;
  }

  findAll(): User[] {
    console.log(`📋 조회: 총 ${globalUserStore.length}명`);
    return globalUserStore;
  }
}

const userRepository = new UserRepository();

// ==================== Service Layer ====================
class UserService {
  validateRegisterRequest(dto: RegisterDto): ValidationError | null {
    console.log("🔍 [Validate] 검증 시작");
    console.log("  - 이메일:", dto.email);
    console.log("  - 이름:", dto.name);
    console.log("  - 역할:", dto.role);
    console.log("  - 태그 개수:", dto.tags?.length || 0);

    // 필수 필드 검증
    if (!dto.email || !dto.password || !dto.name || !dto.role) {
      return {
        code: "AUTH_BAD",
        message: "이메일, 비밀번호, 이름, 역할은 필수 항목입니다.",
      };
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(dto.email)) {
      return {
        code: "AUTH_BAD",
        message: "올바른 이메일 형식이 아닙니다.",
      };
    }

    // 비밀번호 길이 검증
    if (dto.password.length < 8 || dto.password.length > 20) {
      return {
        code: "AUTH_BAD",
        message: "비밀번호는 8~20자 사이여야 합니다.",
      };
    }

    // 태그 개수 검증
    if (!dto.tags || dto.tags.length < 3 || dto.tags.length > 5) {
      return {
        code: "TAG_SIZE_VIOLATION",
        message: "태그는 최소 3개, 최대 5개까지 선택해야 합니다.",
      };
    }

    console.log("✅ [Validate] 검증 통과!");
    return null;
  }

  register(registerDto: RegisterDto) {
    console.log("\n=== 회원가입 시작 ===");
    console.log("요청 데이터:", registerDto);

    // 유효성 검증
    const validationError = this.validateRegisterRequest(registerDto);
    if (validationError) {
      console.error("❌ 검증 실패:", validationError.message);
      throw validationError;
    }

    // 이메일 중복 체크
    const existingUser = userRepository.findByEmail(registerDto.email);
    if (existingUser) {
      console.error("❌ 이메일 중복:", registerDto.email);
      throw {
        code: "AUTH_DUP",
        message: "이미 사용 중인 이메일 주소 입니다.",
      };
    }

    // 사용자 생성
    const user: User = {
      email: registerDto.email,
      password: registerDto.password,
      name: registerDto.name,
      role: registerDto.role,
      tags: registerDto.tags || [],
      learnerLevel: registerDto.learnerLevel || "JUNIOR",
    };

    console.log("👤 생성된 사용자:", user);

    // 저장
    userRepository.save(user);
    console.log("=== 회원가입 완료 ===\n");

    return { success: true };
  }

  findAllUsers() {
    console.log(`\n📋 전체 사용자 조회: ${globalUserStore.length}명`);
    return globalUserStore.map((user) => ({
      email: user.email,
      password: user.password,
      name: user.name,
      role: user.role,
      tags: user.tags,
      learnerLevel: user.learnerLevel,
    }));
  }
}

const userService = new UserService();

// ==================== Controller Layer ====================
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log("\n======================================");
    console.log("📥 POST /api/auth/register 요청 도착!");
    console.log("Body:", JSON.stringify(body, null, 2));
    console.log("======================================");

    const result = userService.register(body);

    console.log("✅ 회원가입 성공!\n");

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("❌ 회원가입 실패!");

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
  const users = userService.findAllUsers();

  console.log("======================================");
  console.log(`현재 저장된 사용자: ${users.length}명`);
  console.log("Users:", JSON.stringify(users, null, 2));
  console.log("======================================\n");

  return NextResponse.json({
    totalCount: users.length,
    users: users,
  });
}
