import type { Metadata } from "next";
import { ActionButton } from "@/shared/components/ActionButton";
import LoginForm from "./components/LoginForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "로그인 | Lunnigcrew",
  description: "Lunnigcrew 계정으로 로그인하고 학습과 커뮤니티를 시작하세요.",
  alternates: {
    canonical: "/login",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "로그인 | Lunnigcrew",
    description: "Lunnigcrew 계정으로 로그인하고 학습과 커뮤니티를 시작하세요.",
    url: "/login",
    siteName: "Lunnigcrew",
    locale: "ko_KR",
    type: "website",
  },
};

const LoginPage = () => {
  return (
    <div className="flex w-full flex-col items-center py-16">
      <h1 className="mb-2 text-2xl font-bold text-gray-900">로그인</h1>
      <p className="mb-8 text-base font-normal text-gray-500">
        새로운 가능성을 발견하세요. 바로 시작할 수 있습니다.
      </p>

      <div className="flex w-full max-w-md flex-col gap-4">
        <LoginForm />
        <Link href="/register" prefetch={false}>
          <div className="flex w-full max-w-md flex-col gap-4">
            <ActionButton size="medium" value="회원가입" variant="secondary" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
