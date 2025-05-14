import React from 'react';
import { Button } from '@/components/ui/button';
import GradientHighlight from './ui/GradientHighlight';

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
        
        <div className="flex justify-center w-full mt-8">
          <Button className="bg-[#35a8a1] hover:bg-[#35a8a1]/90 text-white px-6 sm:px-8 py-8 max-w-xs sm:max-w-md md:max-w-lg break-words whitespace-normal text-base sm:text-lg flex flex-col items-center">
            <span className="block w-full text-center">Jetzt Zusammenarbeit anfragen</span>
            <span className="block w-full text-center text-sm">kostenfreie Potenzialanalyse</span>
          </Button>
        </div>
      </div>
      
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: "80px",
          background: "black",
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          zIndex: 20,
        }}
      ></div>
    </section>
  );
};

export default CallToActionTriangle;
