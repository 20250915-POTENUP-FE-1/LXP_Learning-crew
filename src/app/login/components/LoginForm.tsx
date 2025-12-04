"use client";
import { ActionButton } from "@/shared/components/ActionButton";
import InputField from "@/shared/components/InputField/InputField";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-10 pt-6">
      <div className="flex flex-col items-center gap-6">
        <InputField
          type="email"
          placeholder="example@example.com"
          title="아이디"
          variant="primary"
          required
        />

        <InputField
          type="password"
          placeholder="8자 이상 작성해주세요."
          title="비밀번호"
          variant="primary"
          minLength={8}
          required
        />
      </div>
      <ActionButton size="medium" value="로그인" variant="primary" />
    </form>
  );
};

export default LoginForm;
