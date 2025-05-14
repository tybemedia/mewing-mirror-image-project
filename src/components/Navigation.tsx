import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";

const Navigation = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white py-[1em] fixed w-full z-50 top-0 shadow"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="w-32 md:w-40">
            <img src="./md2x.svg" alt="VIA Group" className="w-full h-auto"/>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-lg font-medium hover:opacity-70">Startseite</a>
            <a href="#" className="text-lg font-medium hover:opacity-70">Über uns</a>
            <a href="#" className="text-lg font-medium hover:opacity-70">Leistungen</a>
            <a href="#" className="text-lg font-medium hover:opacity-70">Branchen</a>
            <a href="#" className="text-lg font-medium hover:opacity-70">Karriere</a>
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <span className="block w-8 h-1 bg-black mb-1"></span>
            <span className="block w-8 h-1 bg-black mb-1"></span>
            <span className="block w-8 h-1 bg-black"></span>
          </button>
          <button className="hidden md:block bg-black hover:bg-black/90 text-white text-lg font-medium px-6 py-3 rounded-sm">
            Kostenlose Potenzialanalyse
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#" className="text-lg font-medium hover:opacity-70">Startseite</a>
            <a href="#" className="text-lg font-medium hover:opacity-70">Über uns</a>
            <a href="#" className="text-lg font-medium hover:opacity-70">Leistungen</a>
            <a href="#" className="text-lg font-medium hover:opacity-70">Branchen</a>
            <a href="#" className="text-lg font-medium hover:opacity-70">Karriere</a>
            <button className="w-full bg-black hover:bg-black/90 text-white text-lg font-medium px-6 py-3 rounded-sm">
              Kostenlose Potenzialanalyse
            </button>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
