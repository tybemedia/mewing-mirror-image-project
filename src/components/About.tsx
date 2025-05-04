
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-gray-50 py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d" 
              alt="Dr. Mike Mew" 
              className="rounded-lg w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">About Dr. Mike Mew</h2>
            <p className="text-gray-600 mb-4">
              As a third-generation orthodontist, I've spent my career researching and practicing orthotropics, focusing on natural facial development and proper oral posture.
            </p>
            <p className="text-gray-600 mb-4">
              My technique, known as "mewing," has helped thousands of people improve their facial aesthetics, breathing efficiency, and overall health by correcting tongue posture.
            </p>
            <p className="text-gray-600 mb-6">
              I believe in addressing the root causes of facial development issues rather than just treating the symptoms, and I've dedicated my life to spreading this knowledge.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <div className="text-3xl font-serif font-medium">30+</div>
                <div className="text-gray-500 text-sm mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-medium">10k+</div>
                <div className="text-gray-500 text-sm mt-1">Patients Helped</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-medium">200+</div>
                <div className="text-gray-500 text-sm mt-1">Educational Videos</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-medium">50+</div>
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
