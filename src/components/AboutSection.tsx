
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-4xl mb-6">Was uns von klassischer Beratung unterscheidet</h2>
        <p className="text-xl mb-6">Lösungen so individuell wie du und dein Business Case.</p>
        <p className="mb-12 text-lg">
          Unsere Beratung verbindet Praxiserfahrung mit dem spezialisierten Know-how unserer Partnerkanzleien – für messbare Ergebnisse. 
          Unsere Klienten profitieren nicht nur von exzellenten Investmentlösungen, sondern auch von starker steuerlicher und rechtlicher Expertise.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-400 p-10">
            <h3 className="text-3xl mb-8">Klassische Beratung</h3>
            <hr className="border-t-2 border-white w-full mb-8" />
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="rounded-full bg-white p-1 mr-4">
                  <CheckCircle size={24} />
                </div>
                <span>Keine Kreditkarte benötigt</span>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-white p-1 mr-4">
                  <CheckCircle size={24} />
                </div>
                <span>1,450+ Bewerden</span>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-white p-1 mr-4">
                  <CheckCircle size={24} />
                </div>
                <span>Grundlegende Features</span>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-white p-1 mr-4">
                  <CheckCircle size={24} />
                </div>
                <span>Neues Item</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-b from-[#1a242c] to-[#2c4654] text-white p-10">
            <h3 className="text-3xl mb-8">Value in Action Group</h3>
            <hr className="border-t-2 border-white w-full mb-8" />
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="rounded-full bg-[#35a8a1] p-1 mr-4">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <span>Keine Kreditkarte benötigt</span>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-[#35a8a1] p-1 mr-4">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <span>1,450+ Bewertungen</span>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-[#35a8a1] p-1 mr-4">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <span>PRO-features</span>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-[#35a8a1] p-1 mr-4">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <span>Zuständiger Manager</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
