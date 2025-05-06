import React, { useRef } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    title: "Discovery Phase",
    description: "Erstgespräch, Kennenlernen und Zieldefinition.",
    image: "https://onecdn.io/media/f38a9d62-e98a-47e4-b353-02007f5f11b9/md",
  },
  {
    title: "Analyse Phase",
    description: "Analyse der aktuellen Situation und Herausforderungen.",
    image: "https://onecdn.io/media/222af3bb-ade5-4ccf-b039-9a76be983548/md",
  },
  {
    title: "Konzeption",
    description: "Entwicklung eines individuellen Konzepts.",
    image: "https://onecdn.io/media/4cdc6476-6dca-469a-a499-452a23d274a4/md",
  },
  {
    title: "Umsetzung",
    description: "Implementierung der entwickelten Strategien.",
    image: "https://onecdn.io/media/b3640e83-52d7-4d8a-895c-29c33769454a/md",
  },
  {
    title: "Laufende Betreuung",
    description: "Kontinuierliche Begleitung und Optimierung.",
    image: "https://onecdn.io/media/da780121-2014-40ef-9b68-75fe862bed59/md",
  },
];

const JourneyTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  // Animate height and color of the progress bar
  const progressBarHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const progressBarColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#35a8a1", "#2c4654", "#e0fffa"] // Start, middle, end color
  );

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a242c] to-[#2c4654] text-white">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight">
          So läuft die Zusammenarbeit ab.
        </h2>
        <div ref={timelineRef} className="relative">
          {/* Custom animated progress bar overlay (z-0, behind everything) */}
          <div className="absolute left-1/2 top-0 w-2 h-full z-0 pointer-events-none" style={{ transform: 'translateX(-50%)' }}>
            <motion.div
              style={{
                height: progressBarHeight,
                background: progressBarColor,
                width: '100%',
                borderRadius: '1rem',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />
          </div>
          {/* The actual timeline (z-10, above the line) */}
          <VerticalTimeline lineColor="transparent" className="!pt-0 z-10 relative">
            {steps.map((step, idx) => (
              <VerticalTimelineElement
                key={idx}
                contentStyle={{
                  background: 'linear-gradient(135deg, #1a242c 0%, #2c4654 100%)',
                  color: '#fff',
                  borderTop: '4px solid #35a8a1',
                  boxShadow: '0 4px 24px 0 rgba(53,168,161,0.15)',
                  padding: 0,
                }}
                contentArrowStyle={{ borderRight: '7px solid #35a8a1' }}
                iconStyle={{
                  background: '#35a8a1',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 20, // Make sure icon is above the line
                  position: 'relative'
                }}
                icon={<span>{idx + 1}</span>}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full block mb-0 rounded-none"
                  style={{ margin: 0, padding: 0, borderRadius: 0, display: 'block' }}
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-2 text-[#35a8a1]">{step.title}</h3>
                  <p className="text-gray-200">{step.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline; 