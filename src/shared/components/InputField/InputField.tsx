import React, { forwardRef, useRef } from "react";
import type { InputFieldProps } from "./InputField.type";
import { inputStyle } from "./InputField.style";
import clsx from "clsx";

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ title, variant, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {title && <p className="">{title}</p>}
        <input
          ref={ref}
          disabled={variant === "disabled"}
          className={inputStyle({ variant })}
          {...rest}
        />
      </div>
    );
  },
);

export default InputField;
