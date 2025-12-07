"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface LoginValues {
  email: string;
  password: string;
}

const useLoginForm = () => {
  const router = useRouter();

  const [values, setValues] = useState<LoginValues>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name: keyof LoginValues, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = { email: "", password: "" };

    if (!values.email.includes("@")) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
    }

    if (values.password.length < 8 || values.password.length > 20) {
      newErrors.password = "비밀번호는 8~20자여야 합니다.";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((msg) => msg === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("로그인 성공!", values);

    router.push("/");
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useLoginForm;
