import { tv } from "tailwind-variants";

const comboBoxStyle = tv({
  slots: {
    root: "relative select-none",
    trigger:
      "flex h-12 w-full items-center justify-between gap-2 rounded-xl border border-[#D9D9D9] bg-white px-3 py-3 text-[15px] leading-[22px] tracking-[0.01em] text-[#171719] shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors",
    label:
      "truncate text-[15px] leading-[22px] tracking-[0.01em] text-[#171719]",
    icon: "ml-1 h-4 w-4 text-[#37383C] transition-transform",
    list: "absolute left-0 right-0 z-10 mt-2 overflow-hidden rounded-xl border border-[#D9D9D9] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]",
    option:
      "flex w-full items-center justify-between px-4 py-3 text-left text-[15px] leading-[22px] tracking-[0.01em] text-[#171719] transition-colors hover:bg-gray-100",
    check: "h-4 w-4 text-[#171719]",
  },
  variants: {
    isOpen: {
      true: {
        trigger: "border-[#171719]",
        icon: "rotate-180",
      },
    },
    disabled: {
      true: {
        trigger:
          "cursor-not-allowed border-gray-200 bg-gray-50 text-gray-400 shadow-none",
        label: "text-gray-400",
        icon: "text-gray-400",
        option: "pointer-events-none text-gray-400",
      },
    },
    hasValue: {
      false: {
        label: "text-[#37383C]/60",
      },
    },
  },
  defaultVariants: {
    isOpen: false,
    disabled: false,
    hasValue: true,
  },
});

export default comboBoxStyle;
