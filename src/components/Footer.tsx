
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-black text-white">
      <div className="container">
        <div className="text-center">
          <p className="text-sm">© {new Date().getFullYear()} VIA Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
