"use client";

import { motion } from "motion/react";

const MotionText = ({ text = "Pallhon" }: { text: String }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.1,
        rotate: [0, -5, 5, -5, 0],
        transition: {
          duration: 0.5,
          rotate: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.5
          }
        }
      }}
      whileTap={{ scale: 0.9 }}
      drag
      dragConstraints={{
        top: -50,
        left: -100,
        right: 100,
        bottom: 50,
      }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="cursor-pointer text-5xl md:text-7xl xl:text-9xl font-bold bg-blend-darken select-none"
    >
      {text}
    </motion.h1>
  );
};

export default MotionText;
