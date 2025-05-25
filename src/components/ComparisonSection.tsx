import React from "react";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react"; // For the "Klassische Beratung" list
import { CheckCircle } from "lucide-react"; // For the Value in Action Group list

const classicPoints = [
  "Stückwerk statt holistischer Strategie",
  "Hoher Zeitaufwand durch diverse Ansprechpartner",
  "Bildet nur isoliert einen Bereich ab und versäumt Synergien",
  "Lange Wartezeiten und ineffiziente Kommunikation",
  "Ungunst zwischen einzelnen Beratern",
];

const viaPoints = [
  "Zeiteffizienz durch zentrale Schnittstelle",
  "Ganzheitliche Strategie und Konzeption",
  "Synergieeffekte durch Integrierung verschiedenster Fachbereiche",
  "Kurze Dienstwege und digitale Kommunikation",
  "Kooperation im Sinne des Klienten",
];

const ComparisonSection = () => (
  <section className="py-24 text-white relative">
    <div className="container max-w-5xl mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Was uns von klassischer <span className="text-[#35a8a1]">Beratung unterscheidet</span>
      </motion.h2>
      <motion.p
        className="text-lg font-semibold mb-2 text-[#35a8a1]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Lösungen so individuell wie du und dein Business Case.
      </motion.p>
      <motion.p
        className="text-gray-200 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Unsere Beratung verbindet Praxiserfahrung mit dem spezialisierten Know-how unserer Partnerkanzleien – für messbare Ergebnisse.
        Unsere Klienten profitieren nicht nur von exzellenten Investmentlösungen, sondern auch von starker steuerlicher und rechtlicher Expertise.
      </motion.p>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Klassische Beratung */}
        <motion.div
          className="bg-[#232328] rounded-lg p-8 flex flex-col shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Klassische Beratung</h3>
          <ul className="space-y-4">
            {classicPoints.map((point, idx) => (
              <li key={idx} className="flex items-start text-gray-200">
                <XCircle className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        {/* Value in Action Group */}
        <motion.div
          className="rounded-sm p-8 flex flex-col"
          style={{
            background: 'linear-gradient(135deg, rgba(53,168,161,0.2) 0%, rgba(26,36,44,0.9) 100%)'
          }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-[#35a8a1]">VALUE IN ACTION GROUP</h3>
          <ul className="space-y-4">
            {viaPoints.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#35a8a1] mr-4 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.p
          className="text-gray-300 text-base border-t border-white/30 pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Steuerberater, Anwalt, Finanzberater – alle arbeiten isoliert und keiner hat das Gesamtbild im Blick. So wird massiv Potenzial verschenkt.
        </motion.p>
        <motion.p
          className="text-gray-300 text-base border-t border-[#35a8a1]/30 pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Ein funktionsübergreifendes Expertenteam sorgt, tagtäglich dafür, dass du das Maximum aus deinen wirtschaftlichen Möglichkeiten machst.
        </motion.p>
      </div>
    </div>
  </section>
);

export default ComparisonSection; 