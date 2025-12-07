"use client";

import { ActionButton } from "@/shared/components/ActionButton";
import InputField from "@/shared/components/InputField/InputField";
import useLoginForm from "@/app/login/hooks/useFormData";

const LoginForm = () => {
  const { values, errors, handleChange, handleSubmit } = useLoginForm();

  return (
    <form className="flex flex-col gap-10 pt-6" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-6">
        <InputField
          type="email"
          placeholder="example@example.com"
          title="아이디"
          variant="primary"
          required
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}

        <InputField
          type="password"
          placeholder="8~20자 비밀번호"
          title="비밀번호"
          variant="primary"
          minLength={8}
          maxLength={20}
          required
          value={values.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password}</p>
        )}
      </div>

      <ActionButton
        size="medium"
        value="로그인"
        variant="primary"
        type="submit"
      />
    </form>
  );
};

export default LoginForm;
