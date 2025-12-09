"use client";

import InputField from "@/shared/components/InputField/InputField";
import { ActionButton } from "@/shared/components/ActionButton";
import JoinTypeSelector from "./JoinTypeSelector";
import registerAction from "@/app/register/hooks/actions";
import useRegisterForm from "@/app/register/hooks/useRegisterForm";

export default function RegisterForm() {
  const {
    email,
    password,
    passwordConfirm,
    name,
    joinType,
    setEmail,
    setPassword,
    setPasswordConfirm,
    setName,
    setJoinType,
    errors,
    isPending,
    handleSubmit,
  } = useRegisterForm();

  return (
    <form className="w-full" action={registerAction} onSubmit={handleSubmit}>
      <div className="mx-auto flex w-full flex-col items-center gap-6">
        <InputField
          name="email"
          placeholder="example@example.com"
          title="아이디"
          variant="primary"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}

        <InputField
          name="password"
          placeholder="8~20자로 작성해주세요."
          title="비밀번호"
          variant="primary"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password}</p>
        )}

        <InputField
          name="passwordConfirm"
          placeholder="비밀번호를 다시 작성해주세요."
          title="비밀번호 확인"
          variant="primary"
          type="password"
          required
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        {errors.passwordConfirm && (
          <p className="text-sm text-red-500">{errors.passwordConfirm}</p>
        )}

        <InputField
          name="name"
          placeholder="이름을 작성해주세요."
          title="이름"
          variant="primary"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}

        <div className="flex w-full">
          <JoinTypeSelector value={joinType} onChange={setJoinType} />
        </div>

        <input type="hidden" name="joinType" value={joinType} />

        <div className="flex w-full">
          <ActionButton
            size="medium"
            variant="primary"
            type="submit"
            value="가입하기"
            disabled={isPending}
          >
            {isPending ? "처리중..." : "가입하기"}
          </ActionButton>
        </div>
      </div>
    </form>
  );
}
