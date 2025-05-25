import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaBuilding, FaUsers } from 'react-icons/fa';

const CompanyNetworkSection = () => {
  const cards = [
    {
      icon: <FaHandshake className="w-12 h-12 text-primary" />,
      title: 'Financial Services',
      description: 'Private & betriebliche Deckungskonzepte',
    },
    {
      icon: <FaBuilding className="w-12 h-12 text-primary" />,
      title: 'Capital Solutions',
      description: 'Strategieberatung & Family Office DIenstleistungen',
    },
    {
      icon: <FaUsers className="w-12 h-12 text-primary" />,
      title: 'Virtus Wealth Management',
      description: 'Kapitalanlage-, Verwaltung und Immobilieninvestments',
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
            3 Firmen, ein Ziel. Exzellenter Service für unsere Klienten.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
             
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
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 flex flex-col items-center justify-center min-h-[300px]"
              >
                <div className="flex flex-col items-center w-full">
                  <div className="mb-4 flex justify-center">
                    <img 
                      src={index === 0 ? "/5.png" : index === 1 ? "/2.png" : "/9.png"}
                      alt="Logo"
                      className="w-full h-auto object-contain" 
                    />
                  </div>
                  <div className="w-8 h-px bg-white/40 mb-4" />
                  <p className="text-gray-300 text-center w-full">
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