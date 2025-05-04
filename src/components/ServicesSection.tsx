
import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img src="/lovable-uploads/561293b8-f0ad-4446-b29e-99725c965e67.png" alt="Strukturplanung" className="w-full h-full object-cover" />
            </div>
            <div className="bg-gradient-to-b from-[#1a242c] to-[#2c4654] text-white p-8">
              <h3 className="text-2xl font-semibold mb-4">Strukturplanung & Gründungsservice</h3>
              <ul className="space-y-4">
                <li>Erstes Element</li>
                <li>Zweites Element</li>
                <li>Drittes Element</li>
              </ul>
            </div>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img src="/lovable-uploads/f0771d5f-7a22-4741-ad6c-14cc35bb8370.png" alt="Kapitalaufbau" className="w-full h-full object-cover" />
            </div>
            <div className="bg-gradient-to-b from-[#1a242c] to-[#2c4654] text-white p-8">
              <h3 className="text-2xl font-semibold mb-4">Kapitalaufbau & Vermögensanlage</h3>
              <ul className="space-y-4">
                <li>Erstes Element</li>
                <li>Zweites Element</li>
                <li>Drittes Element</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
