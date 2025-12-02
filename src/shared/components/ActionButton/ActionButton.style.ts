import { tv } from "tailwind-variants";

const actionButtonStyle = tv({
  base: "flex-1 cursor-pointer font-semibold text-sm px-4 py-2 rounded-lg",
  variants: {
    variant: {
      primary: "bg-[#0066FF] text-white hover:bg-blue-600 active:bg-blue-700",
      secondary:
        "border border-gray-500 text-gray-500 hover:bg-gray-50 active:bg-gray-100",
      none: "",
    },
    size: {
      medium: "px-4 py-2",
      large: "px-7 py-3",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default actionButtonStyle;
