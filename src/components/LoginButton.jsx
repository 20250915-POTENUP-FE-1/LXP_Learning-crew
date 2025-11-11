import { tv } from "tailwind-variants";

const buttonStyle = tv({
  base: "h-12 w-[520px] rounded-lg border py-3 font-semibold  transition-all",
  variants: {
    variant: {
      primary:
        "border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500",
      default: "text-gray-600 hover:bg-gray-100",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

// variant props에 primary를 입력하면 위 buttonStyle의 primary의 디자인이 나옴.
const LoginButton = ({ variant, children, ...props }) => {
  return (
    <button className={buttonStyle({ variant })} {...props}>
      {children}
    </button>
  );
};

export default LoginButton;
