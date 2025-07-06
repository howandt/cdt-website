import BackButton from '../components/BackButton';
export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-900">
      
      
      <main className="container mx-auto px-4 py-16">
        <BackButton />
        <h1 className="text-4xl font-bold text-emerald-500 text-center mb-12">
          Sådan Fungerer CDT
        </h1>

        {/* Trin-for-trin guide */}
        <div className="max-w-4xl mx-auto">
          {/* Trin 1 */}
          <div className="mb-12 bg-gray-800 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                1
              </div>
              <h2 className="text-2xl font-bold text-emerald-400">Vælg Din Rolle</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Når du starter, vælger du om du er lærer, forælder, serviceperson eller specialist. 
              Alt indhold tilpasses automatisk til din rolle og behov.
            </p>
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <p className="text-gray-400 italic">
                &quot;Hej, jeg hedder Heidi. Hvad er dit navn, og hvilken rolle har du?&quot;
              </p>
            </div>
          </div>

          {/* Trin 2 */}
          <div className="mb-12 bg-gray-800 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                2
              </div>
              <h2 className="text-2xl font-bold text-emerald-400">Vælg Læringsform</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h3 className="font-bold text-emerald-300 mb-2">📚 Teori-tilstand</h3>
                <p className="text-gray-400 text-sm">Få faglig viden om diagnoser og interventioner</p>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h3 className="font-bold text-emerald-300 mb-2">🎭 Case-tilstand</h3>
                <p className="text-gray-400 text-sm">Arbejd med virkelige situationer</p>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h3 className="font-bold text-emerald-300 mb-2">🧠 Quiz-tilstand</h3>
                <p className="text-gray-400 text-sm">Test din viden med feedback</p>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h3 className="font-bold text-emerald-300 mb-2">🎮 Rollespil</h3>
                <p className="text-gray-400 text-sm">Øv samtaler og se barnets perspektiv</p>
              </div>
            </div>
          </div>

          {/* Trin 3 */}
          <div className="mb-12 bg-gray-800 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                3
              </div>
              <h2 className="text-2xl font-bold text-emerald-400">Den Unikke Quiz-proces</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Dette er det der gør CDT helt speciel - du lærer gennem at skrive og reflektere:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-emerald-500 mr-3">→</span>
                <div>
                  <strong className="text-emerald-300">Du får en case:</strong>
                  <p className="text-gray-400 text-sm mt-1">
                    &quot;Mads på 9 år bliver vred når han skal ind fra frikvarter...&quot;
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-500 mr-3">→</span>
                <div>
                  <strong className="text-emerald-300">Du skriver din løsning:</strong>
                  <p className="text-gray-400 text-sm mt-1">
                    Beskriv hvordan DU ville håndtere situationen
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-500 mr-3">→</span>
                <div>
                  <strong className="text-emerald-300">Heidi evaluerer:</strong>
                  <p className="text-gray-400 text-sm mt-1">
                    &quot;God ide med forberedelse! Men hvad hvis Mads bliver overrasket?&quot;
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-500 mr-3">→</span>
                <div>
                  <strong className="text-emerald-300">Du får den optimale løsning:</strong>
                  <p className="text-gray-400 text-sm mt-1">
                    Se hele step-by-step løsningen med relevante skabeloner
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skabelon-biblioteket */}
          <div className="mb-12 bg-gradient-to-br from-emerald-900/20 to-gray-800 p-8 rounded-xl border border-emerald-500/30">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">
              📋 Skabelon-biblioteket
            </h2>
            <p className="text-gray-300 mb-6">
              Hver case kommer med præcist matchede værktøjer:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="font-bold text-emerald-300 mb-2">Trafiklys-system</h3>
                <p className="text-gray-400 text-sm">Visuelt værktøj til følelsesregulering</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="font-bold text-emerald-300 mb-2">Step-by-step guides</h3>
                <p className="text-gray-400 text-sm">Trinvise løsninger til komplekse situationer</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="font-bold text-emerald-300 mb-2">Sociale scripts</h3>
                <p className="text-gray-400 text-sm">Forberedte samtaler til svære situationer</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="font-bold text-emerald-300 mb-2">Visuelle støttesystemer</h3>
                <p className="text-gray-400 text-sm">Piktogrammer og visuelle planer</p>
              </div>
            </div>
          </div>

          {/* Ann - AI-vennen */}
          <div className="mb-12 bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">
              🤖 Mød Ann - AI-vennen til børn
            </h2>
            <p className="text-gray-300 mb-4">
              Ann er Heidis AI-ven som hjælper børn direkte:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                Fortæller historier der hjælper med følelser
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                Øver sociale færdigheder gennem leg
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                Giver børn en tryg ven at tale med
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button className="bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition font-bold text-lg">
              Prøv CDT Gratis Nu
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}