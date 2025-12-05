import {
  Animate,
  Exit,
  Initial,
  Style,
  Transition,
} from "@/shared/model/motion.type";

const modalAnimation = {
  style: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    overflow: "hidden",
    width: "800px",
    height: "95%",
    top: "50%",
    // left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    borderRadius: "24px",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.12)",
  } as Style,

  initial: { scale: 0.95, opacity: 0, x: "-50%", y: "-30%" } as Initial,
  animate: { scale: 1, opacity: 1, x: "-50%", y: "-50%" } as Animate,
  exit: {
    scale: 0.8,
    opacity: 0,
    x: "-50%",
    y: "-30%",
    transition: { duration: 0.1 },
  } as Exit,
  transition: { type: "spring", duration: 0.35 } as Transition,
};

export default modalAnimation;
