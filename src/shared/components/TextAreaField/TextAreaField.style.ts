import { tv } from "tailwind-variants";

const textareaStyle = tv({
  base: "resize-none rounded-xl px-4 py-2 outline-none",
  variants: {
    variant: {
      disabled: "cursor-not-allowed border-2 border-gray-200 bg-gray-100",
      primary: "border-2 border-gray-300 focus:border-blue-500",
      edit: "bg-neutral-100",
      black: "border-2 border-gray-600",
    },
  },
  defaultVariants: {
    variant: "black",
  },
});

export { textareaStyle };
