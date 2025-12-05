import { tv } from "tailwind-variants";

const textFieldStyle = tv({
  base: "",
  variants: {
    variant: {
      title: "text-2xl",
      heading: "text-xl",
      body: "text-base",
      caption: "text-sm",
    },
    style: {
      semibold: "font-semibold",
      regular: "font-normal",
    },
  },
  defaultVariants: {
    variant: "body",
    style: "regular",
  },
});

export { textFieldStyle };
