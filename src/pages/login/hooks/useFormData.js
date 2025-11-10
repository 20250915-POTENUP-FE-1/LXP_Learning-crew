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

  const handleLogin = (e) => {
    e.preventDefault();

    login(formData.email, formData.password).then((data) => {
      if (data.success) {
        navigate("/");
      } else {
        alert("로그인 안됨 ㅇㅇ");
      }
    });
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return { handleLogin, handleRegisterClick, setFormData, formData };
};

export default useFormData;
