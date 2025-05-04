
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import InfoSection from '@/components/InfoSection';
import VideoSection from '@/components/VideoSection';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      <About />
      <InfoSection />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Index;
