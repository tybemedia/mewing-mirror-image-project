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
import JourneyTimeline from '@/components/JourneyTimeline';
import Footer from '@/components/Footer';
import ManagingPartner from '@/components/ManagingPartner';
import FAQSection from '@/components/FAQSection';
import ComparisonSection from '@/components/ComparisonSection';
import CompanyNetworkSection from '@/components/CompanyNetworkSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      <ChallengesSection />
      <ProcessSection />
      <BenefitsSection />
      <CallToAction />
      <div
        style={{
          backgroundImage: "url('/lg2x.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <TestimonialSection />
        <ComparisonSection />
        <CallToActionTriangle />
        <ServicesSection />
        <JourneyTimeline />
      </div>
      <div
        style={{
          backgroundImage: "url('/lg2x.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
              <CallToAction />
        <AboutSection />
        <ManagingPartner />
      </div>
      <CompanyNetworkSection />
      <FAQSection/>
      <Footer />
    </div>
  );
};

export default Index;
