
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-b from-[#1a242c] to-[#2c4654] text-white flex items-center">
      <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-50" 
           style={{backgroundImage: "url('/lovable-uploads/450dff34-fd6a-4733-9d8e-1497a66c9561.png')"}}></div>
      <div className="container relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
            Du skalierst dein Business.
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-12 bg-[#35a8a1] inline-block py-2 px-4">
            Wir dein Vermögen.
          </h2>
          <div className="mt-8">
            <p className="text-xl mb-12">
              Proaktive und ganzheitliche Wirtschaftsberatung<br /> 
              für B2B-Unternehmer und Dienstleister.
            </p>
            
            <div className="mt-10">
              <Button className="bg-white hover:bg-gray-100 text-gray-800 rounded-none py-6 px-8">
                Potenzialanalyse vereinbaren
                <span className="block text-sm text-gray-600">kostenlos und unverbindlich</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
