export const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

export type LoginValidationResult = {
  errors: { email: string; password: string };
  isValid: boolean;
};

export const validateCredentials = (
  email: string,
  password: string,
): LoginValidationResult => {
  const errors = { email: "", password: "" };

  if (!EMAIL_REGEX.test(email)) {
    errors.email = "올바른 이메일 형식이 아닙니다.";
  }

  if (password.length < 8 || password.length > 20) {
    errors.password = "비밀번호는 8~20자여야 합니다.";
  }

  return {
    errors,
    isValid: Object.values(errors).every((v) => v === ""),
  };
};
