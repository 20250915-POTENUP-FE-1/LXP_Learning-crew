import { useState, FormEvent } from "react";

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

export default useRegisterForm;
