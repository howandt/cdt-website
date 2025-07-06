
import BackButton from '../components/BackButton';
export default function Features() {
  return (
    <div className="min-h-screen bg-gray-900">
      
      <main className="container mx-auto px-4 py-16">
        <BackButton />
        <h1 className="text-4xl font-bold text-emerald-500 text-center mb-12">
          CDT Features - Alt Hvad Systemet Kan
        </h1>

        {/* Kern Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-emerald-400 mb-8 text-center">
            🎯 Kernefunktioner
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">📚 Levende Fagbog</h3>
              <p className="text-gray-300">
                Altid opdateret viden om 15+ diagnoser. Ingen forældede bøger - kun aktuel, praktisk anvendelig viden.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">🎭 100+ Realistiske Cases</h3>
              <p className="text-gray-300">
                Fra skolevægring til sensoriske udfordringer - øv dig på virkelige situationer med intelligent feedback.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">🤖 Heidi AI-Tutor</h3>
              <p className="text-gray-300">
                Din personlige guide der tilpasser sig dit niveau og giver konstruktiv feedback på alle dine løsninger.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">📋 Skabelon-bibliotek</h3>
              <p className="text-gray-300">
                Trafiklys-kort, step-by-step guides, sociale scripts - præcist matchet til hver situation.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">🎮 Interaktive Rollespil</h3>
              <p className="text-gray-300">
                Øv samtaler, se situationen fra barnets perspektiv, træn empati og kommunikation.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">👩‍⚕️ Specialist Panel</h3>
              <p className="text-gray-300">
                Direkte adgang til rigtige eksperter når du har brug for dybere vejledning.
              </p>
            </div>
          </div>
        </div>

        {/* Unikke Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-emerald-400 mb-8 text-center">
            ✨ Det der gør CDT Unik
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-900/20 to-gray-800 p-8 rounded-xl border border-emerald-500/30">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                🧠 Den Intelligente Quiz-motor
              </h3>
              <p className="text-gray-300 mb-4">
                Vores revolutionerende tilgang hvor DU skriver løsningen først:
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-gray-800/50 p-4 rounded text-center">
                  <div className="text-emerald-500 font-bold mb-2">1. Case</div>
                  <p className="text-gray-400 text-sm">Du får en virkelig situation</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded text-center">
                  <div className="text-emerald-500 font-bold mb-2">2. Din løsning</div>
                  <p className="text-gray-400 text-sm">Beskriv din tilgang</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded text-center">
                  <div className="text-emerald-500 font-bold mb-2">3. Feedback</div>
                  <p className="text-gray-400 text-sm">Heidi evaluerer konstruktivt</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded text-center">
                  <div className="text-emerald-500 font-bold mb-2">4. Optimal løsning</div>
                  <p className="text-gray-400 text-sm">Se beste praksis</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                🔄 Levende & Dynamisk Platform
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-emerald-300 mb-2">Altid Opdateret</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      Ny forskning implementeres løbende
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      Cases tilføjes baseret på aktuelle behov
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      Feedback fra brugere forbedrer systemet
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-300 mb-2">Personlig Tilpasning</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      Husker din læringsstil og progression
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      Tilpasser sværhedsgrad automatisk
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      Foreslår relevante næste skridt
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tekniske Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-emerald-400 mb-8 text-center">
            💻 Tekniske Fordele
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="font-bold text-emerald-400 mb-2">24/7 Tilgængelig</h3>
              <p className="text-gray-400 text-sm">Lær når det passer dig - hjemme, på arbejde, på farten</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-emerald-400 mb-2">Alle Enheder</h3>
              <p className="text-gray-400 text-sm">Fungerer på mobil, tablet og computer</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="font-bold text-emerald-400 mb-2">Miljøvenlig</h3>
              <p className="text-gray-400 text-sm">Ingen trykte materialer - altid up-to-date</p>
            </div>
          </div>
        </div>

        {/* Ann feature */}
        <div className="bg-gradient-to-br from-purple-900/20 to-gray-800 p-8 rounded-xl border border-purple-500/30 mb-16">
          <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">
            🤖 Bonus: Ann - AI-vennen til børn
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Ann er Heidis AI-ven som arbejder direkte med børnene. Hun fortæller historier, 
            øver sociale færdigheder og giver børn en tryg digital ven at tale med.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-emerald-400 mb-6">
            Klar til at revolutionere din tilgang til børn med diagnoser?
          </h2>
          <button className="bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition font-bold text-lg">
            Start Din Gratis Prøveperiode
          </button>
        </div>
      </main>
    </div>
  );
}