
import React from 'react';
import { CheckCircle } from 'lucide-react';

const InfoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl mb-12 text-center">Kommt dir bekannt vor?</h2>
        <p className="text-2xl text-gray-500 text-center mb-12">Der nächste Schritt: Deine persönliche Potenzialanalyse:</p>
        
        <div className="flex justify-center">
          <button className="bg-black hover:bg-black/90 text-white text-lg px-12 py-4 rounded">
            Jetzt Potenzialanalyse sichern
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
