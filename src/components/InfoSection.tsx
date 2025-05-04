
import React from 'react';
import { CheckCircle } from 'lucide-react';

const InfoSection = () => {
  const benefits = [
    "Improved facial structure and jawline definition",
    "Enhanced breathing and reduced mouth breathing",
    "Better oral posture and natural dental alignment",
    "Reduced sleep apnea and airway issues",
    "Prevention of orthodontic problems in children",
    "Improved overall facial aesthetics and symmetry"
  ];

  return (
    <section id="info" className="section py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">What is Mewing?</h2>
          <p className="text-xl text-gray-600">
            Mewing is the practice of proper tongue posture, where the entire tongue rests against the roof of the mouth, transforming facial structure naturally.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-serif font-medium mb-6">The Technique</h3>
            <p className="text-gray-600 mb-4">
              Mewing involves positioning your entire tongue against the roof of your mouth, keeping your lips closed and teeth gently together.
            </p>
            <p className="text-gray-600 mb-4">
              When maintained as your resting oral posture, this technique can guide facial development and even create positive changes in adults.
            </p>
            <p className="text-gray-600">
              This natural approach focuses on correct function to achieve correct form, addressing the root causes of many modern orthodontic issues.
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
