import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/service/useAuth";

const useFormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    validatePassword: "",
    displayName: "",
    role: "user",
  });

  const { register } = useAuth();

  const handleRegisterSubmit = () => {
    // TODO: password validate

    register(
      formData.email,
      formData.password,
      formData.displayName,
      formData.role,
    ).then((data) => {
      if (data.success) {
        navigate("/");
      } else {
        alert("회원가입 실패");
      }
    });
  };

  return { handleRegisterSubmit, setFormData, formData };
};

export default useFormData;
