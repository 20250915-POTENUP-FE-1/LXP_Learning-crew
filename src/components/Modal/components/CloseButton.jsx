import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import Icon from "../../Icon/Icon";

const CloseButton = ({ onClick }) => {
  return (
    <motion.button
      className="absolute top-4 right-4 flex size-14 cursor-pointer items-center justify-center rounded-full bg-[#f0f0f0] transition-colors"
      onClick={onClick}
    >
      <Icon name="EXIT" />
    </motion.button>
  );
};

export default CloseButton;
