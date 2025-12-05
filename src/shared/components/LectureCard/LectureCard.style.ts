import clsx from "clsx";
import { tv } from "tailwind-variants";

const lectureCardStyle = tv({
  base: clsx(
    "flex shrink-0 cursor-pointer flex-col gap-2.5 overflow-hidden rounded-2xl border border-[#EDEDED] shadow-sm",
  ),
  variants: {
    size: {
      // small: "w-[150px]",
      large: "w-[250px]",
    },
  },
  defaultVariants: {
    size: "large",
  },
});

const titleStyle = tv({
  base: "line-clamp-1 overflow-hidden text-ellipsis font-semibold text-black",
  variants: {
    size: {
      small: "text-md",
      large: "text-xl",
    },
  },
  defaultVariants: {
    size: "large",
  },
});

const subtitleStyle = tv({
  base: "line-clamp-2 h-10 overflow-hidden text-ellipsis",
  variants: {
    size: {
      // small: "text-xs",
      large: "text-sm",
    },
  },
  defaultVariants: {
    size: "large",
  },
});

export { lectureCardStyle, titleStyle, subtitleStyle };
