import React from 'react';

const companies = [
  {
    title: 'Strategieberatung',
    image: '/placeholder.svg',
  },
  {
    title: 'Vermögensverwaltung & Immobilien',
    image: '/placeholder.svg',
  },
  {
    title: 'Finanzdienstleistung',
    image: '/placeholder.svg',
  },
];

const CompanyNetworkSection = () => (
  <section className="py-24 text-white relative">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Unser Firmennetzwerk</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {companies.map((company, idx) => (
          <div
            key={idx}
            className="rounded-sm p-8 flex flex-col items-center border border-[#232328]/60 shadow-lg bg-[#232328]/80"
          >
            <img
              src={company.image}
              alt={company.title}
              className="w-32 h-32 object-cover mb-6 rounded"
            />
            <h3 className="text-xl font-semibold text-center text-white">{company.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CompanyNetworkSection; 