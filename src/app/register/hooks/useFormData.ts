import { useState, FormEvent } from "react";

export interface RegisterFormData {
  email: string;
  password: string;
  passwordConfirm: string;
}

const useRegisterForm = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    console.log("폼 제출");
  };

  return {
    password,
    passwordConfirm,
    setPassword,
    setPasswordConfirm,
    handleSubmit,
  };
};

export const useRegisterValidation = () => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const validate = (formData: RegisterFormData) => {
    let isValid = true;
    const newErrors = { email: "", password: "", passwordConfirm: "" };

    // 이메일 정규식 검사
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식을 입력해주세요.";
      isValid = false;
    }

    if (formData.password.length < 8) {
      newErrors.password = "비밀번호는 8자 이상이어야 합니다.";
      isValid = false;
    }

    if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = "비밀번호가 일치하지 않습니다.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return { errors, validate };
};

export default useRegisterForm;
