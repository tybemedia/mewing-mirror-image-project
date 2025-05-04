import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";

const TestimonialSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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

  // Split testimonials into pairs
  const testimonialPairs = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    testimonialPairs.push(testimonials.slice(i, i + 2));
  }

  return (
    <section className="py-24 relative bg-gradient-to-b from-[#1a242c] to-[#2c4654] text-white">
      <div className="container">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl mb-16 text-center max-w-4xl mx-auto">
            Diese Klienten nutzen bereits das<br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              virtuelle Family Office für sich
            </motion.span>
          </h2>
        </FadeIn>

        <Carousel 
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonialPairs.map((pair, pairIndex) => (
              <CarouselItem key={pairIndex}>
                <div className="grid grid-cols-2 gap-6">
                  {pair.map((testimonial, index) => (
                    <FadeIn key={index} delay={index * 0.2}>
                      <motion.div 
                        whileHover={{ scale: 1.02, translateY: -5 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-sm p-8"
                        style={{
                          background: 'linear-gradient(135deg, rgba(53,168,161,0.2) 0%, rgba(26,36,44,0.9) 100%)'
                        }}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="bg-black/80 inline-block px-3 py-1 text-sm mb-6"
                        >
                          {testimonial.category}
                        </motion.div>
                        
                        <FadeIn delay={0.4}>
                          <h3 className="text-3xl mb-6">{testimonial.title}</h3>
                        </FadeIn>
                        
                        <FadeIn delay={0.6}>
                          <p className="mb-8 text-gray-300">{testimonial.content}</p>
                        </FadeIn>
                        
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                          viewport={{ once: true }}
                          className="flex items-center"
                        >
                          <motion.img 
                            whileHover={{ scale: 1.1 }}
                            src={testimonial.person.image} 
                            alt={testimonial.person.name} 
                            className="w-12 h-12 rounded-full mr-4"
                          />
                          <div>
                            <div className="font-medium">{testimonial.person.name}</div>
                            <div className="text-sm text-gray-400">{testimonial.person.position}</div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </FadeIn>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-2 mt-8"
          >
            {testimonialPairs.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </motion.div>

          <div className="flex justify-end gap-2 mt-8">
            <CarouselPrevious className="relative static bg-white/10 hover:bg-white/20 text-white" />
            <CarouselNext className="relative static bg-white/10 hover:bg-white/20 text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
