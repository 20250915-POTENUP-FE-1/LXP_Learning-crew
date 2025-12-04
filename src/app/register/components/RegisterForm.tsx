"use client";

import InputField from "@/shared/components/InputField/InputField";
import { ActionButton } from "@/shared/components/ActionButton";
import JoinTypeSelector from "./JoinTypeSelector";
import useRegisterForm from "../hooks/useFormData";
import { useState } from "react";

const RegisterForm = () => {
  const [joinType, handleJoinTypeChange] = useState<"일반" | "강사">("일반");

  const {
    password,
    passwordConfirm,
    setPassword,
    setPasswordConfirm,
    handleSubmit,
  } = useRegisterForm();

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="mx-auto flex w-full flex-col items-center gap-6">
        <InputField
          placeholder="example@example.com"
          title="아이디"
          variant="primary"
          required
        />

        <InputField
          placeholder="8자 이상 작성해주세요."
          title="비밀번호"
          variant="primary"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <InputField
          placeholder="비밀번호를 다시 작성해주세요."
          title="비밀번호 확인"
          variant="primary"
          type="password"
          required
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />

        <InputField
          placeholder="이름을 작성해주세요."
          title="이름"
          variant="primary"
          required
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
