// src/components/Input/Input.tsx (적절한 구문 예시)

import React from "react";

// 1. TypeScript Props 정의: 어떤 속성을 받는지 명확히 합니다.
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string; // Storybook에서 사용하신 'Input Title'
  variant?: "primary" | "secondary"; // Storybook에서 사용하신 'primary'
  errorMessage?: string; // 추가적으로 에러 처리도 고려
}

// 2. 컴포넌트 정의 (export 키워드가 있어야 다른 파일에서 가져갈 수 있습니다)
export const InputField = ({
  title,
  errorMessage,
  variant = "primary", // 기본값 설정
  ...props
}: InputFieldProps) => {
  // Tailwind CSS를 사용하여 디자인 정의 (간결화)
  const inputStyle = `
    w-full p-3 border rounded-lg shadow-sm 
    ${variant === "primary" ? "border-blue-300" : "border-gray-300"}
    ${props.disabled || props.readOnly ? "bg-gray-50 text-gray-500" : "bg-white"}
  `;

  return (
    <div className="mb-4">
      {/* 🟢 title을 사용하여 label을 출력 */}
      {title && (
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {title}
        </label>
      )}

      {/* 🟢 HTML input 요소 정의 */}
      <input {...props} className={inputStyle} />

      {/* 에러 메시지 */}
      {errorMessage && (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  );
};
