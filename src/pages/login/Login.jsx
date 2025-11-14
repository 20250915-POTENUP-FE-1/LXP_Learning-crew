// import Button from "../../components/Button/Button";
// import LoginForm from "./components/LoginForm";
// import useFormData from "./hooks/useFormData";

// function Login() {
//   const { handleRegisterClick } = useFormData();

//   return (
//     <div className="flex w-full flex-col items-center bg-white py-10">
//       <h1 className="mb-2 text-center text-2xl font-bold">로그인</h1>
//       <p className="mb-13 text-center text-gray-500">
//         새로운 가능성을 발견하세요. 바로 시작할 수 있습니다.
//       </p>

//       <div className="mt-8 flex w-full max-w-sm flex-col gap-4">
//         <LoginForm />

//         <Button type="button" variant="default" onClick={handleRegisterClick}>
//           회원가입
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Login;
import Button from "../../components/Button/Button";
import LoginForm from "./components/LoginForm";
import useFormData from "./hooks/useFormData";

function Login() {
  const { handleRegisterClick } = useFormData();

  // 💡 Figma 디자인 기반 스타일 통일:
  // - H1: text-2xl font-bold (로그인)
  // - Sub Text: text-base text-gray-500 (새로운 가능성...)
  // - 컨테이너 너비: max-w-sm (480px 내외 표준 너비 유지)

  return (
    // 💥 py-16: 상하 여백을 64px로 통일 (표준 페이지 여백)
    <div className="flex w-full flex-col items-center bg-white py-16">
      {/* 1. 타이틀: Figma 디자인에 맞춰 폰트 크기 및 굵기, 여백 조정 */}
      <h1 className="mb-2 text-2xl font-bold text-gray-900">로그인</h1>

      {/* 2. 서브 텍스트: 텍스트 크기 및 색상 조정, 아래 마진(mb-8) 통일 */}
      <p className="mb-8 text-base font-normal text-gray-500">
        새로운 가능성을 발견하세요. 바로 시작할 수 있습니다.
      </p>

      {/* 3. 폼 컨테이너: 너비 max-w-sm 유지, 상단 마진(mt-8) 제거 후 
             컨테이너 자체에 너비와 정렬을 위임 */}
      <div className="flex w-full max-w-sm flex-col gap-4">
        <LoginForm />

        {/* 4. 회원가입 버튼 스타일링 (variant="default" 유지) */}
        <Button type="button" variant="default" onClick={handleRegisterClick}>
          회원가입
        </Button>
      </div>
    </div>
  );
}

export default Login;
