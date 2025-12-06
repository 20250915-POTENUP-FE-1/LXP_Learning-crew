import {
  Animate,
  Initial,
  Style,
  Transition,
} from "@/shared/model/motion.type";

const contentAnimation = {
  style: {} as Style,
  initial: {} as Initial,
  open: { opacity: 1 } as Animate,
  close: { height: 0, opacity: 0 } as Animate,
  transition: {
    type: "spring",
    duration: 0.2,
    bounce: 0,
  } as Transition,
};

export default contentAnimation;
