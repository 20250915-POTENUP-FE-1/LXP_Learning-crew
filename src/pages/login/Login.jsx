import Button from "../../components/Button/Button";

import LoginForm from "./components/LoginForm";
import useFormData from "./hooks/useFormData";

function Login() {
  const { handleRegisterClick } = useFormData();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1 className="mb-2 text-center text-2xl font-bold">로그인</h1>
      <p className="mb-13 text-center text-gray-500">
        새로운 가능성을 발견하세요. 바로 시작할 수 있습니다.
      </p>

      <div className="flex flex-col gap-4">
        <LoginForm />

        <Button type="button" variant="default" onClick={handleRegisterClick}>
          회원가입
        </Button>
      </div>
    </div>
  );
}

export default Login;
