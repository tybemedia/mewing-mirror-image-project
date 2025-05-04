
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
      <div className="container max-w-5xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight animate-fade-in">
          Discover how proper jaw posture can transform your face and breathing
        </h1>
        <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl animate-fade-in" style={{animationDelay: '0.2s'}}>
          I'm Maximilian, a specialist in orthotropics and facial development. Learn the mewing technique to improve your jawline, breathing, and overall facial aesthetics.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Button className="rounded-full px-8 py-6 text-base bg-black hover:bg-gray-800 text-white">
            Learn More <ArrowRight size={16} className="ml-2" />
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-6 text-base">
            Watch Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
