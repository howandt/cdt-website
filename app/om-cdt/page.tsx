import BackButton from '../components/BackButton';
export default function OmCDTPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <BackButton />
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-6">
            Om CDT Platform
          </h1>
          <p className="text-xl text-gray-300">
            En intelligent træningsplatform designet til at styrke voksne der arbejder med børn med særlige behov
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-emerald-400 mb-4">Vores Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              CDT (Child Diagnosis Tutor) er verdens første interaktive levende fagbog, udviklet som en del af CDA økosystemet med ét klart formål: 
              At give professionelle og forældre de værktøjer og den viden, de har brug for til at støtte børn med 
              diagnoser på den bedst mulige måde.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Vi tror på, at gennem målrettet træning og adgang til evidensbaserede ressourcer kan vi skabe bedre 
              outcomes for både børn og de voksne, der støtter dem.
            </p>
          </div>
        </div>

        {/* What is CDT Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-emerald-500 mb-8 text-center">Hvad er CDT?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 border-2 border-emerald-600">
              <h3 className="text-2xl font-semibold text-emerald-400 mb-4">For Professionelle</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Struktureret kompetenceudvikling
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Adgang til omfattende diagnosebibliotek
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Praktiske cases og rollespilsscenarier
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  Kontinuerlig læring gennem quiz og tests
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border-2 border-teal-600">
              <h3 className="text-2xl font-semibold text-teal-400 mb-4">For Forældre</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  Forståelse af barnets diagnose
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  Praktiske strategier til hverdagen
                </li>
                <li className="flex items-start">
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  Støtte fra Heidi AI-tutor
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-emerald-500 mb-8 text-center">Platform Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">Diagnose Bibliotek</h3>
              <p className="text-gray-300">Omfattende information om forskellige diagnoser, symptomer og behandlingsmetoder.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">Case Bibliotek</h3>
              <p className="text-gray-300">Virkelige cases og scenarier til at øve praktisk anvendelse af viden.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">PBL Projekter</h3>
              <p className="text-gray-300">Problem-baseret læring for dybdegående forståelse og praktisk erfaring.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">Komorbid Bibliotek</h3>
              <p className="text-gray-300">Kommunikationsværktøjer og strategier for effektiv interaktion.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-4">🧩</div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">Quiz Bank</h3>
              <p className="text-gray-300">Test din viden og spor din fremgang med vores omfattende quiz-system.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">Rollespil Motor</h3>
              <p className="text-gray-300">Øv svære samtaler og situationer i et sikkert, virtuelt miljø.</p>
            </div>
          </div>
        </div>

        {/* AI Assistants */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-emerald-500 mb-8 text-center">Dine AI Assistenter</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 border-2 border-emerald-600">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-3">Heidi - Din AI Tutor</h3>
              <p className="text-gray-300">
                Heidi er din personlige AI-tutor, der guider dig gennem læringsprocessen. 
                Hun kan besvare spørgsmål, give feedback på dine svar og hjælpe dig med at 
                forstå komplekse koncepter.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border-2 border-teal-600">
              <div className="text-5xl mb-4">👧</div>
              <h3 className="text-2xl font-bold text-teal-400 mb-3">Ann - Børnenes AI Ven</h3>
              <p className="text-gray-300">
                Ann er en del af CDA økosystemet og fungerer som en støttende AI-ven for børn. 
                CDT hjælper dig med at forstå, hvordan du bedst kan samarbejde med Ann i dit 
                arbejde med børnene.
              </p>
            </div>
          </div>
        </div>

        {/* CDA Ecosystem */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-emerald-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Del af CDA Økosystemet</h2>
            <p className="text-lg leading-relaxed mb-4 opacity-95">
              CDT er en integreret del af CDA (Children&apos;s Development AI) økosystemet. 
              Dette betyder, at din læring og udvikling direkte påvirker, hvordan du kan 
              støtte børn gennem hele deres udviklingsrejse.
            </p>
            <p className="text-lg leading-relaxed opacity-95">
              Sammen skaber vi en fremtid, hvor alle børn får den støtte og forståelse, 
              de fortjener - uanset deres udfordringer.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-500 mb-6">Klar til at gøre en forskel?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Bliv en del af CDT-fællesskabet og få adgang til værktøjer, der virkelig gør en forskel.
          </p>
          <a 
            href="/kontakt" 
            className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Kom i gang i dag
          </a>
        </div>
      </div>
    </div>
  );
}