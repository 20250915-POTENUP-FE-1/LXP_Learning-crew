import React from "react";

const Button = ({ children, type, className, onClick }) => {
  return (
    <button
      type={type}
      className={`group box-border flex items-center justify-center rounded-xl border border-blue-700 p-3 px-7 transition duration-200 hover:bg-blue-700 ${className} `}
      onClick={onClick}
    >
      <span className="text-base font-semibold text-blue-700 transition duration-200 group-hover:text-white">
        {children}
      </span>
    </button>
  );
};

export default Button;
