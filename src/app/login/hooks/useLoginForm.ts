"use client";

import { useState } from "react";
import loginAction from "@/app/login/hooks/actions";

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const validate = () => {
    const newErrors = { email: "", password: "" };

    if (!EMAIL_REGEX.test(email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
    }

    if (password.length < 8) {
      newErrors.password = "비밀번호가 너무 짧습니다.";
    } else {
      if (password.length > 20) newErrors.password = "비밀번호가 너무 깁니다.";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((v) => v === "");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!validate()) {
      e.preventDefault();
    }
  };

  return {
    email,
    password,
    errors,
    setEmail,
    setPassword,
    handleSubmit,
    action: loginAction,
  };
};

export default useLoginForm;
