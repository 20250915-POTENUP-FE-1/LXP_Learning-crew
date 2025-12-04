import { tv } from "tailwind-variants";

const thumbnailStyle = tv({
  base: "justify rounded-2xl object-cover",
  variants: {
    variant: {
      image: "",
      placeholder:
        "flex flex-col items-center justify-center bg-gray-300 text-gray-500",
      loading: "animate-pulse bg-gray-300 duration-75",
    },
    size: {
      large: "h-[275px] w-[430px]",
      medium: "h-40 w-[250px]",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export { thumbnailStyle };
