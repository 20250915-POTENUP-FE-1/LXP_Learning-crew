import {
  Animate,
  Exit,
  Initial,
  Style,
  Transition,
} from "@/shared/model/motion.type";

const overlayAnimation = {
  style: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "-50%",
    backgroundColor: "#333333",
  } as Style,

  initial: { opacity: 0 } as Initial,
  animate: { opacity: 0.3 } as Animate,
  exit: { opacity: 0 } as Exit,
  transition: { duration: 0.2 } as Transition,
};

export default overlayAnimation;
