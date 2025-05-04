
import React from 'react';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-white border-t border-gray-100">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="font-serif text-xl font-medium mb-4">Maximilian Mewing</div>
            <p className="text-gray-500 max-w-sm text-sm">
              Dedicated to helping people achieve better facial aesthetics and breathing through proper oral posture.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-6">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Maximilian Mewing. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
