"use client";

import { motion } from "framer-motion";

const MotionText = ({ text = "Pallhon" }: { text: String }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.8 }}
      // transition={{ duration: 0.5, ease: "easeInOut" }}
      drag
      dragConstraints={{
        top: -15,
        left: -30,
        right: 30,
        bottom: 15,
      }}
      className=" text-5xl md:text-7xl xl:text-9xl font-bold bg-blend-darken"
    >
      {text}
    </motion.div>
  );
};

export default MotionText;
