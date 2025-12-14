import type { User } from "./userStore";

// Share sessions across route/server-action module instances during dev.
type SessionStore = Map<string, { user: User; exp: number }>;
const globalStore = globalThis as typeof globalThis & {
  __sessionStore?: SessionStore;
};
const sessions: SessionStore =
  globalStore.__sessionStore ?? new Map<string, { user: User; exp: number }>();
if (!globalStore.__sessionStore) {
  globalStore.__sessionStore = sessions;
}

function generateSessionId(): string {
  return `sess_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export function createSession(user: User, ttlMs = 3600_000) {
  const id = generateSessionId();
  const exp = Date.now() + ttlMs;
  sessions.set(id, { user, exp });
  return { id, exp };
}

export function getSession(id: string | undefined | null) {
  if (!id) return null;
  const data = sessions.get(id);
  if (!data) return null;
  if (data.exp < Date.now()) {
    sessions.delete(id);
    return null;
  }
  return data;
}

export function destroySession(id: string | undefined | null) {
  if (!id) return false;
  return sessions.delete(id);
}

export function updateSession(id: string, updatedUser: User) {
  const session = getSession(id);
  if (!session) return false;

  sessions.set(id, {
    user: updatedUser,
    exp: session.exp,
  });

  return true;
}
