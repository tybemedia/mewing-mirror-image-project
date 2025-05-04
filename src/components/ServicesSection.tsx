import React from 'react';
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";

const ServicesSection = () => {
  const services = [
    {
      title: "Strukturplanung & Gründungsservice",
      items: [
        "Steueroptimierte Strukturen",
        "Gesellschaftsgründungen",
        "Vertragsgestaltung"
      ],
      image: "http://virtus-finance.de/wp-content/uploads/2025/02/B_11343.jpg"
    },
    {
      title: "Kapitalaufbau & Vermögensanlage",
      items: [
        "Investmentstrategie",
        "Portfoliomanagement",
        "Renditeoptimierung"
      ],
      image: "http://virtus-finance.de/wp-content/uploads/2025/02/B_11343.jpg"
    },
    {
      title: "Liquiditätsoptimierung & Finanzierung",
      items: [
        "Cashflow Management",
        "Finanzierungskonzepte",
        "Working Capital Optimierung"
      ],
      image: "http://virtus-finance.de/wp-content/uploads/2025/02/B_11343.jpg"
    },
    {
      title: "Vermögensschutz & Risikomanagement",
      items: [
        "Asset Protection",
        "Risikominimierung",
        "Absicherungsstrategien"
      ],
      image: "http://virtus-finance.de/wp-content/uploads/2025/02/B_11343.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#35a8a1] px-6 py-2 mb-4">
            <h2 className="text-3xl text-white">Dienstleistungsportfolio</h2>
          </div>
          
          <p className="text-xl mb-4">
            Von der Analyse, über die Strategische Planung zur Konzeption und Umsetzung.
          </p>
          
          <p className="text-xl">
            Wir gehen den Weg mit dir gemeinsam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div 
                  className="text-white p-8 relative"
                  style={{
                    background: 'linear-gradient(to bottom right, rgb(26, 36, 44) 0%, rgb(53, 168, 161, 0.15) 100%)'
                  }}
                >
                  <div className="absolute inset-0 opacity-90" style={{
                    background: 'linear-gradient(to bottom right, rgb(26, 36, 44) 0%, rgb(53, 168, 161) 200%)'
                  }} />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-light tracking-wide mb-6">{service.title}</h3>
                    <ul className="space-y-4">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <svg className="w-5 h-5 text-[#35a8a1] mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 6L9 17L4 12" />
                          </svg>
                          <span className="text-gray-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
