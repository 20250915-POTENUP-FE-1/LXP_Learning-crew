export function maskPassword(pwd: string | undefined | null, max = 10): string {
  if (!pwd) return "";
  const len = Math.min(max, pwd.length);
  return "*".repeat(len);
}

export function safeLoginLog(email: string, password: string) {
  return { email, password: maskPassword(password) };
}

export function safeRegisterLog(dto: {
  email: string;
  password: string;
  name: string;
  role: string;
  tags?: string[];
  learnerLevel?: string;
}) {
  const { email, password, name, role, tags, learnerLevel } = dto;
  return {
    email,
    password: maskPassword(password),
    name,
    role,
    tags,
    learnerLevel,
  };
}
