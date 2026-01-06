"use server";

import { cookies } from "next/headers";
import { validateCredentials } from "@/app/login/hooks/validation";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  process.env.NEXTAUTH_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export default async function loginAction(
  formData: FormData,
): Promise<{ success: boolean; message?: string }> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { isValid, errors } = validateCredentials(email, password);

  if (!isValid) {
    return {
      success: false,
      message: errors.email || errors.password || "입력값을 확인해주세요.",
    };
  }

  try {
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

    const accessToken = data.accessToken;
    if (accessToken) {
      const cookieStore = await cookies();
      cookieStore.set("access_token", accessToken, {
        httpOnly: false,
        secure: false,
        sameSite: "lax",
        path: "/",
        maxAge: data.expiresIn || 3600,
      });
      console.log("[토큰 저장] accessToken이 쿠키에 저장되었습니다.");
    }

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
