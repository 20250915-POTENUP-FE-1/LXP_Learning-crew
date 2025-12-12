import { forwardRef } from "react";
import { TextAreaFieldProps } from "./TextAreaField.type";
import { textareaStyle } from "./TextAreaField.style";

const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ variant, ...rest }, ref) => {
    return (
      <textarea ref={ref} className={textareaStyle({ variant })} {...rest} />
    );
  },
);

export default TextAreaField;
