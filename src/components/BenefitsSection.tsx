import React from 'react';
import GradientHighlight from './ui/GradientHighlight';
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import Masonry from 'react-masonry-css';

const benefits = [
  {
    title: "Mehr Cash Bei gleichem Umsatz",
    content: `Dank eines intelligenten Zusammenspiels von Konzepten zur Reduzierung deiner Abgabenlast, Kostensenkung, Finanzierungslösungen und Gehaltsoptimierung, sorgen wir für mehr Kapital auf deinen Konten.`,
    image: "/Max-Card.png",
  },
  {
    title: "Steueroptimierter Kapitalaufbau",
    content: `Gemeinsam entwickeln wir eine optimale Anlagestrategie. Die sowohl neueste wissenschaftliche Erkenntnisse, als auch deine wirtschaftliche Gesamtsituation berücksichtigt.`,
    image: "/Laptop.png",
  },
  {
    title: "Effiziente Kommunikation",
    content: `Mittelgroßer Klartext zur Darstellung eines echten Onepage-Anwendungsfalls. Etwa 100 Symbole reichen normalerweise aus, um einen Absatz zu füllen, sodass er optisch perfekt und leicht zu lesen ist`,
    image: "/whatsapp-message.png",
  },
  {
    title: "Klarheit und Orientierung",
    content: `Dank unseres ganzheitlichen Ansatzes und der tiefgehenden Analyse, erhältst du maximale Klarheit über ungenutztes Potenzial und deine Baustellen.`,
    image: null,
  },
  {
    title: "Strategische Risikoreduktion",
    content: `Dein Vermögen, dein Business und deine Familie sind sicher und vor staatlichen Zugriffen oder Attacken der Konkurrenz sicher. Durchdachte Strukturen, wasserdichte Verträge und individuelle Versicherungslösungen.`,
    image: null,
  },
  {
    title: "Mehr Zeit für dich und dein Business",
    content: `Mittelgroßer Klartext zur Darstellung eines echten Onepage-Anwendungsfalls. Etwa 100 Symbole reichen normalerweise aus, um einen Absatz zu füllen, sodass er optisch perfekt und leicht zu lesen ist`,
    image: "/phone-car.png",
  },
];

const BenefitsSection = () => {
  return (
    <section
      className="py-24 relative"
      style={{
        backgroundImage: "url('/lg2x.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container max-w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-12 text-white break-words w-full max-w-full">
          <span className="block">
            So profitieren Unsere Klienten von{' '}
            <span className="ml-2 break-words break-all">
              <GradientHighlight>
                ganzheitlicher Wirtschaftsberatung
              </GradientHighlight>
            </span>
          </span>
        </h2>
        
        {/* Masonry layout for benefits */}
        <div className="overflow-x-hidden w-full">
          <Masonry
            breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
            className="flex w-full -ml-4"
            columnClassName="pl-4 min-w-0"
          >
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="relative rounded-lg shadow-lg overflow-hidden flex flex-col mb-4 border border-[#232328]/60 min-w-0"
                style={{
                  background: "linear-gradient(135deg, rgba(53,168,161,0.2) 0%, rgba(26,36,44,0.9) 100%)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-90 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom right, rgb(26, 36, 44) 0%, rgb(53, 168, 161) 200%)",
                  }}
                />
                <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-white break-words">{benefit.title}</h3>
                  <p className="text-gray-200 break-words">{benefit.content}</p>
                </div>
                {benefit.image && (
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full object-cover relative z-10 rounded-b-lg"
                    style={{
                      margin: 0,
                      padding: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                      display: 'block',
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                )}
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
