import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import GradientHighlight from './ui/GradientHighlight';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('http://virtus-finance.de/wp-content/uploads/2025/02/J68A2677-1.jpg')"
        }}
      />
      {/* Darker gradient overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 bg-gradient-to-b from-[#1a242c]/40 to-[#2c4654]/40"
      />
      
      <div className="container relative z-10 py-32 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={0.8}>
            <h1 className="text-5xl md:text-6xl font-normal mb-4">
              Du skalierst dein Business.
            </h1>
          </FadeIn>
          
          <FadeIn delay={1.2}>
            <h2 className="text-5xl md:text-6xl font-normal mb-12">
              <GradientHighlight delay={1.2}>
                Wir dein Vermögen.
              </GradientHighlight>
            </h2>
          </FadeIn>
          
          <div className="mt-8">
            <p className="text-xl mb-12">
              Proaktive und ganzheitliche Wirtschaftsberatung<br /> 
              für B2B-Unternehmer und Dienstleister.
            </p>
            
            <button className="bg-white hover:bg-gray-50 transition-colors text-gray-900 px-8 py-4 rounded-sm">
              <span className="block font-bold">Potenzialanalyse vereinbaren</span>
              <span className="block text-sm text-gray-600">kostenlos und unverbindlich</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
