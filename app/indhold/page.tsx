
'use client';
import { useState } from 'react';
import BackButton from '../components/BackButton';
export default function IndholdPage() {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'pro'>('pro');

  const basicFeatures = {
    diagnose: ['15+ kernediagnoser', 'Grundlæggende symptombeskrivelser', 'Basis behandlingsmetoder'],
    cases: ['20 grundcases', 'Standard kompleksitet', 'Basis løsningsforslag'],
    pbl: ['5 kerneprojekter', 'Individuel gennemførelse', 'Standard feedback'],
    Komorbid: ['Basis samtaleguides', '10 kommunikationsskabeloner', 'Grundlæggende strategier'],
    quiz: ['200+ spørgsmål', 'Basis sværhedsgrader', 'Standard feedback'],
    rollespil: ['10 standard scenarier', 'Tekst-baseret rollespil', 'Basis feedback']
  };

  const proFeatures = {
    diagnose: ['50+ diagnoser', 'Detaljerede symptomprofiler', 'Nyeste forskningsbaserede metoder', 'Komorbiditetsinformation'],
    cases: ['100+ cases', 'Varierende kompleksitet', 'Multiple løsningsstrategier', 'Video-demonstrationer'],
    pbl: ['25+ projekter', 'Gruppe-kollaboration', 'Heidi AI-mentoring', 'Peer-review muligheder'],
    Komorbid: ['50+ samtaleguides', 'Kulturelt tilpassede skabeloner', 'Konfliktløsningsværktøjer', 'Forældreinddragelse guides'],
    quiz: ['1000+ spørgsmål', 'Adaptive sværhedsgrader', 'Detaljeret forklaring', 'Personlige læringsrapporter'],
    rollespil: ['Ubegrænsede scenarier', 'AI-drevne samtaler', 'Stemmeanalyse', 'Video-optag og replay']
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <BackButton />
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-6">
            CDT Platform Indhold
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Udforsk vores omfattende biblioteker og ressourcer designet til at styrke din faglighed
          </p>

          {/* Plan Selector */}
          <div className="inline-flex rounded-lg bg-gray-800 p-1">
            <button
              onClick={() => setSelectedPlan('basic')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedPlan === 'basic'
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              CDT Basic
            </button>
            <button
              onClick={() => setSelectedPlan('pro')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedPlan === 'pro'
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              CDT PRO ⭐
            </button>
          </div>
        </div>

        {/* Plan Info Box */}
        <div className="max-w-4xl mx-auto mb-12">
          {selectedPlan === 'basic' ? (
            <div className="bg-gray-800 rounded-xl p-8 border-2 border-gray-700">
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">CDT Basic</h2>
              <p className="text-gray-300 text-lg">
                Få adgang til kernefunktionaliteten i CDT platformen med udvalgte ressourcer 
                fra vores biblioteker. Perfekt til at komme i gang med struktureret læring.
              </p>
            </div>
          ) : (
            <div className="bg-gray-800 rounded-xl p-8 border-2 border-emerald-500">
              <h2 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center">
                CDT PRO 
                <span className="ml-2 text-yellow-400">⭐</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Få ubegrænset adgang til alle ressourcer, kontinuerlige opdateringer baseret på 
                den nyeste forskning, nye cases og skabeloner tilføjes løbende. Den komplette 
                løsning for professionelle der ønsker at være i front.
              </p>
            </div>
          )}
        </div>

        {/* Content Libraries */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-500 mb-8 text-center">
            Platform Biblioteker
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Diagnose Bibliotek */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">📚</div>
                {selectedPlan === 'pro' && (
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Opdateres løbende
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-emerald-400 mb-3">Diagnose Bibliotek</h3>
              <p className="text-gray-300 mb-4">
                Omfattende information om diagnoser, symptomer og evidensbaserede tilgange.
              </p>
              <div className="border-t border-gray-700 pt-4">
                <div className="space-y-3">
                  <div className={selectedPlan === 'basic' ? '' : 'opacity-50'}>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Basic indhold:</h4>
                    <ul className="space-y-1 text-sm">
                      {basicFeatures.diagnose.map((feature, i) => (
                        <li key={i} className={selectedPlan === 'basic' ? 'text-emerald-400 font-semibold' : 'text-gray-500'}>
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={selectedPlan === 'pro' ? '' : 'opacity-50'}>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">PRO indhold:</h4>
                    <ul className="space-y-1 text-sm">
                      {proFeatures.diagnose.map((feature, i) => (
                        <li key={i} className={selectedPlan === 'pro' ? 'text-emerald-400 font-semibold' : 'text-gray-500'}>
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Bibliotek */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">💼</div>
                {selectedPlan === 'pro' && (
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Nye cases månedligt
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-emerald-400 mb-3">Case Bibliotek</h3>
              <p className="text-gray-300 mb-4">
                Virkelige cases og scenarier til praktisk læring og refleksion.
              </p>
              <div className="border-t border-gray-700 pt-4">
                <div className="space-y-3">
                  <div className={selectedPlan === 'basic' ? '' : 'opacity-50'}>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Basic indhold:</h4>
                    <ul className="space-y-1 text-sm">
                      {basicFeatures.cases.map((feature, i) => (
                        <li key={i} className={selectedPlan === 'basic' ? 'text-emerald-400 font-semibold' : 'text-gray-500'}>
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={selectedPlan === 'pro' ? '' : 'opacity-50'}>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">PRO indhold:</h4>
                    <ul className="space-y-1 text-sm">
                      {proFeatures.cases.map((feature, i) => (
                        <li key={i} className={selectedPlan === 'pro' ? 'text-emerald-400 font-semibold' : 'text-gray-500'}>
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* PBL Projekter */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">🎯</div>
                {selectedPlan === 'pro' && (
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Nye projekter
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-emerald-400 mb-3">PBL Projekter</h3>
              <p className="text-gray-300 mb-4">
                Problem-baseret læring for dybdegående forståelse.
              </p>
              <div className="border-t border-gray-700 pt-4">
                <div className="space-y-3">
                  <div className={selectedPlan === 'basic' ? '' : 'opacity-50'}>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Basic indhold:</h4>
                    <ul className="space-y-1 text-sm">
                      {basicFeatures.pbl.map((feature, i) => (
                        <li key={i} className={selectedPlan === 'basic' ? 'text-emerald-400 font-semibold' : 'text-gray-500'}>
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={selectedPlan === 'pro' ? '' : 'opacity-50'}>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">PRO indhold:</h4>
                    <ul className="space-y-1 text-sm">
                      {proFeatures.pbl.map((feature, i) => (
                        <li key={i} className={selectedPlan === 'pro' ? 'text-emerald-400 font-semibold' : 'text-gray-500'}>
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Komorbid Bibliotek */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">🗣️</div>
                {selectedPlan === 'pro' && (
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Nye skabeloner
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-emerald-400 mb-3">Komorbid Bibliotek</h3>
              <p className="text-gray-300 mb-4">
                Kommunikationsværktøjer og samtalestrategier.
              </p>
              <div className="border-t border-gray-700 pt-4">
                <div className="space-y-3">
                  <div className={selectedPlan === 'basic' ? '' : 'opacity-50'}>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Basic indhold:</h4>
                    <ul className="space-y-1 text-sm">
                      {basicFeatures.Komorbid.map((feature, i) => (
                        <li key={i} className={selectedPlan === 'basic' ? 'text-emerald-400 font-semibold' : 'text-gray-500'}>
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={selectedPlan === 'pro' ? '' : 'opacity-50'}>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">PRO indhold:</h4>
                    <ul className="space-y-1 text-sm">
                      {proFeatures.Komorbid.map((feature, i) => (
                        <li key={i} className={selectedPlan === 'pro' ? 'text-emerald-400 font-semibold' : 'text-gray-500'}>
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Bank */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">🧩</div>
                {selectedPlan === 'pro' && (
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    AI-genererede
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-emerald-400 mb-3">Quiz Bank</h3>
              <p className="text-gray-300 mb-4">
                Test din viden og følg din læringsprogression.
              </p>
              <div className="border-t border-gray-700 pt-4">
                <div className="space-y-3">
                  <div className={selectedPlan === 'basic' ? '' : 'opacity-50'}>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Basic indhold:</h4>
                    <ul className="space-y-1 text-sm">
                      {basicFeatures.quiz.map((feature, i) => (
                        <li key={i} className={selectedPlan === 'basic' ? 'text-emerald-400 font-semibold' : 'text-gray-500'}>
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={selectedPlan === 'pro' ? '' : 'opacity-50'}>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">PRO indhold:</h4>
                    <ul className="space-y-1 text-sm">
                      {proFeatures.quiz.map((feature, i) => (
                        <li key={i} className={selectedPlan === 'pro' ? 'text-emerald-400 font-semibold' : 'text-gray-500'}>
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Rollespil Motor */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">🎭</div>
                {selectedPlan === 'pro' && (
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    AI-drevet
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-emerald-400 mb-3">Rollespil Motor</h3>
              <p className="text-gray-300 mb-4">
                Øv svære samtaler i et sikkert virtuelt miljø.
              </p>
              <div className="border-t border-gray-700 pt-4">
                <div className="space-y-3">
                  <div className={selectedPlan === 'basic' ? '' : 'opacity-50'}>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Basic indhold:</h4>
                    <ul className="space-y-1 text-sm">
                      {basicFeatures.rollespil.map((feature, i) => (
                        <li key={i} className={selectedPlan === 'basic' ? 'text-emerald-400 font-semibold' : 'text-gray-500'}>
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={selectedPlan === 'pro' ? '' : 'opacity-50'}>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">PRO indhold:</h4>
                    <ul className="space-y-1 text-sm">
                      {proFeatures.rollespil.map((feature, i) => (
                        <li key={i} className={selectedPlan === 'pro' ? 'text-emerald-400 font-semibold' : 'text-gray-500'}>
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-emerald-500 mb-8 text-center">
            Sammenlign CDT Basic og PRO
          </h2>
          <div className="bg-gray-800 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-6 py-4 text-left text-gray-300 font-semibold">Feature</th>
                  <th className={`px-6 py-4 text-center font-semibold ${
                    selectedPlan === 'basic' 
                      ? 'bg-emerald-700 text-white' 
                      : 'text-gray-300'
                  }`}>
                    CDT Basic
                  </th>
                  <th className={`px-6 py-4 text-center font-semibold ${
                    selectedPlan === 'pro' 
                      ? 'bg-emerald-700 text-white' 
                      : 'text-gray-300'
                  }`}>
                    CDT PRO ⭐
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="px-6 py-4 text-gray-300">Adgang til biblioteker</td>
                  <td className={`px-6 py-4 text-center ${
                    selectedPlan === 'basic' 
                      ? 'bg-emerald-900/30 font-semibold text-emerald-400' 
                      : 'text-gray-400'
                  }`}>
                    Begrænset
                  </td>
                  <td className={`px-6 py-4 text-center ${
                    selectedPlan === 'pro' 
                      ? 'bg-emerald-900/30 font-semibold text-emerald-400' 
                      : 'text-gray-400'
                  }`}>
                    Ubegrænset
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-300">Forskningsopdateringer</td>
                  <td className={`px-6 py-4 text-center ${
                    selectedPlan === 'basic' 
                      ? 'bg-emerald-900/30 font-semibold text-emerald-400' 
                      : 'text-gray-400'
                  }`}>
                    -
                  </td>
                  <td className={`px-6 py-4 text-center ${
                    selectedPlan === 'pro' 
                      ? 'bg-emerald-900/30 font-semibold text-emerald-400' 
                      : 'text-gray-400'
                  }`}>
                    Løbende
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-300">Nye cases & skabeloner</td>
                  <td className={`px-6 py-4 text-center ${
                    selectedPlan === 'basic' 
                      ? 'bg-emerald-900/30 font-semibold text-emerald-400' 
                      : 'text-gray-400'
                  }`}>
                    -
                  </td>
                  <td className={`px-6 py-4 text-center ${
                    selectedPlan === 'pro' 
                      ? 'bg-emerald-900/30 font-semibold text-emerald-400' 
                      : 'text-gray-400'
                  }`}>
                    Månedligt
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-300">Heidi AI support</td>
                  <td className={`px-6 py-4 text-center ${
                    selectedPlan === 'basic' 
                      ? 'bg-emerald-900/30 font-semibold text-emerald-400' 
                      : 'text-gray-400'
                  }`}>
                    Basis
                  </td>
                  <td className={`px-6 py-4 text-center ${
                    selectedPlan === 'pro' 
                      ? 'bg-emerald-900/30 font-semibold text-emerald-400' 
                      : 'text-gray-400'
                  }`}>
                    Avanceret
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-300">Certificering</td>
                  <td className={`px-6 py-4 text-center ${
                    selectedPlan === 'basic' 
                      ? 'bg-emerald-900/30 font-semibold text-emerald-400' 
                      : 'text-gray-400'
                  }`}>
                    Grundlæggende
                  </td>
                  <td className={`px-6 py-4 text-center ${
                    selectedPlan === 'pro' 
                      ? 'bg-emerald-900/30 font-semibold text-emerald-400' 
                      : 'text-gray-400'
                  }`}>
                    Fuld certificering
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h2 className="text-3xl font-bold text-emerald-500 mb-6">
            Vælg den rette løsning for dig
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Uanset om du vælger Basic eller PRO, får du adgang til kvalitetsindhold der gør en forskel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/kontakt?plan=basic" 
              className="inline-block bg-gray-700 text-emerald-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-600 transition-colors border-2 border-gray-600"
            >
              Start med Basic
            </a>
            <a 
              href="/kontakt?plan=pro" 
              className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-all shadow-lg"
            >
              Gå PRO nu ⭐
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}