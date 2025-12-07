"use client";

import InputField from "@/shared/components/InputField/InputField";
import { ActionButton } from "@/shared/components/ActionButton";
import JoinTypeSelector from "./JoinTypeSelector";
import useRegisterForm, { useRegisterValidation } from "../hooks/useFormData";
import { useState } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); //

  const [joinType, setJoinType] = useState<"일반" | "강사">("일반");
  const handleJoinTypeChange = (value: "일반" | "강사") => setJoinType(value);

  const {
    password,
    passwordConfirm,
    setPassword,
    setPasswordConfirm,
    handleSubmit: handleBaseSubmit,
  } = useRegisterForm();

  const { errors, validate } = useRegisterValidation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validate({
      email,
      password,
      passwordConfirm,
    });

    if (!isValid) return;

    if (name.length > 5) {
      alert("이름은 최대 5글자까지 가능합니다.");
      return;
    }

    console.log("폼 최종 제출", { email, password, joinType, name });

    handleBaseSubmit(e);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="mx-auto flex w-full flex-col items-center gap-6">
        <InputField
          placeholder="example@example.com"
          title="아이디"
          variant="primary"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}

        <InputField
          placeholder="8~20자 비밀번호"
          title="비밀번호"
          variant="primary"
          type="password"
          required
          value={password}
          minLength={8}
          maxLength={20}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password}</p>
        )}

        <InputField
          placeholder="비밀번호를 다시 작성해주세요."
          title="비밀번호 확인"
          variant="primary"
          type="password"
          required
          value={passwordConfirm}
          minLength={8}
          maxLength={20}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        {errors.passwordConfirm && (
          <p className="text-sm text-red-500">{errors.passwordConfirm}</p>
        )}

        <InputField
          placeholder="이름을 작성해주세요."
          title="이름"
          variant="primary"
          required
          value={name}
          maxLength={5}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="flex w-full">
          <JoinTypeSelector value={joinType} onChange={handleJoinTypeChange} />
        </div>

        <div className="flex w-full">
          <ActionButton
            size="medium"
            value="가입하기"
            variant="primary"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
