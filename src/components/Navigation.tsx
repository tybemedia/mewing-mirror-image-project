
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navigation = () => {
  return (
    <header className="py-6 sticky top-0 z-50 bg-white">
      <div className="container flex justify-between items-center">
        <div className="font-serif text-xl font-medium">Dr. Mike Mew</div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="text-sm hover:underline">About</a>
          <a href="#info" className="text-sm hover:underline">Mewing</a>
          <a href="#videos" className="text-sm hover:underline">Videos</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
          <Button variant="outline" className="text-sm rounded-full px-6">
            Book a Consultation
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu size={20} />
        </Button>
      </div>
    </header>
  );
};

export default Navigation;
