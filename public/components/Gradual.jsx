"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

function GradualSpacing({
  text,
  duration = 2.2,
  delayMultiple = 0.06,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}) {
  return (
    <div className="flex justify-center space-x-2">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{
              duration,
              delay: i * delayMultiple,
              repeat: Infinity, // Make the animation repeat indefinitely
              repeatType: "loop", // Define how the animation should repeat
            }}
            className={cn("drop-shadow-sm", className)}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default GradualSpacing;
