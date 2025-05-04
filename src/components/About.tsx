
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-gray-50 border-t border-gray-100">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
              alt="Maximilian" 
              className="rounded-lg w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">About Maximilian</h2>
            <p className="text-gray-600 mb-4">
              As a dedicated orthotropist, I've spent years studying the science of facial development and the impact of proper oral posture on overall health and aesthetics.
            </p>
            <p className="text-gray-600 mb-4">
              My approach combines traditional orthotropic techniques with modern research to provide practical guidance for people of all ages.
            </p>
            <p className="text-gray-600 mb-6">
              Through my work, I've helped thousands improve their breathing, reduce sleep apnea symptoms, enhance their facial structure, and boost their confidence.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <div className="text-3xl font-serif font-medium">10+</div>
                <div className="text-gray-500 text-sm mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-medium">5K+</div>
                <div className="text-gray-500 text-sm mt-1">Success Stories</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-medium">100+</div>
                <div className="text-gray-500 text-sm mt-1">Videos Created</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-medium">20+</div>
                <div className="text-gray-500 text-sm mt-1">Countries Reached</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
