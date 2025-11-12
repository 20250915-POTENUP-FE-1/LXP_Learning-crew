import clsx from "clsx";
import { tv } from "tailwind-variants";

const buttonStyle = tv({
  base: "px-4 py-1.5 text-sm rounded-lg border transition-all font-semibold cursor-pointer",
  variants: {
    variant: {
      primary:
        "border-blue-500 bg-white hover:bg-blue-500 hover:text-white text-blue-500",
      default: "text-gray-600 bg-white hover:bg-gray-100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Button = ({ className, variant, children, onClick, ...props }) => {
  return (
    <button
      className={clsx(buttonStyle({ variant }), className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
