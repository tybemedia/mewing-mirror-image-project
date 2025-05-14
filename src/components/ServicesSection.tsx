import React from 'react';
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import { CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Strukturplanung & Gründungsservice",
      image: "./Jeld.png",
      points: [
        "Optimierte Firmensetups für Steuereffizienz und Haftungsbeschränkung",
        "Beteiligungsmanagement",
        "Strukturberatung",
        "Neu- und Ausgründungen",
      ],
    },
    {
      title: "Kapitalaufbau & Vermögensanlage",
      image: "./Macbook Mockup (1).png",
      points: [
        "Offmarket Immobilien Investments",
        "Wissenschaftliches Investieren",
        "Geldanlage in der Kapitalgesellschaft",
        "Portfolio Zusammenstellung",
        "Geschäftsführer-Versorgung",
      ],
    },
    {
      title: "Liquiditätsoptimierung & Finanzierung",
      image: "./IVST.png",
      points: [
        "Optimierte Gehaltsstrukturen",
        "Kapitalbeschaffung",
        "Effiziente Banking & Depot Setups",
        "Erhöhung der Brutto-Bezahlquote (Betriebs- statt Privatausgaben)",
      ],
    },
    {
      title: "Vermögensschutz & Riskmanagement",
      image: "./Assetprotection.png",
      points: [
        "Stiftungen",
        "Individuelle Deckungskonzepte",
        "CapBonds",
        "Notfallkonzepte",
      ],
    },
  ];

  return (
    <section className="py-24 text-[#18171a]">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#35a8a1] px-6 py-2 mb-4">
            <h2 className="text-3xl text-white">Dienstleistungsportfolio</h2>
          </div>
          
          <p className="text-xl mb-4 text-white">
            Von der Analyse, über die Strategische Planung zur Konzeption und Umsetzung.
          </p>
          
          <p className="text-xl text-white">
            Wir gehen den Weg mit dir gemeinsam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-lg overflow-hidden shadow-lg h-full border border-[#232328]/60"
              style={{ backgroundImage: 'url("./lg2x.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
                style={{ borderRadius: 0 }}
              />
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <ul className="space-y-2 flex-1">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-[#35a8a1] w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-white">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
