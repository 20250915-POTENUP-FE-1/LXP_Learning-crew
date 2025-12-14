"use client";

import { useState, useEffect } from "react";

interface User {
  userId: string;
  email: string;
  name: string;
  role: string;
  tagIds: number[];
  level: string;
}

export default function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();

    const handleLoginEvent = () => {
      checkAuthStatus();
    };

    window.addEventListener("login", handleLoginEvent);
    window.addEventListener("logout", handleLoginEvent);

    return () => {
      window.removeEventListener("login", handleLoginEvent);
      window.removeEventListener("logout", handleLoginEvent);
    };
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch("/api/auth/me", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setUser({
          userId: data.user.userId ?? "",
          email: data.user.email,
          name: data.user.name,
          role: data.user.role,
          tagIds: data.user.tagIds,
          level: data.user.level,
        });
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("인증 확인 오류:", error);
      setUser(null);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      document.cookie =
        "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      setUser(null);
      setIsLoggedIn(false);
      window.dispatchEvent(new Event("logout"));
    } catch (error) {
      console.error("로그아웃 오류:", error);
    }
  };

  return {
    isLoggedIn,
    user,
    isLoading,
    logout,
    refreshAuth: checkAuthStatus,
  };
}
