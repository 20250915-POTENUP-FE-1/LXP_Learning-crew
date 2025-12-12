import fs from "node:fs";
import path from "node:path";

const LOG_DIR = path.join(process.cwd(), ".data");
const LOG_FILE = path.join(LOG_DIR, "login_logs.json");

export interface LoginLog {
  email: string;
  timestamp: string;
  success: boolean;
  ip?: string;
}

function ensureLogFile() {
  try {
    if (!fs.existsSync(LOG_DIR)) {
      fs.mkdirSync(LOG_DIR, { recursive: true });
    }
    if (!fs.existsSync(LOG_FILE)) {
      fs.writeFileSync(LOG_FILE, JSON.stringify([], null, 2), {
        encoding: "utf-8",
      });
    }
  } catch (e) {
    console.error("로그인 로그 파일 초기화 실패", e);
  }
}

export function saveLoginLog(email: string, success: boolean, ip?: string) {
  try {
    ensureLogFile();

    const existingLogs: LoginLog[] = JSON.parse(
      fs.readFileSync(LOG_FILE, "utf-8") || "[]",
    );

    const newLog: LoginLog = {
      email,
      timestamp: new Date().toISOString(),
      success,
      ip,
    };

    existingLogs.push(newLog);

    const logsToKeep = existingLogs.slice(-1000);

    fs.writeFileSync(LOG_FILE, JSON.stringify(logsToKeep, null, 2), {
      encoding: "utf-8",
    });

    console.log(`[로그인 기록] ${email} - ${success ? "성공" : "실패"}`);
  } catch (e) {
    console.error("로그인 로그 저장 실패", e);
  }
}

export function getLoginLogs(): LoginLog[] {
  try {
    ensureLogFile();
    const logs = JSON.parse(fs.readFileSync(LOG_FILE, "utf-8") || "[]");
    return logs;
  } catch (e) {
    console.error("로그인 로그 읽기 실패", e);
    return [];
  }
}
