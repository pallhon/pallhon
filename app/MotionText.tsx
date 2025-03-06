"use client";

import { motion } from "motion/react";

const MotionText = ({ text = "Pallhon" }: { text: String }) => {
  return (
    <motion.h1
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
      className="cursor-pointer text-5xl md:text-7xl xl:text-9xl font-bold bg-blend-darken"
    >
      {text}
    </motion.h1>
  );
};

export default MotionText;
