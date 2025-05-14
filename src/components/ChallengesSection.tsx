import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import GradientHighlight from './ui/GradientHighlight';
import CardSection from './ui/card-section';

const ChallengesSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(2);
  const [itemsPerPage, setItemsPerPage] = React.useState(3);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Update itemsPerPage and totalPages based on viewport width
    const updatePagination = () => {
      const width = window.innerWidth;
      let perPage = 3;
      if (width >= 1024) {
        perPage = 3; // Desktop: 3 items per page
      } else if (width >= 768) {
        perPage = 2; // Tablet: 2 items per page
      } else {
        perPage = 1; // Mobile: 1 item per page
      }
      setItemsPerPage(perPage);
      setTotalPages(Math.ceil(challenges.length / perPage));
    };

    // Initial calculation
    updatePagination();

    // Update on resize
    window.addEventListener('resize', updatePagination);
    return () => window.removeEventListener('resize', updatePagination);
  }, [api]);

  const challenges = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Hohe Steuer- und Abgabelast",
      description: [
        "Steuern stellen für die meisten Unternehmer einen enormen Kostenfaktor dar und skalieren mit steigenden Umsätzen mit.",
        "Gerade Dienstleister mit hohen Margen sind betroffen."
      ]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
          <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
      ),
      title: "Fehlendes Kompetenzteam",
      description: [
        "Gerade bei Foundern erster Generation fehlt meist ein Beraterstab der fachübergreifend beraten kann und darf.",
        "High End Beratung bleibt dabei häufig Hochvermögenden vorenthalten."
      ]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
      ),
      title: "Unbekannte Haftungsrisiken",
      description: [
        "Die meisten Unternehmer unterschätzen welchen Haftungsrisiken sie und ihr Vermögen aufgrund suboptimaler Strukturen oder fehlerhafter Verträge ausgesetzt sind."
      ]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Fehlende zeitliche Ressourcen",
      description: [
        "Da der Fokus des Geschäftsführers für die Skalierung und den Aufbau des Unternehmens benötigt wird, fehlen die Kapazitäten, um sich parallel noch tiefgreifend mit weiteren Themen zu beschäftigen."
      ]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      title: "Überangebot an Möglichkeiten",
      description: [
        "Von Holdings über Immobilieninvestments zu Dubai LLC, Meme Coins und privater Krankenversicherung. Das Internet ist voll von Angeboten und Meinungen. Was fehlt ist eine differenzierte Einordnung der relevanten Themen."
      ]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      title: "Viele Vermittler wenige Spezialisten",
      description: [
        "Die meisten Berater agieren nach dem Prinzip Bauchladen und bieten Standardlösungen von der Stange an.",
        "Dabei braucht es individuelle Konzepte, die exakt auf die Situation des Mandanten zugeschnitten sind."
      ]
    }
  ];

  return (
    <>
      {/* 6 Unternehmerische Herausforderungen */}
      <section className="py-24 text-white relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/lg2x.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="container relative z-10">
          <FadeIn>
            <div className="mb-12">
              <h2
                className="challenges-heading text-4xl md:text-5xl mb-8 flex items-center flex-wrap"
                style={{ height: '96px' }}
              >
                <span className="mr-4">6 unternehmerische</span>
                <GradientHighlight delay={0.3}>
                  Herausforderungen
                </GradientHighlight>
              </h2>
            </div>
          </FadeIn>

          <Carousel 
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: false,
              slidesToScroll: itemsPerPage,
              containScroll: "keepSnaps",
            }}
          >
            <CarouselContent className="-ml-4">
              {challenges.map((challenge, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 flex-shrink-0">
                  <FadeIn delay={index * 0.2}>
                    <CardSection
                      as={motion.div}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="h-[400px]"
                    >
                      <div className="mb-4 flex justify-start">
                        {challenge.icon}
                      </div>
                      <h3 className="text-xl font-medium mb-4 text-white">
                        <span className="text-white mr-2">{index + 1}.</span>
                        {challenge.title}
                      </h3>
                      <div className="flex-grow">
                        {challenge.description.map((paragraph, pIndex) => (
                          <p key={pIndex} className="mb-3 text-white/90 leading-relaxed text-sm">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </CardSection>
                  </FadeIn>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Updated pagination without numbers */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-8">
              <CarouselPrevious className="relative static bg-white/10 hover:bg-white/20 text-white" />
              <CarouselNext className="relative static bg-white/10 hover:bg-white/20 text-white" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Kommt dir bekannt vor? section */}
      <section className="py-24 bg-white">
        <div className="container max-w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-6 break-words">
            Kommt dir bekannt vor?
          </h2>
          
          <p className="text-2xl text-gray-500 text-center mb-12 break-words">
            Der nächste Schritt: Deine persönliche Potenzialanalyse:
          </p>
          
          <div className="flex justify-center w-full">
            <button className="bg-[#35a8a1] hover:bg-[#35a8a1]/90 text-white text-lg px-8 sm:px-12 py-4 rounded-sm transition-colors w-full max-w-xs sm:max-w-md md:max-w-lg">
              Zur Potenzialanalyse
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChallengesSection;
