import React from "react";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Strukturplanung & Gründungsservice",
    image: "YOUR_IMAGE_URL_1",
    points: [
      "Optimierte Firmensetups für Steuereffizienz und Haftungsbeschränkung",
      "Beteiligungsmanagement",
      "Strukturberatung",
      "Neu- und Ausgründungen",
    ],
  },
  {
    title: "Kapitalaufbau & Vermögensanlage",
    image: "YOUR_IMAGE_URL_2",
    points: [
      "Offmarket Immobilien Investments",
      "Wissenschaftliches Investieren",
      "Geldanlage in der Kapitalgesellschaft",
      "Portfolio Zusammenstellung",
      "Geschäftsführer-Versorgung",
    ],
  },
  {
    title: "Liquiditätsoptimierung & Finanzierung",
    image: "YOUR_IMAGE_URL_3",
    points: [
      "Optimierte Gehaltsstrukturen",
      "Kapitalbeschaffung",
      "Effiziente Banking & Depot Setups",
      "Erhöhung der Brutto-Bezahlquote (Betriebs- statt Privatausgaben)",
    ],
  },
  {
    title: "Vermögensschutz & Riskmanagement",
    image: "YOUR_IMAGE_URL_4",
    points: [
      "Stiftungen",
      "Individuelle Deckungskonzepte",
      "CapBonds",
      "Notfallkonzepte",
    ],
  },
];

const ServicePortfolio = () => (
  <section className="py-24 bg-[#18171a] text-white">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-[#1a242c] to-[#2c4654] rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
              style={{ borderRadius: 0 }}
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="text-[#35a8a1] w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicePortfolio;
