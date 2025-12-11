"use server";

export interface RegisterFormData {
  email: string;
  password: string;
  passwordConfirm: string;
  name?: string;
  role?: "일반" | "강사";
  experiences?: string;
  tags?: string[];
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const mapRoleToAPI = (role: "일반" | "강사"): "LEARNER" | "INSTRUCTOR" => {
  return role === "강사" ? "INSTRUCTOR" : "LEARNER";
};

const mapExperienceToAPI = (
  exp: string,
): "JUNIOR" | "MIDDLE" | "SENIOR" | "EXPERT" => {
  const mapping: Record<string, "JUNIOR" | "MIDDLE" | "SENIOR" | "EXPERT"> = {
    junior: "JUNIOR",
    midle: "MIDDLE",
    senior: "SENIOR",
    expert: "EXPERT",
  };
  return mapping[exp] || "JUNIOR";
};

export default async function registerAction(
  formData: FormData,
  tags?: string[],
): Promise<{ success: boolean; userId?: string; message?: string }> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const passwordConfirm = formData.get("passwordConfirm") as string;
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const experiences = formData.get("experiences") as string;

  console.log("📋 FormData 확인:", {
    email,
    name,
    role,
    experiences,
    tagsCount: tags?.length,
  });

  const errors: string[] = [];

  // 유효성 검사
  if (!EMAIL_REGEX.test(email)) {
    errors.push("올바른 이메일 형식을 입력해주세요.");
  }
  if (password.length < 8 || password.length > 20) {
    errors.push("비밀번호는 8~20자여야 합니다.");
  }
  if (password !== passwordConfirm) {
    errors.push("비밀번호가 일치하지 않습니다.");
  }
  if (name && name.length > 5) {
    errors.push("이름은 최대 5글자까지 가능합니다.");
  }
  if (!role || (role !== "일반" && role !== "강사")) {
    errors.push("가입 유형을 선택해주세요.");
  }
  if (!experiences) {
    errors.push("경력을 선택해주세요.");
  }

  if (errors.length > 0) {
    return {
      success: false,
      message: errors.join("\n"),
    };
  }

  try {
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
        role: mapRoleToAPI(role as "일반" | "강사"),
        tags: tags || [],
        learnerLevel: mapExperienceToAPI(experiences),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "회원가입 실패",
      };
    }

    console.log("✅ 회원가입 성공, userId:", data.userId);
    return {
      success: true,
      userId: data.userId,
      message: "회원가입이 완료되었습니다.",
    };
  } catch (error) {
    console.error("❌ API 호출 오류:", error);
    return {
      success: false,
      message: "네트워크 오류가 발생했습니다.",
    };
  }
}
