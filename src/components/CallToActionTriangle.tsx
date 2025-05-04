
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToActionTriangle = () => {
  return (
    <section className="relative bg-black py-24">
      <div className="container z-10 relative text-center text-white">
        <h2 className="text-4xl mb-4">
          Bereit für einen Partner
        </h2>
        <h3 className="text-4xl mb-12">
          der <span className="bg-[#35a8a1] px-4 py-1">ganzheitlich und proaktiv</span> agiert?
        </h3>
        
        <Button className="bg-[#35a8a1] hover:bg-[#35a8a1]/90 text-white px-8 py-6">
          Jetzt Zusammenarbeit anfragen
          <span className="block text-sm">kostenfreie Potenzialanalyse</span>
        </Button>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{
        clipPath: "polygon(0 100%, 100% 100%, 50% 0)"
      }}></div>
    </section>
  );
};

export default CallToActionTriangle;
