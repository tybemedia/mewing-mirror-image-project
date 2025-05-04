import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import GradientHighlight from './ui/GradientHighlight';

const ProcessSection = () => {
  return (
    <section className="py-24 relative">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('http://virtus-finance.de/wp-content/uploads/2025/02/B_11343.jpg')"
        }}
      />
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.9 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-gradient-to-b from-[#1a242c] to-[#2c4654]"
      />
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white p-12 max-w-[800px] rounded-sm"
        >
          <FadeIn>
            <h2 className="text-3xl md:text-4xl mb-8">
              Was passiert in der{' '}
              <GradientHighlight delay={0.5}>
                Potenzialanalyse
              </GradientHighlight>
              ?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="mb-8 text-lg">
              In einem ersten Telefongespräch analysieren wir, ob und wie du durch ein virtuelles 
              Family Office profitieren kannst.
            </p>
          </FadeIn>
          
          <p className="mb-6 text-lg">
            Gemeinsam erarbeiten wir bereits ein erstes Konzept, mit konkreten Ansätzen, mit 
            denen du:
          </p>
          
          <ul className="space-y-6 mb-8">
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <svg className="w-5 h-5 text-[#35a8a1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17L4 12" />
                </svg>
              </div>
              <span className="text-lg">Deine Steuerlast um bis zu 50% reduzierst</span>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <svg className="w-5 h-5 text-[#35a8a1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17L4 12" />
                </svg>
              </div>
              <span className="text-lg">Mehr Liquidität zur Verfügung hast</span>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <svg className="w-5 h-5 text-[#35a8a1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17L4 12" />
                </svg>
              </div>
              <span className="text-lg">Deinen Kapitalaufbau effizienter gestaltest</span>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <svg className="w-5 h-5 text-[#35a8a1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17L4 12" />
                </svg>
              </div>
              <span className="text-lg">Dich und dein Unternehmen stabiler aufstellst und Vermögen schützt</span>
            </li>
          </ul>
          
          <p className="mb-8 text-lg">
            Erfüllst du die Kriterien für eine Zusammenarbeit, besprechen wir im Anschluss konkrete 
            Optionen für den weiteren Ablauf.
          </p>
          
          <button className="bg-[#35a8a1] hover:bg-[#35a8a1]/90 text-white px-8 py-4 text-lg rounded-sm">
            Potenzialanalyse buchen
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
