import React from "react";

const InputField = ({ title, type, name, placeholder, value, onChange }) => {
  return (
    <div className="mx-auto w-full max-w-[520px]">
      {title && (
        <label
          htmlFor={name}
          className="mb-2 block text-base font-semibold text-gray-600"
        >
          {title}
        </label>
      )}

      <input
        type={type}
        id={name}
        className="w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-300 duration-150 ease-in-out focus:border-indigo-500 focus:outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        // required
      />
    </div>
  );
};

export default InputField;
