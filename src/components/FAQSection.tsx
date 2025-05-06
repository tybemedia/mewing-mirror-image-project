import React, { useState } from "react";

const faqData = [
  {
    question: "Handelt es sich bei dem Angebot um ein Coaching?",
    answer:
      "Nein. Wir bieten keine bloßen Informationsprodukte an. Stattdessen sind wir Umsetzungspartner, Berater und Wegbegleiter, die aktiv Lösungen implementieren.",
  },
  {
    question: "Was ist ein Family Office?",
    answer:
      "Der Begriff ist nicht eindeutig definiert. Typischerweise handelt es sich dabei um einen Dienstleister, der die Vermögen von einer oder mehrerer Familien betreut und verwaltet und neben der klassischen Vermögensverwaltung auch weitere Serviceleistungen durchführt.",
  },
  {
    question: "Beratet ihr mich auch steuerlich?",
    answer:
      "Erlaubnispflichtige Steuerberatung (iSv §§ 3, 4 StBerG) und Rechtsberatung (iSv §§ 3-5 RDG) wird durch unsere Partnerkanzleien erbracht.",
  },
  {
    question: "Muss ich dafür meine(n) Berater wechseln?",
    answer:
      "Nein, es ist nicht notwendig. Sofern du zufrieden bist, können wir unsere Lösungen auch in Kooperation mit deinen bestehenden Dienstleistern umsetzen.",
  },
  {
    question: "Wie viel Zeit muss ich für den Prozess einplanen?",
    answer:
      "Die Dauer ist individuell und hängt von deinem spezifischen Fall ab. Wir zielen darauf ab, den Aufwand für dich durch eine effiziente Planung und Umsetzung so gering wie möglich zu halten.",
  },
  {
    question: "Was wäre der nächste Schritt, wenn ich interessiert bin?",
    answer:
      "Der nächste Schritt wäre ein kostenfreies Strategiegespräch, in dem wir deine Situation analysieren und gemeinsam einen Plan entwickeln.",
  },
  {
    question: "Benötige ich ein tiefgreifendes Verständnis oder Vorerfahrung um mit euch zu arbeiten?",
    answer:
      "Nein, es ist keinerlei Vorerfahrung notwendig. Wir holen dich genau auf deinem aktuellen Wissensstand ab und führen dich durch den Prozess.",
  },
  {
    question: "Wie viel kostet die Beratung?",
    answer:
      "Wir arbeiten mit einem transparenten Projekthonorar, welches je nach Umfang der Zusammenarbeit variiert. Auf Wunsch machen wir dir nach dem kostenfreien Strategiegespräch ein individuelles Angebot.",
  },
  {
    question: "Ich bin selbst B2B Dienstleister. Gibt es Anknüpfungspunkte für eine Kooperation?",
    answer:
      "Ja, definitiv. Wenn du als B2B Dienstleister tätig bist, würden wir gerne mit dir über mögliche Kooperationsansätze sprechen. Melde dich einfach bei uns per Mail oder schreib uns direkt bei LinkedIn.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#18171a] py-24">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white tracking-tight">
          Häufige Fragen
        </h2>
        <div className="space-y-6">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-sm shadow-lg overflow-hidden"
            >
              <button
                className="w-full text-left px-8 py-6 focus:outline-none flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="text-lg font-medium text-[#18171a]">
                  {item.question}
                </span>
                <span className="ml-4 text-2xl text-[#35a8a1] font-bold select-none">
                  {openIndex === idx ? "–" : "+"}
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-8 pb-8 text-gray-700 text-lg animate-fadeIn">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 