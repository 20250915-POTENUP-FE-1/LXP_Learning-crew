import { tv } from "tailwind-variants";

const actionButtonStyle = tv({
  base: "cursor-pointer select-none rounded-lg text-sm font-semibold",
  variants: {
    variant: {
      primary: "bg-[#0066FF] text-white hover:bg-blue-600 active:bg-blue-700",
      primaryBorder:
        "border border-[#0066FF] bg-transparent text-blue-600 hover:bg-blue-50 active:bg-blue-100",

      secondary:
        "border bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700",
      secondaryBorder:
        "border border-gray-500 bg-transparent text-gray-500 hover:bg-gray-50 active:bg-gray-100",

      none: "",
    },
    size: {
      medium: "px-4 py-2",
      large: "px-7 py-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export default actionButtonStyle;
