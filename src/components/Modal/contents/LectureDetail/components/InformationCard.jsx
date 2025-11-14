import { hover, motion } from "framer-motion"; // eslint-disable-line no-unused-vars

const InformationCard = ({ value = "2457", description = "수강중인 인원" }) => {
  return (
    <motion.div
      className="flex h-16 w-44 cursor-default flex-col gap-1 rounded-2xl px-4 py-2"
      style={{
        backgroundColor: "#F5F5F5",
      }}
    >
      <motion.div
        className="font-semibold"
        style={{
          fontSize: "18px",
        }}
      >
        {value}
      </motion.div>
      <motion.div
        className="text-[#757575]"
        style={{
          fontSize: "11px",
        }}
      >
        {description}
      </motion.div>
    </motion.div>
  );
};

export default InformationCard;
