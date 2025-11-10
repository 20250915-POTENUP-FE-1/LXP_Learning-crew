const useFormData = () => {
  const handleLogin = async (e) => {
    e.preventDefault();

    alert("로그인 클릭");
  };

  return { handleLogin };
};

export default useFormData;
