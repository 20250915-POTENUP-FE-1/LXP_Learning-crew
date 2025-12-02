const overlayAnimation = {
  style: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#333333",
  },

  initial: { opacity: 0 },
  animate: { opacity: 0.3 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

export default overlayAnimation;
