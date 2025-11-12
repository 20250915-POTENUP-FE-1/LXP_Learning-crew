import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

const CurriculumListItem = ({ detail }) => {
  return (
    <motion.div
      className="m-2 flex cursor-pointer place-items-center justify-between rounded-xl p-3 text-[#333333]"
      initial={{ backgroundColor: "#FFFFFF" }}
      whileHover={{ backgroundColor: "#f1f1f1" }}
      transition={{ type: "spring", duration: 0.2 }}
    >
      {detail.title}
      <div className="text-xs">{detail.duration}</div>
    </motion.div>
  );
};

export default CurriculumListItem;
