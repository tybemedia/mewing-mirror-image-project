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
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256&facepad=2"
      }
    },
    {
      category: "DIGITALE LÖSUNG",
      title: "Die große Überschrift",
      content: "Mittelgroßer Klartext zur Darstellung eines echten Onepage-Anwendungsfalls. Etwa 100 Symbole reichen normalerweise aus, um einen Absatz zu füllen, sodass er optisch perfekt und leicht zu lesen ist",
      person: {
        name: "Paul Muster",
        position: "Unternehmer",
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&h=256&facepad=2"
      }
    },
    {
      category: "DIGITALE LÖSUNG",
      title: "Die große Überschrift",
      content: "Mittelgroßer Klartext zur Darstellung eines echten Onepage-Anwendungsfalls. Etwa 100 Symbole reichen normalerweise aus, um einen Absatz zu füllen, sodass er optisch perfekt und leicht zu lesen ist",
      person: {
        name: "Pedro Macht",
        position: "Unternehmer",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=256&h=256&facepad=2"
      }
    },
    {
      category: "DIGITALE LÖSUNG",
      title: "Die große Überschrift",
      content: "Mittelgroßer Klartext zur Darstellung eines echten Onepage-Anwendungsfalls. Etwa 100 Symbole reichen normalerweise aus, um einen Absatz zu füllen, sodass er optisch perfekt und leicht zu lesen ist",
      person: {
        name: "Ted Bundy",
        position: "Unternehmer",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&h=256&facepad=2"
      }
    },
    {
      category: "DIGITALE LÖSUNG",
      title: "Die große Überschrift",
      content: "Mittelgroßer Klartext zur Darstellung eines echten Onepage-Anwendungsfalls. Etwa 100 Symbole reichen normalerweise aus, um einen Absatz zu füllen, sodass er optisch perfekt und leicht zu lesen ist",
      person: {
        name: "Karlos Marlos",
        position: "Unternehmer",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&w=256&h=256&facepad=2"
      }
    },
    {
      category: "DIGITALE LÖSUNG",
      title: "Besser als Berkshire Hathaway",
      content: "Mittelgroßer Klartext zur Darstellung eines echten Onepage-Anwendungsfalls. Etwa 100 Symbole reichen normalerweise aus, um einen Absatz zu füllen, sodass er optisch perfekt und leicht zu lesen ist",
      person: {
        name: "Warren Buffet",
        position: "Unternehmer",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&w=256&h=256&facepad=2"
      }
    },
    {
      category: "DIGITALE LÖSUNG",
      title: "Die große Überschrift",
      content: "Mittelgroßer Klartext zur Darstellung eines echten Onepage-Anwendungsfalls. Etwa 100 Symbole reichen normalerweise aus, um einen Absatz zu füllen, sodass er optisch perfekt und leicht zu lesen ist",
      person: {
        name: "Markus Lanz",
        position: "Unternehmer",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=256&h=256&facepad=2"
      }
    },
    {
      category: "DIGITALE LÖSUNG",
      title: "Die große Überschrift",
      content: "Mittelgroßer Klartext zur Darstellung eines echten Onepage-Anwendungsfalls. Etwa 100 Symbole reichen normalerweise aus, um einen Absatz zu füllen, sodass er optisch perfekt und leicht zu lesen ist",
      person: {
        name: "Matthias Richter",
        position: "Unternehmer",
        image: "https://images.unsplash.com/photo-1519340333755-c6e2a6a1b49a?auto=format&fit=facearea&w=256&h=256&facepad=2"
      }
    }
  ];

  return (
    <section className="py-24 text-white relative">
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
            slidesToScroll: 1,
            containScroll: "keepSnaps",
          }}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 flex-shrink-0">
                <FadeIn delay={index * 0.2}>
                  <motion.div 
                    whileHover={{ scale: 1.02, translateY: -5 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-sm p-8 h-full flex flex-col border border-[#232328]/60"
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
                      <p className="mb-8 text-gray-300 flex-grow">{testimonial.content}</p>
                    </FadeIn>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="flex items-center mt-auto"
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
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

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
