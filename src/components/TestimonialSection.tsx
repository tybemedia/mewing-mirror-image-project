
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      category: "MARKETING AGENTUR",
      title: "Die große Überschrift",
      content: "Mittelgroßer Klartext zur Darstellung eines echten Onepage-Anwendungsfalls. Etwa 100 Symbole reichen normalerweise aus, um einen Absatz zu füllen, sodass er optisch perfekt und leicht zu lesen ist",
      person: {
        name: "Matthias Richter",
        position: "Unternehmer",
        image: "/lovable-uploads/3425f2fd-f586-4ec8-a3a2-e20be39adb1c.png"
      }
    },
    {
      category: "DIGITALE LÖSUNG",
      title: "Die große Überschrift",
      content: "Mittelgroßer Klartext zur Darstellung eines echten Onepage-Anwendungsfalls. Etwa 100 Symbole reichen normalerweise aus, um einen Absatz zu füllen, sodass er optisch perfekt und leicht zu lesen ist",
      person: {
        name: "Matthias Richter",
        position: "Unternehmer",
        image: "/lovable-uploads/3425f2fd-f586-4ec8-a3a2-e20be39adb1c.png"
      }
    },
    {
      category: "DIGITALE LÖSUNG",
      title: "Die große Überschrift",
      content: "Mittelgroßer Klartext zur Darstellung eines echten Onepage-Anwendungsfalls. Etwa 100 Symbole reichen normalerweise aus, um einen Absatz zu füllen, sodass er optisch perfekt und leicht zu lesen ist",
      person: {
        name: "Matthias Richter",
        position: "Unternehmer",
        image: "/lovable-uploads/3425f2fd-f586-4ec8-a3a2-e20be39adb1c.png"
      }
    }
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container">
        <h2 className="text-4xl md:text-5xl mb-12 text-center">
          Diese Klienten nutzen bereits das<br /> virtuelle Family Office für sich
        </h2>
        
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-b from-[#1a242c] to-[#2c4654] p-8">
                <div className="bg-black inline-block px-3 py-1 text-sm mb-4">{testimonial.category}</div>
                <h3 className="text-3xl mb-4">{testimonial.title}</h3>
                <p className="mb-8 text-gray-300">{testimonial.content}</p>
                <div className="flex items-center">
                  <img src={testimonial.person.image} alt={testimonial.person.name} className="rounded-full w-12 h-12 mr-4" />
                  <div>
                    <div className="font-medium">{testimonial.person.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.person.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2">
            <ArrowLeft size={24} />
          </button>
          <button className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
