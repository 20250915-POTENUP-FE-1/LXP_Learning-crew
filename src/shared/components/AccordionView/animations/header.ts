import { Animate, Initial, Transition } from "@/shared/types/motion.type";

const headerAnimation = {
  initial: { backgroundColor: "#ffffff" } as Initial,
  whileHover: { backgroundColor: "#f5f5f5" } as Animate,
  transition: {
    duration: 0.1,
  } as Transition,
};

export default headerAnimation;
