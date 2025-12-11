"use client";

import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function useRegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState<"일반" | "강사">("일반");
  const [experiences, setExperiences] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
    experiences: "",
  });

  const validate = () => {
    const newErrors = {
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
      experiences: "",
    };

    if (!email) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!EMAIL_REGEX.test(email)) {
      newErrors.email = "올바른 이메일 형식을 입력해주세요.";
    }

    if (!password) {
      newErrors.password = "비밀번호를 입력해주세요.";
    } else if (password.length < 8 || password.length > 20) {
      newErrors.password = "비밀번호는 8~20자 사이여야 합니다.";
    }

    if (!passwordConfirm) {
      newErrors.passwordConfirm = "비밀번호 확인을 입력해주세요.";
    } else if (password !== passwordConfirm) {
      newErrors.passwordConfirm = "비밀번호가 일치하지 않습니다.";
    }

    if (!name) {
      newErrors.name = "이름을 입력해주세요.";
    }

    if (!experiences) {
      newErrors.experiences = "경력을 선택해주세요.";
      alert("경력을 선택해주세요.");
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleExperienceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setExperiences(e.target.value);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<boolean> => {
    e.preventDefault();
    if (!validate()) return false;

    return true;
  };

  return {
    email,
    password,
    passwordConfirm,
    name,
    role,
    experiences,
    setEmail,
    setPassword,
    setPasswordConfirm,
    setName,
    setRole,
    setExperiences,
    errors,
    handleSubmit,
    handleExperienceChange,
  };
}
