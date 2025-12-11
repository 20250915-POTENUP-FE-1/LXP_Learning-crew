"use client";

type role = "일반" | "강사";
interface Props {
  value: role;
  onChange: (value: role) => void;
}

const options: role[] = ["일반", "강사"];

function JoinTypeSelector({ value, onChange }: Props) {
  return (
    <div
      className="flex w-[530px] items-center justify-between pb-8"
      role="radiogroup"
      aria-label="가입 유형"
    >
      <span className="text-md text-black">가입 유형</span>

      <div className="flex gap-6">
        {options.map((opt) => {
          const selected = opt === value;
          const outerClasses = `flex h-4 w-4 items-center justify-center rounded-full border ${selected ? "border-blue-600 bg-blue-600" : "border-gray-400 bg-white"}`;
          return (
            <div
              key={opt}
              role="radio"
              aria-checked={selected}
              tabIndex={0}
              onClick={() => onChange(opt)}
              className="flex cursor-pointer items-center space-x-2"
            >
              <span className={outerClasses}>
                {selected && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                )}
              </span>
              <span className="text-sm text-black">{opt}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default JoinTypeSelector;
