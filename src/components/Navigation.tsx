import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white py-6 fixed w-full z-50 top-0"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-32"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="../11.png" 
              alt="VIA Group" 
              className="w-full h-auto"
            />
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-sm hover:opacity-70">Startseite</a>
            <a href="#" className="text-sm hover:opacity-70">Über uns</a>
            <a href="#" className="text-sm hover:opacity-70">Leistungen</a>
            <a href="#" className="text-sm hover:opacity-70">Branchen</a>
            <a href="#" className="text-sm hover:opacity-70">Karriere</a>
          </div>
          <button className="bg-black hover:bg-black/90 text-white text-sm px-6 py-3 rounded-sm">
            Kostenlose Potenzialanalyse
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
