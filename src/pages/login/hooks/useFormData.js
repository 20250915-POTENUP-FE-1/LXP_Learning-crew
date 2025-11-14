import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/service/useAuth";
import { useState } from "react";

const useFormData = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

try {
      // 2. 💡 login 함수를 await로 호출하여 성공/실패 데이터를 동기적으로 받습니다.
      const data = await login(formData.email, formData.password); 
      
      if (data.success) {
        // 성공 시 홈페이지로 이동
        navigate("/");
      } else {
        // useAuth().login 내부에서 발생한 로직 실패 (예: 이메일/비번 불일치)
        alert(data.error || "로그인에 실패했습니다.");
      }
    } catch (error) {
      // 3. 🚨 네트워크 또는 Firebase 오류 발생 시 처리
      console.error("로그인 중 치명적 오류 발생:", error);
      alert("로그인 중 알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

const handleRegisterClick = () => {
    navigate("/register");
  };


  return { handleLogin, handleRegisterClick, setFormData, formData };
};

export default useFormData;
