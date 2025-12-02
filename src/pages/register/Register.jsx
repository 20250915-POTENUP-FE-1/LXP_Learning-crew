// import React from "react";
// import InputField from "../../components/InputField";
// import RadioButton from "../../components/Radiobutton";
// import Button from "../../components/Button/Button";
// import RegisterForm from "./components/RegisterForm";

// const Register = () => {
//   return (
//     <div>
//       <div className="p-7">
//         <h1 className="font-w800 text-center text-xl">회원가입</h1>

//         <div className="font-w400 p-2 text-center text-gray-400">
//           새로운 가능성을 발견하세요. 바로 시작 할 수 있습니다.
//         </div>
//       </div>

//       <RegisterForm />
//     </div>
//   );
// };

// export default Register;
import React from "react";
import InputField from "../../components/InputField";
import RadioButton from "../../components/Radiobutton";
import Button from "../../components/Button/Button";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  // 💡 Login.jsx와 동일한 타이포 및 여백 구조 적용

  return (
    // 💥 Login.jsx와 동일한 표준 상하 여백 (py-16) 적용
    <div className="flex w-full flex-col items-center bg-white pt-16">
      {/* 1. 타이틀: Login.jsx와 동일한 text-2xl font-bold mb-2 적용 */}
      <h1 className="mb-2 text-2xl font-bold text-gray-900">회원가입</h1>

      {/* 2. 서브 텍스트: Login.jsx와 동일한 text-base font-normal mb-8 적용 */}
      <p className="mb-8 text-base font-normal text-gray-500">
        새로운 가능성을 발견하세요. 바로 시작할 수 있습니다.
      </p>

      {/* 3. 폼 컨테이너: RegisterForm이 LoginForm과 동일한 max-w-sm 너비를 사용하도록 감싸줍니다. */}
      <div className="flex w-full max-w-sm flex-col gap-4">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
