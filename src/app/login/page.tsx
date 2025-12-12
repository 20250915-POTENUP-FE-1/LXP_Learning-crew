"use client";

import { ActionButton } from "@/shared/components/ActionButton";
import LoginForm from "./components/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex w-full flex-col items-center py-16">
      <h1 className="mb-2 text-2xl font-bold text-gray-900">로그인</h1>
      <p className="mb-8 text-base font-normal text-gray-500">
        새로운 가능성을 발견하세요. 바로 시작할 수 있습니다.
      </p>

      <div className="flex w-full max-w-md flex-col gap-4">
        <LoginForm />
        <Link href="/register">
          <div className="flex w-full max-w-md flex-col gap-4">
            <ActionButton size="medium" value="회원가입" variant="secondary" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
