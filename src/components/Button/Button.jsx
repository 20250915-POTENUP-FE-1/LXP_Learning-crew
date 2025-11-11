import clsx from "clsx";
import { tv } from "tailwind-variants";

const buttonStyle = tv({
  base: "transition-all cursor-pointer",
  variants: {
    variant: {
      primary:
        "h-12 w-[520px] rounded-lg border py-3 font-semibold border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500",
      default:
        "h-12 w-[520px] rounded-lg border py-3 font-semibold text-gray-600 hover:bg-gray-100",
      closer:
        "absolute top-4 right-7 h-10 w-10 rounded-4xl bg-gray-100 text-xl font-semibold hover:bg-gray-200",
      edit: "w-[140px] h-12 rounded-lg border font-semibold border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500",
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
