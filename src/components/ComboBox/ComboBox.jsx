import React, { useEffect, useRef, useState } from "react";
import ComboBoxItem from "./ComboBoxItem";
import Icon from "../Icon/Icon";

/**
 * @typedef {Object} ComboBoxProps
 * @property {string[]} items - ComboBox에 표시할 항목 목록
 * @property {("input" | "select")} [type] - ComboBox의 유형
 */

/**
 * @param {ComboBoxProps} props
 */
const ComboBox = ({ items, placeholder = items[0] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const comboBoxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (comboBoxRef.current && !comboBoxRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative min-w-32 font-normal" ref={comboBoxRef}>
      <div
        className={
          "flex h-full cursor-default items-center justify-between rounded-xl p-3 ring-1 ring-[#D9D9D9] ring-inset"
        }
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div>{placeholder}</div>
        <Icon name="BOTTOM_ARROW" size={24} />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 inline-block rounded-xl bg-white p-2 ring-1 ring-[#D9D9D9] ring-inset">
          <div className="flex w-max min-w-32 flex-col gap-1">
            {items.map((item) => (
              <ComboBoxItem key={item} text={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComboBox;
