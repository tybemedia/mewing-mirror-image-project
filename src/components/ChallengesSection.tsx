
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { CheckCircle } from 'lucide-react';

const ChallengesSection = () => {
  const challenges = [
    {
      icon: "chart-pie",
      title: "Hohe Steuer- und Abgabelast",
      description: [
        "Steuern stellen für die meisten Unternehmer einen enormen Kostenfaktor dar und skalieren mit steigenden Umsätzen mit.",
        "Gerade Dienstleister mit hohen Margen sind betroffen."
      ]
    },
    {
      icon: "users",
      title: "Fehlendes Kompetenzteam",
      description: [
        "Gerade bei Foundern erster Generation fehlt meist ein Beraterstab der fachübergreifend beraten kann und darf.",
        "High End Beratung bleibt dabei häufig Hochvermögenden vorenthalten."
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#1a242c] to-[#2c4654] text-white">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl mb-8 flex items-center">
            <span className="mr-4">6 unternehmerische</span> 
            <span className="bg-[#35a8a1] px-4 py-1">Herausforderungen</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-[#35a8a1] p-10 rounded-sm">
              <div className="mb-6">
                {challenge.icon === "chart-pie" ? (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a10 10 0 0 1 10 10" />
                  </svg>
                ) : (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )}
              </div>
              <h3 className="text-2xl font-medium mb-4">{challenge.title}</h3>
              {challenge.description.map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4">{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="h-2 w-2 rounded-full bg-white/50"></span>
            <span className="h-2 w-2 rounded-full bg-white/50"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
