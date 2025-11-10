import React, { useRef } from "react";
import Icon from "../Icon/Icon";

const SearchField = ({ placeholder = "검색", value, onChange }) => {
  const inputRef = useRef(null);

  return (
    <div
      className="flex h-full cursor-text items-center gap-1 rounded-xl bg-[#F4F4F5] p-3 font-normal"
      onClick={() => inputRef.current.focus()}
    >
      <Icon name="SEARCH" size={24} />
      <input
        ref={inputRef}
        className="h-full w-full bg-transparent outline-none"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default SearchField;
