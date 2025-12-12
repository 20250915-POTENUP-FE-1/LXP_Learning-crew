"use client";

import InputField from "@/shared/components/InputField/InputField";

import { ActionButton } from "@/shared/components/ActionButton";
import useRegisterForm from "../hooks/useRegisterForm";
import JoinTypeSelector from "./JoinTypeSelector";
import ExperienceSelect from "./ExperienceSelect";

type RegisterFormProps = {
  onNext?: (formData: FormData) => void;
};

export default function RegisterForm({ onNext }: RegisterFormProps) {
  const {
    email,
    password,
    passwordConfirm,
    name,
    role,
    setEmail,
    setPassword,
    setPasswordConfirm,
    setName,
    setRole,
    errors,
    handleSubmit,
    experiences,
    handleExperienceChange,
  } = useRegisterForm();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const ok = await handleSubmit(e);
    if (ok && onNext) {
      const formData = new FormData();
      formData.set("email", email);
      formData.set("password", password);
      formData.set("passwordConfirm", passwordConfirm);
      formData.set("name", name);
      formData.set("role", role);
      formData.set("experiences", experiences);

      onNext(formData);
    }
  };

  return (
    <form className="w-full" onSubmit={onSubmit}>
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
          <JoinTypeSelector value={role} onChange={setRole} />
        </div>

        <ExperienceSelect
          value={experiences}
          onChange={handleExperienceChange}
        />

        <div className="flex w-full">
          <ActionButton
            size="medium"
            variant="primary"
            type="submit"
            value="다음"
          />
        </div>
      </div>
    </form>
  );
}
