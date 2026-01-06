"use client";

import InputField from "@/shared/components/InputField/InputField";
import { ActionButton } from "@/shared/components/ActionButton";
import useLoginForm from "../hooks/useLoginForm";

const LoginForm = () => {
  const {
    email,
    password,
    errors,
    isLoading,
    setEmail,
    setPassword,
    handleSubmit,
  } = useLoginForm();

  return (
    <form className="flex flex-col gap-10 pt-6" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-6">
        <InputField
          name="email"
          type="email"
          placeholder="example@example.com"
          title="아이디"
          variant="primary"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}

        <InputField
          name="password"
          type="password"
          placeholder="8~20자로 작성해주세요."
          title="비밀번호"
          variant="primary"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password}</p>
        )}
      </div>

      <ActionButton
        size="medium"
        value={isLoading ? "로그인 중..." : "로그인"}
        variant="primary"
        type="submit"
        disabled={isLoading}
      />
    </form>
  );
};

export default LoginForm;
