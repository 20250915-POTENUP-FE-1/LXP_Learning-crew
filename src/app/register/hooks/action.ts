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
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.NEXTAUTH_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const passwordConfirm = formData.get("passwordConfirm") as string;
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const experiences = formData.get("experiences") as string;

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
    let tagIds: number[] = [];
    if (tags && tags.length > 0) {
      try {
        const tagRes = await fetch(`${baseUrl}/api/auth/tag`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
        });
        const tagJson = await tagRes.json();
        const categories: Array<{
          tags: Array<{ tagId: number; content: string }>;
        }> = tagJson?.data?.content || [];

        const contentToId = new Map<string, number>();
        categories.forEach((cat) => {
          cat.tags?.forEach((t) => {
            if (t?.content && typeof t.tagId === "number") {
              contentToId.set(t.content, t.tagId);
            }
          });
        });

        tagIds = tags
          .map((label) => contentToId.get(label))
          .filter((v): v is number => typeof v === "number");
      } catch (e) {
        console.error("태그 매핑 실패, 빈 배열로 진행:", e);
        tagIds = [];
      }
    }

    const response = await fetch(`${baseUrl}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
        role: mapRoleToAPI(role as "일반" | "강사"),
        tagIds,
        level: mapExperienceToAPI(experiences),
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return {
        success: false,
        message: data.error?.message || "회원가입 실패",
      };
    }

    return {
      success: true,
      message: "회원가입이 완료되었습니다.",
    };
  } catch (error) {
    console.error("API 호출 오류:", error);
    return {
      success: false,
      message: "네트워크 오류가 발생했습니다.",
    };
  }
}
