import React from 'react';
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";

const AboutSection = () => {
  return (
    <section className="py-24 relative">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/xlg2x.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-gradient-to-b from-[#1a242c] to-[#2c4654]"
      />
      <div className="container relative z-10">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white p-12 max-w-[800px] rounded-sm border border-[#232328]/60"
        >
          <FadeIn>
            <h2 className="text-3xl md:text-4xl mb-8 text-[#18171a]">Über die VIA-Group</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h3 className="text-lg font-medium mb-6 text-[#18171a]">Ganzheitliche Beratung für wachsende Dienstleistungsunternehmen</h3>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mb-4 text-[#18171a]">Als Dienstleistungsunternehmer in der Wachstumsphase steigt nicht nur deine Steuerlast, sondern auch der Bedarf an umfassender Beratung.</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="mb-4 text-[#18171a]">Gleichzeitig stellt sich die Frage: Wohin mit den Überschüssen? Ohne klare Strategie verlierst du Geld – an den Staat oder durch falsche Entscheidungen. Parallel gibt es kaum passende Dienstleistungsangebote.</p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="mb-4 text-[#18171a]">Renommierte Wealth Manager und Multi-Family-Offices richten sich meist nur an Klienteln mit einem Vermögen von 15 Mio. € aufwärts. Dabei haben auch Agenturinhaber, B2B-Unternehmer und erfolgreiche Freelancer Bedarf an einem ganzheitlichen Dienstleistungsportfolio.</p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="mb-4 text-[#18171a]">Aus diesem Grund gibt es die Value in Action Group Freelancern und KMUs bereits in der Wachstumsphase optimal aufzustellen und gemeinsam wachsen, um so die regionale Wirtschaft zu stärken und dazu beizutragen, dass Unternehmertum in Deutschland und Europa weiterhin lohnenswert bleibt.</p>
          </FadeIn>
          <FadeIn delay={0.7}>
            <p className="mb-0 text-[#18171a]">Dabei unterstützen wir unsere Mandanten mit einem wachsenden Firmennetzwerk und mit zahlreichen starken Partnern im Hintergrund.</p>
          </FadeIn>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
