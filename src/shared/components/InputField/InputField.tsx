import React, { forwardRef, useRef } from "react";
import type { InputFieldProps } from "./InputField.type";
import { inputStyle } from "./InputField.style";

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ title, defaultValue, placeholder, variant, ...rest }, ref) => {
    return (
      <div className="">
        {title && <p className="">{title}</p>}
        <input
          ref={ref}
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={variant === "disabled"}
          className={inputStyle({ variant })}
          {...rest}
        />
      </div>
    );
  },
);

export default InputField;
