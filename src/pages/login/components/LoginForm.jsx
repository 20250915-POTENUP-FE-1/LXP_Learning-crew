import useFormData from "../hooks/useFormData";
import Input from "../../../components/Input";
import Button from "../../../components/Button/Button";

const LoginForm = () => {
  const { handleLogin, formData, setFormData } = useFormData();

  return (
    <form className="flex flex-col gap-15" onSubmit={handleLogin}>
      <div className="flex flex-col gap-6">
        <Input
          value={formData.email}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, email: e.target.value }));
          }}
          placeholder={"이메일 입력하세요."}
          title={"아이디"}
          type="email"
        />

        <Input
          value={formData.password}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, password: e.target.value }));
          }}
          placeholder={"비밀번호를 입력하세요."}
          title={"비밀번호"}
          type="password"
        />
      </div>

      <Button type="submit" variant="primary">
        로그인
      </Button>
    </form>
  );
};

export default LoginForm;
