import React from 'react';
import GradientHighlight from './ui/GradientHighlight';
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";

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
    <section className="py-24 bg-white">
      <div className="container">
        <h2 className="text-4xl mb-12">
          So profitieren Unsere Klienten von{' '}
          <GradientHighlight>
            ganzheitlicher Wirtschaftsberatung
          </GradientHighlight>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="relative rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
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
              <div className="p-8 flex flex-col flex-1 relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-gray-200">{benefit.content}</p>
              </div>
              {benefit.image && (
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full object-cover relative z-10"
                  style={{ margin: 0, padding: 0, borderRadius: 0 }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
