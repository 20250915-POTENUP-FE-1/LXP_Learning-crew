import React from "react";
import { tv } from "tailwind-variants";

const modalButtonStyle = tv({
  base: " transition-all cursor-pointer",
  variants: {
    variant: {
      modal:
        "absolute top-4 right-7 h-10 w-10 rounded-4xl bg-gray-100 text-xl font-semibold hover:bg-gray-200 ",
      modalEdit:
        " right-10 bottom-[38px] h-[46px] w-[140px] rounded-xl border-2 border-blue-500 font-medium text-blue-600 hover:bg-blue-600 hover:text-white z-40",
    },
  },
  defaultVariants: {
    variant: "modal",
  },
});

const ModalButton = ({ variant, children, ...props }) => {
  return (
    <button className={modalButtonStyle({ variant })} {...props}>
      {children}
    </button>
  );
};
export default ModalButton;
