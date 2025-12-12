export interface User {
  email: string;
  password: string;
  name: string;
  role: string;
  tags: string[];
  learnerLevel: string;
}

import fs from "node:fs";
import path from "node:path";

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "users.json");

const initialUsers: User[] = [
  {
    email: "user@example.com",
    password: "password123",
    name: "김길동",
    role: "LEARNER",
    tags: ["JavaScript", "React", "Node.js"],
    learnerLevel: "JUNIOR",
  },
  {
    email: "instructor@example.com",
    password: "instructor123",
    name: "이강사",
    role: "INSTRUCTOR",
    tags: ["Java", "Spring Boot", "Docker"],
    learnerLevel: "EXPERT",
  },
  {
    email: "test@example.com",
    password: "test1234",
    name: "김테스트",
    role: "LEARNER",
    tags: ["Python", "Django", "PostgreSQL"],
    learnerLevel: "MIDDLE",
  },
];

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

function readUsers(): User[] {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    const arr = JSON.parse(raw) as User[];
    return Array.isArray(arr) ? arr : [];
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
  users.push(user);
  writeUsers(users);
}

export function findUserByEmail(email: string): User | undefined {
  const users = readUsers();
  return users.find((user) => user.email === email);
}
