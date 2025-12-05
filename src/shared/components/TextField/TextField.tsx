import { TextFieldProps } from "./TextField.type";
import { textFieldStyle } from "./TextField.style";

const TextField = ({
  children,
  variant = "body",
  style = "regular",
}: TextFieldProps) => {
  switch (variant) {
    case "title":
      return (
        <h1 className={textFieldStyle({ variant: "title", style })}>
          {children}
        </h1>
      );

    case "heading":
      return (
        <h2 className={textFieldStyle({ variant: "heading", style })}>
          {children}
        </h2>
      );

    case "body":
      return (
        <p className={textFieldStyle({ variant: "body", style })}>{children}</p>
      );

    case "caption":
      return (
        <span className={textFieldStyle({ variant: "caption", style })}>
          {children}
        </span>
      );

    default:
      return (
        <p className={textFieldStyle({ variant: "body", style })}>{children}</p>
      );
  }
};

export default TextField;
