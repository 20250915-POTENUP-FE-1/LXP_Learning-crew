export interface ValidationError {
  code: "AUTH_001" | "AUTH_002" | "AUTH_003" | "AUTH_004" | "AUTH_005";
  message: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  expiresIn: number;
}

export interface RegisterDto {
  email: string;
  password: string;
  name: string;
  role: string;
  tagIds: number[];
  level: string;
}

export interface ApiResponse<T = unknown> {
  data: T | null;
  error: ValidationError | null;
  success: boolean;
  timestamp: string;
}
