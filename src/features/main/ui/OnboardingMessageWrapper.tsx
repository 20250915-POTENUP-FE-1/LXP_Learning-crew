"use client";

import React from "react";
import Link from "next/link";
import useAuth from "@/hooks/service/useAuth";
import OnBoardingMessage from "./OnBoardingMessage";
import APP_ROUTES from "@/shared/constants/appRoutes";

const OnboardingMessageWrapper: React.FC = () => {
  const { isLoggedIn, user } = useAuth();

  // 로그인하지 않은 경우 아무것도 표시하지 않음
  if (!isLoggedIn || !user) {
    return null;
  }

  // role에 따른 메시지 설정
  const message =
    user.role === "INSTRUCTOR"
      ? `안녕하세요 ${user.name}님 새로운 강의를 등록해보세요`
      : `안녕하세요 ${user.name}님!`;

  // INSTRUCTOR인 경우에만 링크로 감싸기
  if (user.role === "INSTRUCTOR") {
    return (
      <Link href={`${APP_ROUTES.MAIN.COURSE_WRITE}`}>
        <OnBoardingMessage message={message} />
      </Link>
    );
  }

  // LEARNER인 경우 링크 없이 메시지만 표시
  return <OnBoardingMessage message={message} />;
};

export default OnboardingMessageWrapper;
