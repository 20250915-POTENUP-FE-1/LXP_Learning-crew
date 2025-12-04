"use client";

type JoinType = "일반" | "강사";

interface JoinTypeSelectorProps {
  value: JoinType;
  onChange: (value: JoinType) => void;
}

export default function JoinTypeSelector({
  value,
  onChange,
}: JoinTypeSelectorProps) {
  return (
    <div className="flex w-[530px] items-center justify-between pb-12">
      <span className="text-md text-black">가입 유형</span>

      <div className="flex gap-6">
        <label
          className="flex cursor-pointer items-center space-x-2"
          onClick={() => onChange("일반")}
        >
          <span
            className={`flex h-4 w-4 items-center justify-center rounded-full border ${value === "일반" ? "border-blue-600 bg-blue-600" : "border-gray-400 bg-white"}`}
          >
            {value === "일반" && (
              <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
            )}
          </span>
          <span className="text-sm text-black">일반</span>
        </label>

        <label
          className="flex cursor-pointer items-center space-x-2"
          onClick={() => onChange("강사")}
        >
          <span
            className={`flex h-4 w-4 items-center justify-center rounded-full border ${value === "강사" ? "border-blue-600 bg-blue-600" : "border-gray-400 bg-white"}`}
          >
            {value === "강사" && (
              <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
            )}
          </span>
          <span className="text-sm text-black">강사</span>
        </label>
      </div>
    </div>
  );
}
