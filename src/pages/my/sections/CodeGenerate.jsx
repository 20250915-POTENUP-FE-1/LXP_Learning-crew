import React, { useState } from "react";

const CodeGenerate = () => {
  // 1. 코드 상태 및 로딩 상태 관리
  const [issuedCode, setIssuedCode] = useState("000000"); // 초기 표시 값
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태

  // 2. 코드 발급 핸들러 함수
  const handleCodeIssuance = async () => {
    // 로딩 시작 및 피드백 메시지 설정
    setIsLoading(true);
    setIssuedCode("...생성 중...");

    try {
      // 💥 함수명 수정 반영: runCodeGenerator (임포트 시 이름 변경) 호출
      const newCode = await runCodeGenerator();

      if (newCode) {
        setIssuedCode(newCode); // 6자리 난수 노출

        // 클립보드에 복사
        await navigator.clipboard.writeText(newCode);

        // 알림창 표시
        alert(`6자리 코드 [${newCode}]가 클립보드에 복사되었습니다.`);
      } else {
        setIssuedCode("발급 실패");
        alert("코드 발급에 실패했습니다. (DB 중복 또는 서버 오류)");
      }
    } catch (error) {
      console.error("코드 발급 중 오류 발생:", error);
      setIssuedCode("오류 발생");
      alert("오류가 발생하여 코드를 발급할 수 없습니다.");
    }

    setIsLoading(false);
  };

  return (
    <div>
      {/* 타이틀 및 설명 영역 */}
      <div>
        <h1 className="mb-2 text-xl font-semibold text-gray-900">
          강사 코드 발급
        </h1>
        <p className="mb-8 text-gray-500">
          가입에 필요한 코드를 발급 가능해요.
        </p>
      </div>

      {/* 코드 표시 및 버튼 영역 */}
      <div className="flex items-center space-x-4">
        {/* 코드 표시 영역 */}
        <div className="font-mono text-4xl font-bold text-[#005EEB]">
          {issuedCode}
        </div>

        {/* 버튼 */}
        <button
          onClick={handleCodeIssuance}
          disabled={isLoading} // 로딩 중 버튼 비활성화
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
            isLoading
              ? "cursor-not-allowed bg-gray-400 text-white"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          {isLoading ? "발급 중..." : "코드 발급하기"}
        </button>
      </div>
    </div>
  );
};

export default CodeGenerate;
