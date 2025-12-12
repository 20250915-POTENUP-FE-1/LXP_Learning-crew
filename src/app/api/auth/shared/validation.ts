import type { LoginDto, RegisterDto, ValidationError } from "./types";

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLoginDto(dto: LoginDto): ValidationError | null {
  if (!dto.email || !dto.password) {
    return {
      code: "AUTH_005",
      message: "이메일과 비밀번호는 필수 항목입니다.",
    };
  }

  if (!EMAIL_REGEX.test(dto.email)) {
    return {
      code: "AUTH_005",
      message: "올바른 이메일 형식이 아닙니다.",
    };
  }

  if (dto.password.length < 8 || dto.password.length > 20) {
    return {
      code: "AUTH_005",
      message: "비밀번호는 8~20자 사이여야 합니다.",
    };
  }

  return null;
}

export function validateRegisterDto(dto: RegisterDto): ValidationError | null {
  if (!dto.email || !dto.password || !dto.name || !dto.role) {
    return {
      code: "AUTH_005",
      message: "이메일, 비밀번호, 이름, 역할은 필수 항목입니다.",
    };
  }

  if (!EMAIL_REGEX.test(dto.email)) {
    return { code: "AUTH_005", message: "올바른 이메일 형식이 아닙니다." };
  }

  if (dto.password.length < 8 || dto.password.length > 20) {
    return { code: "AUTH_005", message: "비밀번호는 8~20자 사이여야 합니다." };
  }

  if (!dto.tagIds || dto.tagIds.length < 3 || dto.tagIds.length > 5) {
    return {
      code: "AUTH_005",
      message: "태그는 최소 3개, 최대 5개까지 선택해야 합니다.",
    };
  }

  return null;
}
