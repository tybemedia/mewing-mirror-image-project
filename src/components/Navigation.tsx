
import React from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <header className="py-4 sticky top-0 z-50 bg-white">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <img src="/lovable-uploads/34a60358-abf5-41f3-a6dd-85acee9d31a5.png" alt="VIA Group" className="h-12" />
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-sm hover:opacity-70">Startseite</a>
          <a href="#" className="text-sm hover:opacity-70">Über uns</a>
          <a href="#" className="text-sm hover:opacity-70">Leistungen</a>
          <a href="#" className="text-sm hover:opacity-70">Branchen</a>
          <a href="#" className="text-sm hover:opacity-70">Karriere</a>
        </div>
        <Button className="bg-black hover:bg-black/90 text-white text-sm rounded">
          Kostenlose Potenzialanalyse
        </Button>
      </div>
    </header>
  );
};

export default Navigation;
