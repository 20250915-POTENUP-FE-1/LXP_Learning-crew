"use client";

import React from "react";
import type { OnBoardingMessageProps } from "../model/OnBoardingMessage.type";

/**
 * OnBoardingMessage 컴포넌트
 *
 * 신규 사용자에게 환영 메시지를 표시하는 배너 형 컴포넌트
 * TailwindCSS를 사용한 반응형 디자인을 지원합니다.
 *
 * @example
 * ```tsx
 * <OnBoardingMessage
 *   message="환영합니다! {name}님"
 *   userName="김준호"
 *   onClick={() => console.log('clicked')}
 * />
 * ```
 */
const OnBoardingMessage: React.FC<OnBoardingMessageProps> = ({
  message,
  onClick = () => {},
}) => {
  return (
    <div className="">
      <button
        className="flex w-fit cursor-pointer items-center gap-2.5 rounded-2xl bg-gray-100 px-4 py-3 transition-colors hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onClick();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <span className="whitespace-nowrap text-xl font-semibold leading-[1.467] tracking-[0.96%] text-black">
          {message}
        </span>
        <svg
          className="h-5 w-5 shrink-0"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M7.17 3.83L14.09 10L7.17 16.17"
            stroke="#C2C2C3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default OnBoardingMessage;
