
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="bg-black text-white py-20 relative">
      <div className="container z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl mb-6">
            Du willst wissen, welches Potenzial du in deiner individuellen Situation hast?
          </h2>
          
          <div className="mt-10">
            <Button className="bg-black border-2 border-white hover:bg-white hover:text-black text-white text-xl px-8 py-6 rounded">
              Jetzt Potenzialanalyse sichern
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)"
      }}></div>
    </section>
  );
};

export default CallToAction;
