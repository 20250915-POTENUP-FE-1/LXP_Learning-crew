"use client";

import React from "react";

type Option = { value: string; label: string };

interface ExperienceSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const EXPERIENCE_OPTIONS: Option[] = [
  { value: "", label: "경력을 선택해주세요." },
  { value: "junior", label: "주니어 (0~3년)" },
  { value: "midle", label: "미드 (4~8년)" },
  { value: "senior", label: "시니어 (9년차 이상)" },
  { value: "expert", label: "전문가" },
];

export default function ExperienceSelect({
  value,
  onChange,
}: ExperienceSelectProps) {
  return (
    <>
      <div className="flex w-[447px] justify-between pb-6">
        <span className="text-md pt-2.5 text-black">경력</span>
        <select
          name="experience"
          value={value}
          onChange={onChange}
          className="w-[180px] cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 pl-2.5 text-gray-900 transition hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          {EXPERIENCE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
