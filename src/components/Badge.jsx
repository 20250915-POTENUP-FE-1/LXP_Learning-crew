import { tv } from "tailwind-variants";

const badgeStyles = tv({
  base: "inline-block rounded-full px-2 py-1 text-xs font-medium w-fit",
  variants: {
    variant: {
      solid:
        "text-black bg-transparent font-[11px] ring-1 ring-inset ring-[#707073] rounded-sm",
      green: "text-[#009632] font-[11px] bg-[#EBF7EF] rounded-sm",
      blue: "text-[#005EEB] font-[11px] bg-[#EBF2FD] rounded-sm",
      purple: "text-[#6541F2] font-[11px] bg-[#ECE8FD] rounded-sm",
      orange: "text-[#FF5D00] font-[11px] bg-[#FFF5EE] rounded-sm",
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

const Badge = ({ text, variant }) => {
  return <div className={badgeStyles({ variant })}>{text}</div>;
};

export default Badge;
