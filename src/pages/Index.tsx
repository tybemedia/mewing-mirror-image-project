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
      <div className="relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/lg2x.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(135deg, rgba(26,36,44,0.95) 0%, rgba(26,36,44,0.4) 100%)'
          }}
        />
        <div className="relative z-10">
          <TestimonialSection />
          <ComparisonSection />
          <CallToActionTriangle />
          <ServicesSection />
          <JourneyTimeline />
        </div>
      </div>
      <div className="relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/lg2x.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(135deg, rgba(26,36,44,0.95) 0%, rgba(26,36,44,0.4) 100%)'
          }}
        />
        <div className="relative z-10">
          <CallToAction />
          <AboutSection />
          <ManagingPartner />
          <CompanyNetworkSection />
        </div>
      </div>
      <FAQSection/>
      <Footer />
    </div>
  );
};

export default Index;
