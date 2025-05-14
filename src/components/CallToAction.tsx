import React from 'react';
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";

const CallToAction = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <FadeIn>
          <motion.div 
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-light tracking-wide mb-10 text-[#1a242c]">
              Du willst wissen, welches Potenzial du in deiner individuellen Situation hast?
            </h2>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#1a242c] hover:bg-[#1a242c]/90 text-white px-8 py-4 text-lg font-normal tracking-wide transition-colors"
            >
              Jetzt Potenzialanalyse sichern
            </motion.button>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CallToAction;
