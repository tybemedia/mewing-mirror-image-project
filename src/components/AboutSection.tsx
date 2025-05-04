import React from 'react';
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";

const AboutSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-[#1a242c] to-[#2c4654] text-white">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="container"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <FadeIn>
                <div>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                  >
                    Über die VIA-Group
                  </motion.h2>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-xl text-[#35a8a1]"
                  >
                    Ganzheitliche Beratung für wachsende Dienstleistungsunternehmen
                  </motion.h3>
                </div>
              </FadeIn>
              
              <div className="space-y-6 text-gray-200">
                <FadeIn delay={0.3}>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Als Dienstleistungsunternehmer in der Wachstumsphase steigt nicht nur deine Steuerlast, sondern auch der Bedarf an umfassender Beratung.
                  </motion.p>
                </FadeIn>
                
                <FadeIn delay={0.4}>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Renommierte Wealth Manager und Multi-Family-Offices richten sich meist nur an Klienteln mit einem Vermögen von 15 Mio. € aufwärts. Dabei haben auch Agenturinhaber, B2B-Unternehmer und erfolgreiche Freelancer Bedarf an einem ganzheitlichen Dienstleistungsportfolio.
                  </motion.p>
                </FadeIn>
                
                <FadeIn delay={0.5}>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Die Value in Action Group unterstützt Freelancer und KMUs bereits in der Wachstumsphase, um sie optimal aufzustellen und gemeinsam zu wachsen. Unser Ziel ist es, die regionale Wirtschaft zu stärken und dazu beizutragen, dass Unternehmertum in Deutschland und Europa weiterhin lohnenswert bleibt.
                  </motion.p>
                </FadeIn>
                
                <FadeIn delay={0.6}>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Wir bieten unseren Mandanten Zugang zu einem wachsenden Firmennetzwerk und arbeiten mit zahlreichen starken Partnern im Hintergrund zusammen.
                  </motion.p>
                </FadeIn>
              </div>
            </div>
            
            {/* Image */}
            <FadeIn direction="left" delay={0.3}>
              <div className="relative h-[600px] rounded-sm overflow-hidden">
                <motion.img 
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  src="http://virtus-finance.de/wp-content/uploads/2025/02/J68A2677-1.jpg" 
                  alt="VIA-Group Beratung"
                  className="object-cover w-full h-full"
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 bg-gradient-to-t from-[#1a242c]/80 to-transparent"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
