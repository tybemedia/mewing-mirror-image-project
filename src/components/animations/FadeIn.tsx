import { motion } from "framer-motion";
import React from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  fullWidth?: boolean;
  padding?: boolean;
}

export const FadeIn = ({ 
  children, 
  delay = 0, 
  direction = "up", 
  fullWidth = false,
  padding = false 
}: FadeInProps) => {
  let initial = { opacity: 0, y: 40 };
  let animate = { opacity: 1, y: 0 };

  if (direction === "down") {
    initial = { opacity: 0, y: -40 };
  } else if (direction === "left") {
    initial = { opacity: 0, x: 40, y: 0 };
    animate = { opacity: 1, x: 0, y: 0 };
  } else if (direction === "right") {
    initial = { opacity: 0, x: -40, y: 0 };
    animate = { opacity: 1, x: 0, y: 0 };
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1,
        delay: delay,
        ease: [0.25, 0.25, 0, 0.95]
      }}
      className={`${fullWidth ? 'w-full' : ''} ${padding ? 'py-6' : ''}`}
    >
      {children}
    </motion.div>
  );
}; 