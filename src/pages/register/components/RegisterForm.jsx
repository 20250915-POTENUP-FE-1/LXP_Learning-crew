import React, { useEffect } from "react";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/Radiobutton";
import Button from "../../../components/Button";
import useFormData from "../hooks/useFormData";

const RegisterForm = () => {
  const { handleRegisterSubmit, setFormData, formData } = useFormData();

  useEffect(() => {
    if (!formData.userType) {
      setFormData((prev) => ({ ...prev, userType: "일반" }));
    }
  }, []);

  const handleUserTypeChange = (e) => {
    const newUserType = e.target.value;
    setFormData((prev) => ({
      ...prev,
      userType: newUserType,

      creatorCode: newUserType === "일반" ? "" : prev.creatorCode,
    }));
  };

  const handleCreatorCodeChange = (e) => {
    setFormData((prev) => ({ ...prev, creatorCode: e.target.value }));
  };

  const isInstructor = formData.userType === "강사";

  return (
    <form action={handleRegisterSubmit}>
      <div className="space-y-6m-4 mx-auto flex w-full max-w-[460px] flex-col gap-4.5">
        <InputField
          title="아이디"
          type="email"
          name="ID"
          placeholder="example@exple.com 이메일 형식으로 작성해주세요."
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />

        <InputField
          title="비밀번호"
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, password: e.target.value }))
          }
        />

        <InputField
          title="비밀번호 재확인"
          type="password"
          name="validatePassowrd"
          placeholder="비밀번호를 다시 한번 입력해주세요."
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              validatePassword: e.target.value,
            }))
          }
        />

        <InputField
          title="이름"
          type="text"
          name="이름"
          placeholder="이름을 작성해주세요.."
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, displayName: e.target.value }))
          }
        />

        {/* <div className="flex items-center justify-between"> */}
        <div
          className={`flex items-center justify-between ${!isInstructor ? "mb-[60px]" : ""}`}
        >
          <div className="text-base font-semibold text-gray-700">가입 유형</div>

          <div className="flex gap-4">
            <RadioButton
              id="일반"
              label="일반"
              name="userType"
              value="일반"
              onChange={handleUserTypeChange}
              checked={formData.userType === "일반"}
            />

            <RadioButton
              id="강사"
              label="강사"
              name="userType"
              value="강사"
              onChange={handleUserTypeChange}
              checked={formData.userType === "강사"}
            />
          </div>
        </div>
        {/* 3. 조건부 InputField (강사 코드) */}
        {isInstructor && (
          <div>
            <InputField
              title="강사 코드"
              type="text"
              name="creatorCode"
              placeholder="강사 코드를 입력해주세요."
              onChange={handleCreatorCodeChange}
            />
          </div>
        )}

        <Button type="submit" p-5 children="가입하기" />
      </div>
    </form>
  );
};

export default RegisterForm;
