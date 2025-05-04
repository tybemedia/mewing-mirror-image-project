
import React from 'react';
import { CheckCircle } from 'lucide-react';

const InfoSection = () => {
  const benefits = [
    "Improved facial aesthetics and jawline definition",
    "Enhanced breathing and reduced sleep apnea symptoms",
    "Better oral posture and dental alignment",
    "Reduced mouth breathing and associated health issues",
    "Potential prevention of orthodontic problems in children",
    "Improved overall facial symmetry"
  ];

  return (
    <section id="info" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">What is Mewing?</h2>
          <p className="text-xl text-gray-600">
            Mewing is a technique that focuses on proper tongue posture to reshape your face naturally and improve breathing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-serif font-medium mb-6">The Technique</h3>
            <p className="text-gray-600 mb-4">
              Mewing involves placing the entire tongue against the roof of the mouth while keeping the lips closed and teeth gently touching.
            </p>
            <p className="text-gray-600 mb-4">
              This proper oral posture, when maintained consistently, can gradually influence facial structure, especially during development years.
            </p>
            <p className="text-gray-600">
              The technique is named after Dr. John Mew, who pioneered the field of orthotropics, focusing on facial growth guidance rather than just treating symptoms.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-medium mb-6">Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={20} className="mr-3 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
