"use server";

import { cookies } from "next/headers";

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

export default async function loginAction(
  formData: FormData,
): Promise<{ success: boolean; message?: string }> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!EMAIL_REGEX.test(email)) {
    return {
      success: false,
      message: "올바른 이메일 형식이 아닙니다.",
    };
  }

  if (password.length < 8 || password.length > 20) {
    return {
      success: false,
      message: "비밀번호는 8~20자여야 합니다.",
    };
  }

  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL ||
      process.env.API_BASE_URL ||
      "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("로그인 실패:", data.message);
      return {
        success: false,
        message: data.message || "로그인 실패",
      };
    }

    const cookieStore = await cookies();
    cookieStore.set("accessToken", data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: data.expiresIn,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("로그인 오류:", error);
    return {
      success: false,
      message: "서버 연결에 실패했습니다.",
    };
  }
}
