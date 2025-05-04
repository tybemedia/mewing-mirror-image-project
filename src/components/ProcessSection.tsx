
import React from 'react';
import { Button } from '@/components/ui/button';

const ProcessSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl mb-4">
          Was passiert in der <span className="bg-[#35a8a1] px-4 py-1">Potenzialanalyse?</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-6">
              In einem ersten Telefongespräch analysieren wir, ob und wie du durch ein virtuelles Family Office profitieren kannst.
            </p>
            <p className="mb-6">
              Gemeinsam erarbeiten wir bereits ein erstes Konzept, mit konkreten Ansätzen, mit denen du:
            </p>
            
            <ul className="space-y-6">
              <li className="flex">
                <div className="mr-4 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <span>Deine Steuerlast um bis zu 50% reduzierst</span>
              </li>
              <li className="flex">
                <div className="mr-4 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <span>Mehr Liquidität zur Verfügung hast</span>
              </li>
              <li className="flex">
                <div className="mr-4 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <span>Deinen Kapitalaufbau effizienter gestaltest</span>
              </li>
              <li className="flex">
                <div className="mr-4 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <span>Dich und dein Unternehmen stabiler aufstellst und Vermögen schützt</span>
              </li>
            </ul>
            
            <p className="mt-6 mb-8">
              Erfüllst du die Kriterien für eine Zusammenarbeit, besprechen wir im Anschluss konkrete Optionen für den weiteren Ablauf.
            </p>
            
            <Button className="bg-[#35a8a1] hover:bg-[#35a8a1]/90 text-white px-8 py-6">
              Potenzialanalyse buchen
            </Button>
          </div>
          
          <div>
            <img src="/lovable-uploads/351e729a-56dc-4d56-a759-336432721bb7.png" alt="Potenzialanalyse" className="w-full h-auto rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
