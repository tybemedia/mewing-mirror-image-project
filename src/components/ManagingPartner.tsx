import React from 'react';
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import CardSection from './ui/card-section';
import GradientHighlight from './ui/GradientHighlight';

const ManagingPartner = () => {
  const partners = [
    {
      name: "Maximilian Mewing",
      position: "Geschäftsführer",
      image: "/Max.png",
      description: `Nach einem Studium des Management & Rechts und Stationen in der Unternehmensberatung sowie Finanzdienstleistung betreute Maximilian Mewing über 500 Mandanten in Steuer- und Vermögensstrategien. 2024 gründete er die Valorem Capital Solutions GmbH, gefolgt von der Virtus Financial Services & Virtus Wealth Management (2025) – mit dem klaren Ziel Family Office Dienstleistungen auch für junge Founder und KMU nutzbar zu machen.`,
    },
    {
      name: "Til Reinecke",
      position: "Geschäftsführer",
      image: "/Til.png",
      description: `Als studierter Betriebswirt, geprüfter Versicherungsmakler, Finanzanlagenfachmann, Berater für Generationsberatung und Immobilienmakler vereint Til Reinecke tiefgehende Finanz- und Investmentexpertise. Mit zusätzlicher Erfahrung als Geschäftsführer mehrerer Unternehmen und seinen analytischen Fähigkeiten, liegt Tils Fokus auf den Themen Investment und strategische Absicherung unser Klienten.`,
    }
  ];

  const PartnerSection = ({ partner, imageLeft = false }) => {
    const ContentSection = () => (
      <CardSection className="h-[600px] flex flex-col justify-center">
        <span className="uppercase tracking-[0.2em] text-[#35a8a1] text-sm font-medium mb-6">
          {partner.position}
        </span>
        <h2 className="text-4xl text-white font-light tracking-wide mb-8 leading-tight">
          {partner.name}
        </h2>
        <p className="text-gray-200 text-lg leading-relaxed font-light tracking-wide">
          {partner.description}
        </p>
      </CardSection>
    );

    const ImageSection = () => (
      <div className="h-[600px] relative rounded-sm overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          src={partner.image}
          alt={partner.name}
          className="w-full h-full object-cover"
        />
      </div>
    );

    return (
      <>
        {imageLeft ? (
          <>
            <FadeIn direction="left">
              <ImageSection />
            </FadeIn>
            <FadeIn direction="right" delay={0.3}>
              <ContentSection />
            </FadeIn>
          </>
        ) : (
          <>
            <FadeIn direction="left" delay={0.3}>
              <ContentSection />
            </FadeIn>
            <FadeIn direction="right">
              <ImageSection />
            </FadeIn>
          </>
        )}
      </>
    );
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 md:mb-20 text-center">
          <div className="inline-block bg-[#35a8a1] px-6 py-2 mb-4">
            <h2 className="text-3xl md:text-4xl text-white">
              Unsere Geschäftsführung
            </h2>
          </div>
          <p className="text-base md:text-lg text-white max-w-2xl mx-auto leading-relaxed">
            Erfahrene Berater mit einem ganzheitlichen Ansatz für Ihren nachhaltigen Erfolg.
          </p>
        </div>
        <div className="space-y-8">
          {partners.map((partner, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <PartnerSection partner={partner} imageLeft={i === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagingPartner; 