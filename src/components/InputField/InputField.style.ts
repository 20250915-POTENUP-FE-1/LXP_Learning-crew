import { tv } from "tailwind-variants";

const inputStyle = tv({
  base: "rounded-xl w-max-[460px] h-max-12 outline-none border-2 px-4 py-2",
  variants: {
    variant: {
      disabled: "border-gray-200 bg-gray-100 cursor-not-allowed",
      primary: "border-gray-300 focus:border-blue-500",
      black: "border-gray-600",
    },
  },
  defaultVariants: {
    variant: "black",
  },
});

export { inputStyle };
