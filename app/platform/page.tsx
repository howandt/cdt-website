'use client';
import Link from 'next/link';
import QRDemo from '../components/QRDemo';

export default function HomePage() {

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-emerald-500 mb-6">
            CDT Platform
          </h1>
          <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
  Intelligent træningsplatform for professionelle og forældre der arbejder med børn med særlige behov
</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/om-cdt" 
              className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Læs mere om CDT
            </Link>
            <Link 
              href="/indhold" 
              className="inline-block bg-gray-800 text-emerald-400 border-2 border-emerald-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Se platform indhold
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🎓</span>
              <span>Evidensbaseret</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🤖</span>
              <span>AI-drevet læring</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🌟</span>
              <span>Certificering</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-500 mb-4">
              Alt hvad du behøver i én platform
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              CDT samler alle værktøjer og ressourcer du har brug for til at støtte børn med særlige behov
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Diagnose Bibliotek */}
              <Link href="/indhold#biblioteker" className="group">
                <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all border-2 border-transparent hover:border-emerald-500">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
                    Diagnose Bibliotek
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Omfattende information om 50+ diagnoser med symptomer og behandlingsmetoder
                  </p>
                  <span className="text-emerald-500 font-semibold flex items-center gap-1">
                    Udforsk biblioteket 
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Case Bibliotek */}
              <Link href="/indhold#biblioteker" className="group">
                <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all border-2 border-transparent hover:border-emerald-500">
                  <div className="text-4xl mb-4">💼</div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
                    Case Bibliotek
                  </h3>
                  <p className="text-gray-300 mb-4">
                    100+ virkelige cases til praktisk læring med video-demonstrationer
                  </p>
                  <span className="text-emerald-500 font-semibold flex items-center gap-1">
                    Se cases
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>

              {/* komorbid Bibliotek */}
              <Link href="/indhold#biblioteker" className="group">
                <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all border-2 border-transparent hover:border-emerald-500">
                  <div className="text-4xl mb-4">🗣️</div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
                    Komorbid Bibliotek
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Flere psykiske lidelser samtidigt, kan maskere eller forstærke symptomer.
                  </p>
                  <span className="text-emerald-500 font-semibold flex items-center gap-1">
                    Se værktøjer
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>

              {/* PBL Projekter */}
              <Link href="/indhold#biblioteker" className="group">
                <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all border-2 border-transparent hover:border-emerald-500">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
                    PBL Projekter
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Problem-baseret læring med AI-mentoring fra Heidi
                  </p>
                  <span className="text-emerald-500 font-semibold flex items-center gap-1">
                    Start projekt
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Quiz Bank */}
              <Link href="/indhold#biblioteker" className="group">
                <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all border-2 border-transparent hover:border-emerald-500">
                  <div className="text-4xl mb-4">🧩</div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
                    Quiz Bank
                  </h3>
                  <p className="text-gray-300 mb-4">
                    1000+ spørgsmål med adaptive sværhedsgrader og detaljeret feedback
                  </p>
                  <span className="text-emerald-500 font-semibold flex items-center gap-1">
                    Test din viden
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Rollespil Motor */}
              <Link href="/indhold#biblioteker" className="group">
                <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all border-2 border-transparent hover:border-emerald-500">
                  <div className="text-4xl mb-4">🎭</div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
                    Rollespil Motor
                  </h3>
                  <p className="text-gray-300 mb-4">
                    AI-drevne samtaler til at øve svære situationer sikkert
                  </p>
                  <span className="text-emerald-500 font-semibold flex items-center gap-1">
                    Øv samtaler
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Basic vs PRO */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-500 mb-12">
              Vælg den rette løsning for dig
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Basic Plan */}
              <div className="bg-gray-900 rounded-xl p-8 border-2 border-gray-700">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-2">CDT Basic</h3>
                  <p className="text-gray-400">Perfekt til at komme i gang</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span className="text-gray-300">15+ kernediagnoser</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span className="text-gray-300">20 grundcases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span className="text-gray-300">Basis kommunikationsværktøjer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span className="text-gray-300">200+ quiz spørgsmål</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span className="text-gray-300">Grundlæggende certificering</span>
                  </li>
                </ul>
                <Link 
                  href="/indhold" 
                  className="block text-center bg-gray-700 text-emerald-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                >
                  Læs mere om Basic
                </Link>
              </div>

              {/* PRO Plan */}
              <div className="bg-gray-900 rounded-xl p-8 border-2 border-emerald-500 relative transform hover:scale-105 transition-transform">
                <div className="absolute -top-4 right-8 bg-yellow-400 text-gray-800 px-4 py-1 rounded-full font-bold text-sm shadow-lg">
                  ANBEFALET
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-2">CDT PRO ⭐</h3>
                  <p className="text-gray-400">Den komplette løsning</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span className="text-gray-300">50+ diagnoser med løbende opdateringer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span className="text-gray-300">100+ cases med video-demonstrationer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span className="text-gray-300">Avancerede Komorbid værktøjer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span className="text-gray-300">1000+ adaptive quiz spørgsmål</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span className="text-gray-300">AI-drevet rollespil med stemmeanalyse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span className="text-gray-300">Fuld certificering & Heidi AI-mentor</span>
                  </li>
                </ul>
                <Link 
                  href="/indhold" 
                  className="block text-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all shadow-lg"
                >
                  Læs mere om PRO
                </Link>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/kontakt" 
                className="inline-block text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                Har du spørgsmål? Kontakt os →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-500 mb-12">
              Sådan fungerer CDT
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-emerald-500 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-2">Vælg dit fokusområde</h3>
                <p className="text-gray-300">Start med diagnosebiblioteket eller vælg et specifikt læringsmodul</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-500 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-2">Lær i dit tempo</h3>
                <p className="text-gray-300">Gennemgå cases, øv med rollespil og test din viden</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-500 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-2">Bliv certificeret</h3>
                <p className="text-gray-300">Opnå certificering og fortsæt med at udvikle dine kompetencer</p>
              </div>
            </div>
            <Link 
              href="/hvordan-det-virker" 
              className="inline-block mt-8 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Læs mere om processen →
            </Link>
          </div>
        </div>
      </section>

      {/* QR Demo Section */}
      <section id="demo" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <QRDemo />
        </div>
      </section>

      {/* Børnenes Verden Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-400 mb-4">
              🧠 Børnenes Verden
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              For første gang: oplev hvad der sker <span className="text-orange-400 font-semibold">indeni børnene</span> når vi voksne reagerer
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Når forældre skændes */}
              <div className="group cursor-pointer">
                <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all border-2 border-transparent hover:border-red-500">
                  <div className="text-4xl mb-4">💔</div>
                  <h3 className="text-xl font-bold text-red-400 mb-2 group-hover:text-red-300 transition-colors">
                    Når I Skændes
                  </h3>
                  <p className="text-gray-300 mb-4">
                    "Hvorfor råber mor og far ad hinanden?" - Mærk barnets angst og hjælpeløshed
                  </p>
                  
                  {/* Lille preview tekst der vises on hover */}
                  <div className="hidden group-hover:block mt-4 p-3 bg-red-900/30 rounded-lg border border-red-600/30">
                    <p className="text-red-200 text-sm italic mb-2">
                      💭 Barnets tanker:
                    </p>
                    <p className="text-red-300 text-xs">
                      "Er det min skyld?" • "Hvor skal jeg gemme mig?" • "Bliver de skilt?"
                    </p>
                    <p className="text-red-400 text-xs mt-2 font-semibold">
                      Klik for at se fulde påvirkning →
                    </p>
                  </div>
                  
                  <span className="text-red-500 font-semibold flex items-center gap-1 mt-4">
                    Oplev som barn
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Når voksne bliver frustrerede */}
              <div className="group cursor-pointer">
                <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all border-2 border-transparent hover:border-yellow-500">
                  <div className="text-4xl mb-4">😰</div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors">
                    Når Du Bliver Sur
                  </h3>
                  <p className="text-gray-300 mb-4">
                    "Jeg gør altid noget forkert" - Føl barnets selvbebrejdelse og forvirring
                  </p>
                  
                  {/* Lille preview tekst der vises on hover */}
                  <div className="hidden group-hover:block mt-4 p-3 bg-yellow-900/30 rounded-lg border border-yellow-600/30">
                    <p className="text-yellow-200 text-sm italic mb-2">
                      💭 Barnets tanker:
                    </p>
                    <p className="text-yellow-300 text-xs">
                      "Jeg er dum" • "Mor kan ikke lide mig" • "Jeg giver op"
                    </p>
                    <p className="text-yellow-400 text-xs mt-2 font-semibold">
                      Klik for at se fulde påvirkning →
                    </p>
                  </div>
                  
                  <span className="text-yellow-500 font-semibold flex items-center gap-1 mt-4">
                    Oplev som barn
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Når der kommanderes og irettesættes */}
              <div className="group cursor-pointer">
                <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all border-2 border-transparent hover:border-purple-500">
                  <div className="text-4xl mb-4">🤐</div>
                  <h3 className="text-xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
                    Når Du Kommanderer
                  </h3>
                  <p className="text-gray-300 mb-4">
                    "Jeg lukker bare ned" - Oplev hvordan barnet trækker sig indad og giver op
                  </p>
                  
                  {/* Lille preview tekst der vises on hover */}
                  <div className="hidden group-hover:block mt-4 p-3 bg-purple-900/30 rounded-lg border border-purple-600/30">
                    <p className="text-purple-200 text-sm italic mb-2">
                      💭 Barnets tanker:
                    </p>
                    <p className="text-purple-300 text-xs">
                      "Det gider jeg ikke høre" • "Mine følelser betyder intet" • "Jeg giver op"
                    </p>
                    <p className="text-purple-400 text-xs mt-2 font-semibold">
                      Klik for at se fulde påvirkning →
                    </p>
                  </div>
                  
                  <span className="text-purple-500 font-semibold flex items-center gap-1 mt-4">
                    Oplev som barn
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Kraftfuld besked */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 rounded-xl p-6 border border-orange-600/40 max-w-4xl mx-auto">
                <div className="text-4xl mb-4">⚠️</div>
                <h3 className="text-xl font-semibold text-orange-300 mb-3">
                  Revolutionær Empati-Træning
                </h3>
                <p className="text-orange-200 leading-relaxed">
                  Som den første platform i verden giver CDT dig mulighed for at <strong>træde ind i børnenes følelsesmæssige verden</strong>. 
                  Oplev på egen krop hvordan dine ord, din stemme og dine reaktioner påvirker dem indeni - 
                  <span className="text-orange-400 font-semibold"> før det er for sent.</span>
                </p>
                <div className="mt-4 text-sm text-orange-300/80 italic">
                  💡 Kun ved at forstå børnenes perspektiv kan vi virkelig ændre vores tilgang
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-500 mb-4">
              🧠 Test Din Viden
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Hurtige quizzer med personlig feedback - lær af dine svar
            </p>
            
            <Link 
              href="/quiz" 
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Start Quiz 🎯
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klar til at gøre en forskel?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Bliv en del af CDT-fællesskabet og få adgang til værktøjer der virkelig gør en forskel i børns liv.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
  href="/kontakt?plan=pro" 
  className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
>
  Start din gratis prøveperiode
</Link>
<Link 
  href="/features" 
  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all"
>
  Se alle features
</Link>
          </div>
        </div>
      </section>
    </div>
  );
}