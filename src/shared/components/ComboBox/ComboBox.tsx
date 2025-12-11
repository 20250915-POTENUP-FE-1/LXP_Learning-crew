"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import comboBoxStyle from "./ComboBox.style";
import type { ComboBoxOption, ComboBoxProps } from "./ComboBox.type";

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M12.0003 5.99935L8.00033 9.99935L4.00033 5.99935"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M3.66699 8.66651L6.33366 11.3332L12.3337 5.33317"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ComboBox = ({
  options,
  value,
  defaultValue,
  placeholder = "선택하세요",
  disabled = false,
  width = 128,
  onChange,
  className,
  listClassName,
  optionClassName,
}: ComboBoxProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string | undefined>(
    value ?? defaultValue,
  );

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // 다른 곳을 클릭하면 닫히도록 설정
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = useMemo(
    () => options.find((option) => option.value === internalValue),
    [internalValue, options],
  );

  const { root, trigger, label, icon, list, option, check } = comboBoxStyle({
    isOpen,
    disabled,
    hasValue: Boolean(selectedOption),
  });

  const handleSelect = (option: ComboBoxOption) => {
    if (disabled) return;

    if (value === undefined) {
      setInternalValue(option.value);
    }

    onChange?.(option);
    setIsOpen(false);
  };

  const widthStyle = useMemo(() => {
    if (width === undefined) return undefined;
    if (typeof width === "number") return { width: `${width}px` } as const;
    return { width } as const;
  }, [width]);

  return (
    <div ref={wrapperRef} className={root({ className })} style={widthStyle}>
      <button
        type="button"
        className={trigger()}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={label()}>{selectedOption?.label ?? placeholder}</span>
        <ChevronIcon className={icon()} />
      </button>

      {isOpen && (
        <div className={list({ className: listClassName })} role="listbox">
          {options.map((optionItem) => {
            const isSelected = optionItem.value === selectedOption?.value;

            return (
              <button
                key={optionItem.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                className={option({
                  className: clsx(optionClassName, {
                    "bg-gray-100 font-semibold": isSelected,
                  }),
                })}
                onClick={() => handleSelect(optionItem)}
              >
                <span className="truncate">{optionItem.label}</span>
                {isSelected && <CheckIcon className={check()} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ComboBox;
