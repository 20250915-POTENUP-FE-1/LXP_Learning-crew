export type RegisterRequest = {
  email: string;
  password: string;
  name: string;
  role: "LEARNER" | "INSTRUCTOR" | "ADMIN";
  tags: number[]; // min 3, max 5
  learnerLevel: "JUNIOR" | "MIDDLE" | "SENIOR" | "EXPERT";
  job?: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  expiresIn: number;
};

export type RegisterResponse = {
  userId: string; // UUID
  email: string;
  name: string;
  role: "LEARNER" | "INSTRUCTOR" | "ADMIN";
};
