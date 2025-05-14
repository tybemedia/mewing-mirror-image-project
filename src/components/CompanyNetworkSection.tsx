import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaBuilding, FaUsers } from 'react-icons/fa';

const CompanyNetworkSection = () => {
  const cards = [
    {
      icon: <FaHandshake className="w-12 h-12 text-primary" />,
      title: 'Virtus Finance',
      description: 'Ihre vertrauenswürdige Partnerin für Finanzberatung und Vermögensverwaltung.',
    },
    {
      icon: <FaBuilding className="w-12 h-12 text-primary" />,
      title: 'Virtus Immobilien',
      description: 'Spezialisiert auf Immobilieninvestments und -verwaltung für optimale Renditen.',
    },
    {
      icon: <FaUsers className="w-12 h-12 text-primary" />,
      title: 'Virtus Consulting',
      description: 'Strategische Beratung für Unternehmen und Privatpersonen.',
    },
  ];

  return (
    <div className="relative w-full">
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Unser Unternehmensnetzwerk
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Entdecken Sie die verschiedenen Bereiche unseres Unternehmensnetzwerks,
              die gemeinsam für Ihren Erfolg arbeiten.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">{card.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-300">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyNetworkSection; 