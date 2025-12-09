"use server";

import { redirect } from "next/navigation";

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

export default async function loginAction(formData: FormData): Promise<void> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const errors: { email?: string; password?: string } = {};

  if (!EMAIL_REGEX.test(email)) {
    errors.email = "올바른 이메일 형식이 아닙니다.";
  }

  if (password.length < 8 || password.length > 20) {
    errors.password = "비밀번호는 8~20자여야 합니다.";
  }

  if (Object.keys(errors).length > 0) {
    throw new Error(JSON.stringify(errors));
  }

  redirect("/");
}
