"use client";

import Link from "next/link";
import { ActionButton } from "../ActionButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface HeaderClientProps {
  isLoggedIn: boolean;
}

const HeaderClient = ({ isLoggedIn }: HeaderClientProps) => {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.error("로그아웃 실패:", error);
      setIsLoggingOut(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div>
        <Link href="/login">
          <ActionButton variant="secondaryBorder" value={"로그인"} />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <Link href="/my">
        <ActionButton variant="secondaryBorder" value={"마이페이지"} />
      </Link>
      <ActionButton
        variant="secondaryBorder"
        value={isLoggingOut ? "로그아웃 중..." : "로그아웃"}
        onClick={handleLogout}
        disabled={isLoggingOut}
      />
    </div>
  );
};

export default HeaderClient;
