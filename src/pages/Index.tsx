
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ChallengesSection from '@/components/ChallengesSection';
import ProcessSection from '@/components/ProcessSection';
import InfoSection from '@/components/InfoSection';
import TestimonialSection from '@/components/TestimonialSection';
import BenefitsSection from '@/components/BenefitsSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CallToAction from '@/components/CallToAction';
import CallToActionTriangle from '@/components/CallToActionTriangle';
import ServicePortfolio from '@/components/ServicePortfolio';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      <ChallengesSection />
      <BenefitsSection />
      <ProcessSection />
      <InfoSection />
      <TestimonialSection />
      <CallToAction />
      <ServicePortfolio />
      <ServicesSection />
      <AboutSection />
      <CallToActionTriangle />
      <Footer />
    </div>
  );
};

export default Index;
