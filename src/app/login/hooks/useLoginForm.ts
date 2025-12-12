"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import loginAction from "@/app/login/hooks/actions";

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

const useLoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = { email: "", password: "" };

    if (!EMAIL_REGEX.test(email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
    }

    if (password.length < 8) {
      newErrors.password = "비밀번호가 너무 짧습니다.";
    } else if (password.length > 20) {
      newErrors.password = "비밀번호가 너무 깁니다.";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((v) => v === "");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const result = await loginAction(formData);

      if (result.success) {
        router.push("/");
      } else {
        setErrors({
          email: result.message || "로그인 실패",
          password: "",
        });
      }
    } catch (error) {
      console.error("로그인 오류:", error);
      setErrors({
        email: "서버 연결에 실패했습니다.",
        password: "",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    password,
    errors,
    isLoading,
    setEmail,
    setPassword,
    handleSubmit,
    action: loginAction,
  };
};

export default useLoginForm;
