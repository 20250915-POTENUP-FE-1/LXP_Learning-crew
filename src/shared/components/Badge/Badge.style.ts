import { tv } from "tailwind-variants";

const badgeStyle = tv({
  base: "h-fit w-fit rounded-sm px-2 py-1 text-xs",
  variants: {
    variant: {
      solid: "bg-gray-200 text-gray-800",
      border: "text-gray-800 ring ring-gray-400",
    },
    color: {
      green: "",
      blue: "",
      purple: "",
      orange: "",
    },
  },
  compoundVariants: [
    // solid variants
    { variant: "solid", color: "green", class: "bg-green-100 text-green-600" },
    { variant: "solid", color: "blue", class: "bg-blue-100 text-blue-600" },
    {
      variant: "solid",
      color: "purple",
      class: "bg-purple-100 text-purple-600",
    },
    {
      variant: "solid",
      color: "orange",
      class: "bg-orange-100 text-orange-600",
    },

    // border variants
    {
      variant: "border",
      color: "green",
      class: "text-green-500 ring-1 ring-inset ring-green-500",
    },
    {
      variant: "border",
      color: "blue",
      class: "text-blue-500 ring-1 ring-inset ring-blue-500",
    },
    {
      variant: "border",
      color: "purple",
      class: "text-purple-500 ring-1 ring-inset ring-purple-500",
    },
    {
      variant: "border",
      color: "orange",
      class: "text-orange-500 ring-1 ring-inset ring-orange-500",
    },
  ],
  defaultVariants: {
    variant: "solid",
  },
});

export { badgeStyle };
