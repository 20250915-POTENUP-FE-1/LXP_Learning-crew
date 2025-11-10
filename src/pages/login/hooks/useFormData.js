const useFormData = () => {
  const handleLogin = async (e) => {
    e.preventDefault();

    alert("로그인 성공(힝 속았징?)");
  };

  return { handleLogin };
};

export default useFormData;
