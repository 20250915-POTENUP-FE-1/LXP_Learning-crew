import { useNavigate } from "react-router-dom";

const useFormData = () => {
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
  };
  const handleRegisterClick = () => {
    // TODO: 로그인 클릭 로직
  };

  return { handleLogin, handleRegisterClick };
};

export default useFormData;
