import React from 'react';
import GradientHighlight from './ui/GradientHighlight';
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Mehr Cash Bei gleichem Umsatz",
      content: "Dank eines intelligenten Zusammenspiels von Konzepten zur Reduzierung deiner Abgabenlast, Kostensenkung, Finanzierungslösungen und Gehaltsoptimierung, sorgen wir für mehr Kapital auf deinen Konten.",
      image: "http://virtus-finance.de/wp-content/uploads/2025/02/B_11343.jpg"
    },
    {
      title: "Steueroptimierter Kapitalaufbau",
      content: "Gemeinsam entwickeln wir eine optimale Anlagestrategie. Die sowohl neueste wissenschaftliche Erkenntnisse, als auch deine wirtschaftliche Gesamtsituation berücksichtigt.",
      image: "http://virtus-finance.de/wp-content/uploads/2025/02/B_11343.jpg"
    },
    {
      title: "Effiziente Kommunikation",
      content: "Mittelgroßer Klartext zur Darstellung eines echten Onepage-Anwendungsfalls. Etwa 100 Symbole reichen normalerweise aus, um einen Absatz zu füllen, sodass er optisch perfekt und leicht zu lesen ist",
      image: "http://virtus-finance.de/wp-content/uploads/2025/02/B_11343.jpg"
    },
    {
      title: "Klarheit und Orientierung",
      content: "Dank unseres ganzheitlich Ansatzes und der tiefgehenden Analyse, erhältst du maximale Klarheit über ungenutztes Potenzial und deine Baustellen.",
      image: "http://virtus-finance.de/wp-content/uploads/2025/02/B_11343.jpg"
    },
    {
      title: "Strategische Risikoreduktion",
      content: "Dein Vermögen, dein Business und deine Familie sind sicher und vor staatlichen Zugriffen oder Attacken der Konkurrenz sicher. Durchdachte Strukturen, wasserdichte Verträge und individuelle Versicherungsösungen.",
      image: "http://virtus-finance.de/wp-content/uploads/2025/02/B_11343.jpg"
    },
    {
      title: "Mehr Zeit für dich und dein Business",
      content: "Mittelgroßer Klartext zur Darstellung eines echten Onepage-Anwendungsfalls. Etwa 100 Symbole reichen normalerweise aus, um einen Absatz zu füllen, sodass er optisch perfekt und leicht zu lesen ist",
      image: "http://virtus-finance.de/wp-content/uploads/2025/02/B_11343.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="text-4xl mb-12">
          So profitieren Unsere Klienten von{' '}
          <GradientHighlight>
            ganzheitlicher Wirtschaftsberatung
          </GradientHighlight>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.slice(0, 3).map((benefit, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div 
                  className="text-white p-8 h-80 relative"
                  style={{
                    background: 'linear-gradient(to bottom right, rgb(26, 36, 44) 0%, rgb(53, 168, 161, 0.15) 100%)'
                  }}
                >
                  <div className="absolute inset-0 opacity-90" style={{
                    background: 'linear-gradient(to bottom right, rgb(26, 36, 44) 0%, rgb(53, 168, 161) 200%)'
                  }} />
                  <div className="relative z-10">
                    <h3 className="text-3xl font-light tracking-wide mb-6">{benefit.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{benefit.content}</p>
                  </div>
                </div>
                <div className="h-64">
                  <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {benefits.slice(3, 6).map((benefit, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div 
                  className="text-white p-8 h-80 relative"
                  style={{
                    background: 'linear-gradient(to bottom right, rgb(26, 36, 44) 0%, rgb(53, 168, 161, 0.15) 100%)'
                  }}
                >
                  <div className="absolute inset-0 opacity-90" style={{
                    background: 'linear-gradient(to bottom right, rgb(26, 36, 44) 0%, rgb(53, 168, 161) 200%)'
                  }} />
                  <div className="relative z-10">
                    <h3 className="text-3xl font-light tracking-wide mb-6">{benefit.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{benefit.content}</p>
                  </div>
                </div>
                <div className="h-64">
                  <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
