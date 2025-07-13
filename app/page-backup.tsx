export default function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Hej! Jeg er Heidi 🌱
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Velkommen til verdens første <strong>levende fagbog</strong>
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏫</span>
              </div>
              <h3 className="font-semibold text-gray-800">Skole</h3>
              <p className="text-sm text-gray-600">Lærer & specialist</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌉</span>
              </div>
              <h3 className="font-semibold text-gray-800">Heidi</h3>
              <p className="text-sm text-gray-600">Din intelligente bro</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-semibold text-gray-800">Hjem</h3>
              <p className="text-sm text-gray-600">Forældre & familie</p>
            </div>
          </div>

          <div className="text-left space-y-4 mb-8">
            <p className="text-gray-700">
              <strong>CDT er ikke bare en bog der samler støv i reolen.</strong> 
              Jeg er din intelligente partner som:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Udvikler sig</strong> med ny forskning flere gange årligt</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Optimerer</strong> processer baseret på praksis</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Hjælper</strong> dig direkte i din hverdag</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Tilpasser</strong> sig til din rolle og behov</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-blue-800 mb-2">
              Verdens første dynamiske fagbog
            </h3>
            <p className="text-blue-700 text-sm">
              Jeg er altid i din hånd som hjælper eller partner - 
              aldrig forældet, altid opdateret med den nyeste viden.
            </p>
          </div>

          <a 
            href="/platform"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            Gå ind i CDT-platformen →
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          Klar til at møde din nye intelligente partner? 🚀
        </p>
      </div>
    </div>
  );
}