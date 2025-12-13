// src/features/my/ui/Profile/Profile.tsx
"use client";

import React, { useState, useEffect } from "react";
import InputField from "@/shared/components/InputField/InputField";
import { UserProfile } from "@/features/my/model/my.types";

// 💡 1. 더미 데이터: 선택 가능한 태그 목록 (디자인 복구용)
const TAG_DATA: Record<string, string[]> = {
  AI: ["ChatGPT", "LLM", "Midjourney", "Stable Diffusion", "Prompt", "AI 윤리"],
  개발: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Frontend",
    "Backend",
    "DevOps",
  ],
  디자인: ["Figma", "UI/UX", "BX", "3D", "ProtoPie", "Design System"],
  서비스: [
    "프로덕트매니저",
    "PM",
    "PO",
    "서비스기획",
    "데이터분석",
    "GA4",
    "SQL",
  ],
};

const CATEGORIES = ["AI", "개발", "디자인", "서비스"];

interface ProfileProps {
  data: UserProfile | null; // 부모(Page)에서 받아온 Mock 데이터
}

export const Profile = ({ data }: ProfileProps) => {
  // 💡 2. 상태 관리 (UI 인터랙션용)
  // 초기값은 빈 배열이지만, useEffect에서 서버 데이터로 채워질 예정입니다.
  const [myTags, setMyTags] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("개발");

  // ✅ 데이터 동기화: 서버에서 데이터가 도착하면 내 태그 목록(myTags)에 반영
  useEffect(() => {
    if (data && data.tags) {
      // 서버의 Tag 객체({ tagId, content... })에서 이름만 뽑아서 UI 상태로 변환
      const serverTagNames = data.tags.map((t) => t.content);
      setMyTags(serverTagNames);
    }
  }, [data]);

  // ✅ 기능: 태그 삭제
  const removeTag = (tagToRemove: string) => {
    setMyTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  // ✅ 기능: 태그 추가
  const addTag = (newTag: string) => {
    if (myTags.includes(newTag)) return;
    if (myTags.length >= 5) {
      alert("최대 5개까지 선택가능합니다");
      return;
    }
    setMyTags([...myTags, newTag]);
  };

  // 로딩 중일 때
  if (!data)
    return (
      <div className="p-10 text-center text-gray-400">
        프로필 정보를 불러오는 중...
      </div>
    );

  return (
    <div className="w-full">
      <div className="mb-10">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">프로필</h1>
        <p className="text-gray-500">나의 계정 정보를 볼 수 있어요</p>
      </div>

      {/* 1. 기본 정보 카드 */}
      <section className="mb-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl text-blue-600">👤</span>
            <h2 className="text-lg font-bold text-gray-900">기본 정보</h2>
          </div>

          {/* 회원 탈퇴 버튼: 피그마 스타일 적용 (높이 28px, 붉은색 텍스트) */}
          <button className="flex h-[28px] items-center justify-center rounded-lg border border-[#B2B2B2] bg-white px-4 text-[11px] font-semibold text-[#FF0000]/75 transition-colors hover:bg-gray-50">
            회원 탈퇴
          </button>
        </div>

        {/* 입력 필드 그룹: 반응형 그리드 (모바일 1열, PC 2열) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* 이름 */}
          <InputField
            title="이름"
            type="text"
            defaultValue={data.name}
            readOnly
          />

          {/* 이메일 */}
          <InputField
            title="이메일"
            type="email"
            defaultValue={data.email}
            disabled
          />

          {/* 학습 레벨 (직업 제외됨) */}
          <InputField
            title="학습 레벨"
            type="text"
            defaultValue={data.learnerLevel || "JUNIOR"}
            readOnly
          />
        </div>
      </section>

      {/* -------------------- 2. 관심 주제 카드 (디자인 & 로직 복구) -------------------- */}
      <section className="mb-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xl text-blue-600">🏷️</span>
          <h2 className="text-lg font-bold text-gray-900">관심 주제</h2>
        </div>
        <p className="mb-6 text-gray-500">
          관심 있는 주제를 선택하면 맞춤 강좌를 추천받을 수 있습니다 *최대 5개
          설정 가능
        </p>

        {/* [A] 선택된 관심 주제 목록 (높이 고정) */}
        <div className="mb-8 flex min-h-[52px] flex-wrap items-center gap-2 rounded-lg border border-dashed border-gray-100 bg-gray-50/50 p-2">
          {myTags.length === 0 && (
            <span className="px-2 text-sm text-gray-400">
              아래에서 관심 주제를 선택해주세요.
            </span>
          )}

          {myTags.map((tag) => (
            <button
              key={tag}
              onClick={() => removeTag(tag)}
              className="group inline-flex items-center gap-1 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            >
              {tag}
              <span className="text-gray-400 group-hover:text-red-500">✕</span>
            </button>
          ))}
        </div>

        {/* [B] 카테고리 탭 */}
        <div className="mb-6 flex border-b border-gray-200">
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "font-bold text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 h-0.5 w-full translate-y-[1px] bg-blue-600"></div>
              )}
            </button>
          ))}
        </div>

        {/* [C] 선택 가능한 태그 목록 */}
        <div className="flex flex-wrap gap-2">
          {TAG_DATA[activeTab]?.map((topic, index) => {
            const isSelected = myTags.includes(topic);
            return (
              <button
                key={index}
                onClick={() => (isSelected ? removeTag(topic) : addTag(topic))}
                className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm transition ${
                  isSelected
                    ? "border-blue-500 bg-blue-50 font-medium text-blue-600"
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {topic}
                {isSelected ? (
                  <span className="text-blue-500">✕</span>
                ) : (
                  <span className="rotate-45 transform text-gray-300">+</span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* -------------------- 3. 강사 활동 카드 (디자인 복구) -------------------- */}
      <section className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <span className="text-2xl">📖</span>
          <div>
            <h2 className="text-lg font-bold text-gray-900">강사 활동 하기</h2>
            <p className="mt-1 text-sm text-gray-500">
              지금 강사로 등록하고 당신의 지식을 공유하세요!
            </p>
          </div>
        </div>
        <button className="flex h-[28px] items-center justify-center rounded-lg border border-[#B2B2B2] bg-white px-4 text-[11px] font-semibold text-[#000000]/75 transition-colors hover:bg-gray-50">
          강사 등록 하러 가기{" "}
        </button>
      </section>
    </div>
  );
};
