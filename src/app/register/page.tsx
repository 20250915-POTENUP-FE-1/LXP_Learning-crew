"use client";

import { useState } from "react";
import RegisterForm from "./components/RegisterForm";

import StepperInline from "./Step/Stepby";
import TagCategoryForm from "../tagcategory/components/TagCategoryForm";

const RegisterPage = () => {
  const [step, setStep] = useState<"register" | "tags">("register");
  const [registerFormData, setRegisterFormData] = useState<FormData | null>(
    null,
  );

  const handlePrevious = () => {
    setStep("register");
  };

  const handleRegisterComplete = (formData: FormData) => {
    setRegisterFormData(formData);
    setStep("tags");
  };

  return (
    <div className="flex w-full flex-col items-center pt-10">
      <h1 className="mb-2 text-2xl font-bold text-gray-900">
        {step === "register" ? "회원가입" : "관심 태그 설정"}
      </h1>
      <p
        className={`text-base text-gray-500 ${step === "register" ? "mb-6" : "mb-[72px]"}`}
      >
        새로운 가능성을 발견하세요. 바로 시작할 수 있습니다.
      </p>

      <StepperInline
        activeStep={step === "register" ? 1 : 2}
        className="mb-10"
      />

      <div
        className={
          step === "register"
            ? "flex w-full max-w-md flex-col items-center gap-4"
            : "hidden"
        }
      >
        <RegisterForm onNext={handleRegisterComplete} />
      </div>

      <div className={step === "tags" ? "flex w-full max-w-[782px]" : "hidden"}>
        <TagCategoryForm
          formData={registerFormData}
          onPrevious={handlePrevious}
        />
      </div>
    </div>
  );
};

export default RegisterPage;
