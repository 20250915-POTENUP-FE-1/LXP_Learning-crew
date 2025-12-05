import { tv } from "tailwind-variants";

const informationCardStyle = tv({
  base: "flex h-fit flex-col gap-1 rounded-2xl bg-[#f1f1f1] p-4",
  variants: {
    style: {
      fit: "w-fit",
      fill: "",
    },
  },
  defaultVariants: {
    style: "fit",
  },
});

export { informationCardStyle };
