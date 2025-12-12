export interface ValidationError {
  code: string;
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
  tags?: string[];
  learnerLevel?: string;
}
