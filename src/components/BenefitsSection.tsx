
import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Mehr Cash Bei gleichem Umsatz",
      content: "Dank eines intelligenten Zusammenspiels von Konzepten zur Reduzierung deiner Abgabenlast, Kostensenkung, Finanzierungslösungen und Gehaltsoptimierung, sorgen wir für mehr Kapital auf deinen Konten.",
      image: "/lovable-uploads/f5e0edfd-dd63-4471-9cfa-f3e8467b9ffe.png"
    },
    {
      title: "Steueroptimierter Kapitalaufbau",
      content: "Gemeinsam entwickeln wir eine optimale Anlagestrategie. Die sowohl neueste wissenschaftliche Erkenntnisse, als auch deine wirtschaftliche Gesamtsituation berücksichtigt.",
      image: "/lovable-uploads/ffe904d9-ff68-453b-9484-d0be29e73e10.png"
    },
    {
      title: "Effiziente Kommunikation",
      content: "Mittelgroßer Klartext zur Darstellung eines echten Onepage-Anwendungsfalls. Etwa 100 Symbole reichen normalerweise aus, um einen Absatz zu füllen, sodass er optisch perfekt und leicht zu lesen ist",
      image: "/lovable-uploads/98d39661-06de-456c-a242-d23ccd1f3fc6.png"
    },
    {
      title: "Klarheit und Orientierung",
      content: "Dank unseres ganzheitlich Ansatzes und der tiefgehenden Analyse, erhältst du maximale Klarheit über ungenutztes Potenzial und deine Baustellen.",
      image: "/lovable-uploads/0f7b6dfa-a427-4b34-93bb-82cc50f6c9a6.png"
    },
    {
      title: "Strategische Risikoreduktion",
      content: "Dein Vermögen, dein Business und deine Familie sind sicher und vor staatlichen Zugriffen oder Attacken der Konkurrenz sicher. Durchdachte Strukturen, wasserdichte Verträge und individuelle Versicherungsösungen.",
      image: "/lovable-uploads/f0771d5f-7a22-4741-ad6c-14cc35bb8370.png"
    },
    {
      title: "Mehr Zeit für dich und dein Business",
      content: "Mittelgroßer Klartext zur Darstellung eines echten Onepage-Anwendungsfalls. Etwa 100 Symbole reichen normalerweise aus, um einen Absatz zu füllen, sodass er optisch perfekt und leicht zu lesen ist",
      image: "/lovable-uploads/351e729a-56dc-4d56-a759-336432721bb7.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="text-4xl mb-12">
          So profitieren Unsere Klienten von 
          <span className="bg-[#35a8a1] px-4 py-1 ml-2">ganzheitlicher Wirtschaftsberatung</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div key={index} className="overflow-hidden">
              <div className="bg-gradient-to-b from-[#1a242c] to-[#2c4654] text-white p-8 h-80">
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p>{benefit.content}</p>
              </div>
              <div className="h-64">
                <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {benefits.slice(3, 6).map((benefit, index) => (
            <div key={index} className="overflow-hidden">
              <div className="bg-gradient-to-b from-[#1a242c] to-[#2c4654] text-white p-8 h-80">
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p>{benefit.content}</p>
              </div>
              <div className="h-64">
                <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
