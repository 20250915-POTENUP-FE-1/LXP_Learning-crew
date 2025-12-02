import clsx from "clsx";
import { tv } from "tailwind-variants";

const lectureCardStyle = tv({
  base: clsx(
    "flex flex-col gap-2.5 border rounded-2xl overflow-hidden border-[#EDEDED] cursor-pointer shadow-sm",
  ),
  variants: {
    size: {
      small: "h-[180px] w-[150px]",
      medium: "h-[220px] w-[200px]",
      large: "h-[280px] w-[250px]",
    },
  },
  defaultVariants: {
    size: "large",
  },
});

const titleStyle = tv({
  base: "text-black font-semibold overflow-hidden text-ellipsis line-clamp-1",
  variants: {
    size: {
      small: "text-md",
      medium: "text-lg",
      large: "text-2xl",
    },
  },
  defaultVariants: {
    size: "large",
  },
});

const subtitleStyle = tv({
  base: "line-clamp-2 overflow-hidden text-ellipsis",
  variants: {
    size: {
      small: "text-xs",
      medium: "text-xs",
      large: "text-sm",
    },
  },
  defaultVariants: {
    size: "large",
  },
});

export { lectureCardStyle, titleStyle, subtitleStyle };
