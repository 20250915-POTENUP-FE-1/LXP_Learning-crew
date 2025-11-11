import React from "react";
import InputField from "../../components/InputField";
import RadioButton from "../../components/Radiobutton";
import Button from "../../components/Button/Button";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  return (
    <div>
      <div className="p-7">
        <h1 className="font-w800 text-center text-xl">회원가입</h1>

        <div className="font-w400 p-2 text-center text-gray-400">
          새로운 가능성을 발견하세요. 바로 시작 할 수 있습니다.
        </div>
      </div>

      <RegisterForm />
    </div>
  );
};

export default Register;
