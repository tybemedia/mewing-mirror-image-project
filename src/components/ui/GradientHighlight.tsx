import { motion } from "framer-motion";
import React from "react";

interface GradientHighlightProps {
  children: React.ReactNode;
  delay?: number;
}

const GradientHighlight = ({ children, delay = 0 }: GradientHighlightProps) => {
  return (
    <span className="relative break-words">
      <span className="relative z-10 px-[0.25em]">{children}</span>
      <motion.span 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay }}
        className="absolute left-[-0.25em] right-[-0.25em] top-[-0.25em] bottom-[-0.25em] origin-left"
        style={{
          background: 'linear-gradient(90deg, #35a8a1 0%, rgba(53, 168, 161, 0.2) 100%)',
          opacity: 0.95
        }}
      />
    </span>
  );
};

export default GradientHighlight; 