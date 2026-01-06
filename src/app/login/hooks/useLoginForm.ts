"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import loginAction from "@/app/login/hooks/actions";
import { validateCredentials } from "@/app/login/hooks/validation";

const useLoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { isValid, errors: validationErrors } = validateCredentials(
      email,
      password,
    );

    setErrors(validationErrors);

    if (!isValid) return;

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const result = await loginAction(formData);

      if (result.success) {
        window.dispatchEvent(new Event("login"));
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
