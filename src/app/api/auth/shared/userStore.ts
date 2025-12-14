import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { getContentToIdMap } from "./tagCatalog";

export interface User {
  userId: string;
  email: string;
  password: string;
  name: string;
  role: string;
  tagIds: number[];
  level: string;
}

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "users.json");

const initialUsers: User[] = [];

function generateUserId(): string {
  return crypto.randomUUID();
}

function ensureDataFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify(initialUsers, null, 2), {
        encoding: "utf-8",
      });
    }
  } catch (e) {
    console.error("유저 데이터 파일 초기화 실패", e);
  }
}

function isStringArray(v: unknown): v is string[] {
  return Array.isArray(v) && v.every((x) => typeof x === "string");
}

function isNumberArray(v: unknown): v is number[] {
  return Array.isArray(v) && v.every((x) => typeof x === "number");
}

type LegacyUser = {
  userId?: unknown;
  email?: unknown;
  password?: unknown;
  name?: unknown;
  role?: unknown;
  tagIds?: unknown;
  tags?: unknown;
  level?: unknown;
  learnerLevel?: unknown;
};

function normalizeUsers(anyArr: unknown[]): User[] {
  const map = getContentToIdMap();
  return anyArr
    .filter((u): u is LegacyUser => !!u && typeof u === "object")
    .map((u) => {
      let tagIds: number[] = isNumberArray(u.tagIds) ? u.tagIds : [];

      if (tagIds.length === 0 && isStringArray(u.tags)) {
        tagIds = u.tags
          .map((label) => map.get(label))
          .filter((n): n is number => typeof n === "number");
      }

      const level =
        typeof u.level === "string"
          ? u.level
          : (typeof u.learnerLevel === "string" ? u.learnerLevel : undefined) ||
            "JUNIOR";

      const user: User = {
        userId:
          typeof u.userId === "string" && u.userId.length > 0
            ? u.userId
            : generateUserId(),
        email: typeof u.email === "string" ? u.email : "",
        password: typeof u.password === "string" ? u.password : "",
        name: typeof u.name === "string" ? u.name : "",
        role: typeof u.role === "string" ? u.role : "LEARNER",
        tagIds,
        level,
      };

      return user;
    });
}

function readUsers(): User[] {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    const arr = JSON.parse(raw) as unknown[];
    if (!Array.isArray(arr)) return [];
    const normalized = normalizeUsers(arr);
    const needPersist = JSON.stringify(arr) !== JSON.stringify(normalized);
    if (needPersist) {
      writeUsers(normalized);
    }
    return normalized;
  } catch (e) {
    console.error("유저 데이터 읽기 실패", e);
    return [];
  }
}

function writeUsers(users: User[]) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2), {
      encoding: "utf-8",
    });
  } catch (e) {
    console.error("유저 데이터 쓰기 실패", e);
  }
}

export function getUserStore(): User[] {
  const users = readUsers();
  return users;
}

export function addUserToStore(user: User): void {
  const users = readUsers();
  const normalizedUser: User = {
    ...user,
    userId: user.userId || generateUserId(),
  };

  users.push(normalizedUser);
  writeUsers(users);
}

export function findUserByEmail(email: string): User | undefined {
  const users = readUsers();
  return users.find((user) => user.email === email);
}

export function updateUserRole(userId: string, newRole: string): User | null {
  const users = readUsers();
  const userIndex = users.findIndex((user) => user.userId === userId);

  if (userIndex === -1) {
    return null;
  }

  users[userIndex].role = newRole;
  writeUsers(users);

  return users[userIndex];
}
