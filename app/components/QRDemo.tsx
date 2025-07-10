'use client';
import { useState, useEffect } from 'react';

export default function QRDemo() {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(30 * 60); // 30 minutes in seconds
  const [isActive, setIsActive] = useState<boolean>(false);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [showOptimalSolution, setShowOptimalSolution] = useState<boolean>(false);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startSession = () => {
    if (selectedRole) {
      setIsActive(true);
    }
  };

  const resetSession = () => {
    setTimeLeft(30 * 60);
    setIsActive(false);
    setShowFeedback(false);
    setShowOptimalSolution(false);
  };

  const handleFeedback = () => {
    setShowFeedback(true);
  };

  const handleOptimalSolution = () => {
    setShowOptimalSolution(true);
  };

  if (showOptimalSolution) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-800">
                Optimal Løsning - Heidi Case 
                <span className="text-lg text-blue-600 ml-2">
                  ({selectedRole === 'teacher' ? 'Lærer perspektiv' : 
                    selectedRole === 'parent' ? 'Forælder perspektiv' : 
                    'Specialist perspektiv'})
                </span>
              </h1>
              <button
                onClick={() => setShowOptimalSolution(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Tilbage
              </button>
            </div>

            {/* Role-specific introduction */}
            <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <h2 className="text-lg font-semibold text-blue-800 mb-2">
                {selectedRole === 'teacher' && '👩‍🏫 Som lærer er dit fokus:'}
                {selectedRole === 'parent' && '👨‍👩‍👧 Som forælder er dit fokus:'}
                {selectedRole === 'specialist' && '👩‍⚕️ Som specialist er dit fokus:'}
              </h2>
              <p className="text-blue-700">
                {selectedRole === 'teacher' && 'At skabe et struktureret og trygt læringsmiljø, hvor Heidi kan udvikle sig akademisk og socialt, mens hendes særlige behov imødekommes i klassekonteksten.'}
                {selectedRole === 'parent' && 'At understøtte Heidi hjemme, samarbejde konstruktivt med skolen, og sikre kontinuitet mellem hjem og skole i jeres tilgange til Heidis udvikling.'}
                {selectedRole === 'specialist' && 'At rådgive og støtte både familie og skole med evidensbaserede metoder, koordinere tværfaglig indsats, og sikre trauma-informeret praksis.'}
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h2 className="text-xl font-semibold text-green-800 mb-4">🎯 Optimal Tilgang til Heidi</h2>
                <p className="text-green-700 leading-relaxed">
                  Den optimale tilgang til Heidi kræver en balanceret kombination af struktur, 
                  relationel tilgang og gradueret selvstændighed, der respekterer hendes behov 
                  for både sikkerhed og autonomi.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">🏗️ Strukturelle Elementer</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• <strong>Forudsigelige rutiner:</strong> Faste tider for aktiviteter og overgange</li>
                    <li>• <strong>Visuelle hjælpemidler:</strong> Skemaer og piktogrammer for dagens forløb</li>
                    <li>• <strong>Trygge rum:</strong> Etabler faste steder hvor Heidi kan trække sig tilbage</li>
                    <li>• <strong>Graduelle overgange:</strong> Forbered ændringer i god tid</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">❤️ Relationelle Strategier</h3>
                  <ul className="space-y-2 text-purple-700">
                    <li>• <strong>Anerkend følelser:</strong> "Jeg kan se du er frustreret"</li>
                    <li>• <strong>Valg indenfor rammer:</strong> "Vil du have den blå eller røde bog?"</li>
                    <li>• <strong>Styrkebaseret tilgang:</strong> Fokuser på Heidis kompetencer</li>
                    <li>• <strong>Co-regulation:</strong> Hjælp Heidi med at regulere gennem din tilstedeværelse</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">🎮 Sensoriske Strategier</h3>
                  <ul className="space-y-2 text-orange-700">
                    <li>• <strong>Sensoriske pauser:</strong> Planlagte pauser med sensorisk input</li>
                    <li>• <strong>Bevægelsesmuligheder:</strong> Adgang til fysisk aktivitet</li>
                    <li>• <strong>Rolige zoner:</strong> Områder med reduceret sensorisk input</li>
                    <li>• <strong>Sensoriske tools:</strong> Fidget toys, vægtede veste m.m.</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">📈 Gradueret Selvstændighed</h3>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• <strong>Små succeser:</strong> Start med opgaver Heidi mestrer</li>
                    <li>• <strong>Modeling:</strong> Vis hvordan opgaver løses</li>
                    <li>• <strong>Scaffolding:</strong> Gradvis reduktion af støtte</li>
                    <li>• <strong>Selvmonitorering:</strong> Lær Heidi at vurdere egen progress</li>
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-800 mb-3">💡 Rolle-specifikke Interventioner</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {selectedRole === 'teacher' && (
                    <>
                      <div>
                        <h4 className="font-medium text-indigo-700 mb-2">Klasseværelset</h4>
                        <p className="text-sm text-indigo-600">Visualt dagsskema, fast plads med færre distraktioner, sensorisk hjørne til pauser</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-indigo-700 mb-2">Undervisning</h4>
                        <p className="text-sm text-indigo-600">Korte instruktioner, tjek af forståelse, alternative evalueringsformer</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-indigo-700 mb-2">Sociale Situationer</h4>
                        <p className="text-sm text-indigo-600">Strukturerede pauseaktiviteter, buddy-system, sociale historier</p>
                      </div>
                    </>
                  )}
                  {selectedRole === 'parent' && (
                    <>
                      <div>
                        <h4 className="font-medium text-indigo-700 mb-2">Hjemme Rutiner</h4>
                        <p className="text-sm text-indigo-600">Faste tider for lektier, visualt hjemmeskema, rolig morgenrutine</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-indigo-700 mb-2">Skole-hjem Samarbejde</h4>
                        <p className="text-sm text-indigo-600">Daglig kommunikationsbog, fælles strategier, forberedelse af ændringer</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-indigo-700 mb-2">Fritid & Familie</h4>
                        <p className="text-sm text-indigo-600">Sensoriske aktiviteter, strukturerede playdates, familietid uden krav</p>
                      </div>
                    </>
                  )}
                  {selectedRole === 'specialist' && (
                    <>
                      <div>
                        <h4 className="font-medium text-indigo-700 mb-2">Assessering</h4>
                        <p className="text-sm text-indigo-600">Sensorisk profil, adfærdsobservationer, funktionelle vurderinger</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-indigo-700 mb-2">Intervention</h4>
                        <p className="text-sm text-indigo-600">Trauma-informeret terapi, sensorisk integration, social færdighedstræning</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-indigo-700 mb-2">Koordination</h4>
                        <p className="text-sm text-indigo-600">Tværfaglige møder, supervision af personale, opfølgning på mål</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-3">⚠️ Vigtige Overvejelser</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• <strong>Individuel tilpasning:</strong> Alle strategier skal tilpasses Heidis specifikke behov</li>
                  <li>• <strong>Tværfagligt samarbejde:</strong> Koordination mellem alle involverede voksne</li>
                  <li>• <strong>Løbende evaluering:</strong> Regelmæssig vurdering og justering af indsatser</li>
                  <li>• <strong>Familiecentreret:</strong> Involver og understøt Heidis familie</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">📝 Refleksionsspørgsmål</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hvordan kan vi bedst understøtte Heidis sociale interaktioner?</li>
                  <li>• Hvilke sensoriske behov har Heidi, og hvordan imødekommer vi dem?</li>
                  <li>• Hvordan sikrer vi konsistens på tværs af forskellige miljøer?</li>
                  <li>• Hvad er Heidis styrker, og hvordan bygger vi på dem?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showFeedback) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎉</div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Fantastisk arbejde!</h1>
              <p className="text-gray-600">Du har demonstreret god forståelse for trauma-informeret pædagogik</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-green-800">Dine styrker:</h3>
                <ul className="mt-2 text-green-700 space-y-1">
                  <li>• Viste empati og forståelse for Heidis situation</li>
                  <li>• Brugte trauma-informerede tilgange</li>
                  <li>• Fokuserede på at skabe tryghed og forudsigelighed</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-blue-800">Områder for udvikling:</h3>
                <ul className="mt-2 text-blue-700 space-y-1">
                  <li>• Overvej flere sensoriske strategier</li>
                  <li>• Tænk på længerevarende interventioner</li>
                  <li>• Inddrag familie og tværfagligt team mere</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-yellow-800">Næste skridt:</h3>
                <ul className="mt-2 text-yellow-700 space-y-1">
                  <li>• Se den optimale løsning for at lære mere</li>
                  <li>• Reflekter over hvordan du kan anvende det lærte</li>
                  <li>• Diskuter casen med kolleger</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleOptimalSolution}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Se Optimal Løsning
              </button>
              <button
                onClick={resetSession}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Prøv Igen
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">CDT Demo Session</h1>
            <p className="text-gray-600">Vælg din rolle og start en 30-minutters demo session</p>
          </div>

          {!isActive ? (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Vælg din rolle:</h3>
                <div className="grid gap-4">
                  {[
                    { id: 'teacher', name: 'Lærer', icon: '👩‍🏫', desc: 'Klasselærer eller fagpersonale' },
                    { id: 'parent', name: 'Forælder', icon: '👨‍👩‍👧', desc: 'Forælder til barnet' },
                    { id: 'specialist', name: 'Specialist', icon: '👩‍⚕️', desc: 'Psykolog, terapeut eller anden specialist' }
                  ].map((role) => (
                    <label key={role.id} className="cursor-pointer">
                      <input
                        type="radio"
                        name="role"
                        value={role.id}
                        checked={selectedRole === role.id}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`p-4 rounded-lg border-2 transition-all ${
                        selectedRole === role.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{role.icon}</span>
                          <div>
                            <div className="font-semibold text-gray-800">{role.name}</div>
                            <div className="text-sm text-gray-600">{role.desc}</div>
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={startSession}
                disabled={!selectedRole}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  selectedRole
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Start Demo Session (30 min)
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-mono text-blue-600 mb-2">
                  {formatTime(timeLeft)}
                </div>
                <p className="text-gray-600">Tid tilbage i demo session</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Case: Heidi (7 år)</h3>
                <div className="text-gray-700 space-y-3">
                  <p>
                    <strong>Baggrund:</strong> Heidi er en 7-årig pige med autisme og ADHD. Hun har oplevet tidlig trauma 
                    og har svært ved at regulere sine følelser, især ved overgange og uforudsete ændringer.
                  </p>
                  <p>
                    <strong>Udfordringer:</strong> Heidi har svært ved at starte opgaver, bliver hurtigt frustreret, 
                    og reagerer kraftigt på lyde og berøring. Hun trækker sig ofte væk fra sociale situationer.
                  </p>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="font-semibold text-blue-800 mb-2">Din rolle-specifikke opgave:</p>
                    {selectedRole === 'teacher' && (
                      <p className="text-blue-700">
                        Som <strong>lærer</strong> skal du hjælpe Heidi med at trives i klasseværelset. 
                        Fokuser på hvordan du strukturerer undervisningen, skaber forudsigelighed, 
                        og håndterer Heidis behov for pauser og sensorisk regulering i skolemiljøet.
                      </p>
                    )}
                    {selectedRole === 'parent' && (
                      <p className="text-blue-700">
                        Som <strong>forælder</strong> skal du støtte Heidi hjemme og i samarbejdet med skolen. 
                        Tænk på hvordan du skaber struktur i hjemmet, forbereder Heidi på skoledagen, 
                        og kommunikerer med lærerne om Heidis behov og fremskridt.
                      </p>
                    )}
                    {selectedRole === 'specialist' && (
                      <p className="text-blue-700">
                        Som <strong>specialist</strong> skal du rådgive og understøtte både forældre og skole. 
                        Fokuser på evidensbaserede interventioner, tværfagligt samarbejde, 
                        og hvordan du kan hjælpe med at implementere trauma-informerede tilgange.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleFeedback}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Få AI Feedback
                </button>
                <button
                  onClick={resetSession}
                  className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Stop Session
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}