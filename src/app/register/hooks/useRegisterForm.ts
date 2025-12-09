"use client";

import { useState, useTransition } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function useRegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [joinType, setJoinType] = useState<"일반" | "강사">("일반");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
  });

  const [isPending, startTransition] = useTransition();

  const validate = () => {
    const next = { email: "", password: "", passwordConfirm: "", name: "" };

    if (!EMAIL_REGEX.test(email))
      next.email = "올바른 이메일 형식을 입력해주세요.";
    if (password.length < 8 || password.length > 20)
      next.password = "비밀번호는 8~20자여야 합니다.";
    if (password !== passwordConfirm)
      next.passwordConfirm = "비밀번호가 일치하지 않습니다.";
    if (name && name.length > 5)
      next.name = "이름은 최대 5글자까지 가능합니다.";

    setErrors(next);
    return !next.email && !next.password && !next.passwordConfirm && !next.name;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const ok = validate();
    if (!ok) {
      e.preventDefault();
      return;
    }

    startTransition(() => {});
  };

  return {
    email,
    password,
    passwordConfirm,
    name,
    joinType,
    setEmail,
    setPassword,
    setPasswordConfirm,
    setName,
    setJoinType,
    errors,
    isPending,
    handleSubmit,
  };
}
