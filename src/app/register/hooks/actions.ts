"use server";

import { redirect } from "next/navigation";

export interface RegisterFormData {
  email: string;
  password: string;
  passwordConfirm: string;
  name?: string;
  joinType?: "일반" | "강사";
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function registerAction(
  formData: FormData,
): Promise<void> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const passwordConfirm = formData.get("passwordConfirm") as string;
  const name = formData.get("name") as string;
  const joinType = formData.get("joinType") as string;

  const errors: {
    email?: string;
    password?: string;
    passwordConfirm?: string;
    name?: string;
    joinType?: string;
  } = {};

  if (!EMAIL_REGEX.test(email)) {
    errors.email = "올바른 이메일 형식을 입력해주세요.";
  }
  if (password.length < 8 || password.length > 20)
    errors.password = "비밀번호는 8~20자여야 합니다.";

  if (password !== passwordConfirm)
    errors.passwordConfirm = "비밀번호가 일치하지 않습니다.";

  if (name && name.length > 5)
    errors.name = "이름은 최대 5글자까지 가능합니다.";

  if (joinType !== "일반" && joinType !== "강사") {
    errors.joinType = "유효하지 않은 가입 유형입니다.";
  }

  if (Object.keys(errors).length > 0) {
    throw new Error(JSON.stringify(errors));
  }

  redirect("/login");
}
