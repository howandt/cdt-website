'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function DemoPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedRole, setSelectedRole] = useState('');
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [demoStarted, setDemoStarted] = useState(false);
  const [userSolution, setUserSolution] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [showOptimal, setShowOptimal] = useState(false);

  // Check URL for pre-selected role
  useEffect(() => {
    const roleFromUrl = searchParams.get('role');
    if (roleFromUrl && ['teacher', 'parent', 'specialist'].includes(roleFromUrl)) {
      setSelectedRole(roleFromUrl);
      setDemoStarted(true); // Start demo automatically if role is pre-selected
    }
  }, [searchParams]);

  // Timer
  useEffect(() => {
    if (demoStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      alert('Demo tiden er udløbet!');
      router.push('/');
    }
  }, [timeLeft, demoStarted, router]);

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const roles = [
    { id: 'teacher', name: 'Lærer', icon: '👩‍🏫', description: 'Underviser i folkeskole eller gymnasium' },
    { id: 'parent', name: 'Forælder', icon: '👨‍👩‍👧', description: 'Forælder til barn med særlige behov' },
    { id: 'specialist', name: 'Specialist', icon: '👨‍⚕️', description: 'Pædagog, psykolog eller terapeut' }
  ];

  // Get case content based on role
  const getCaseContent = () => {
    switch (selectedRole) {
      case 'parent':
        return {
          title: '🏠 Søskendejalouxi - Elias, 8 år',
          description: `Du sidder og roser din datter for hendes fine tegning. Pludselig kommer Elias stormende ind, river tegningen i stykker og skriger: "Hun får ALT! Jeg hader hende!" Han skubber til sin lillesøster og løber op på sit værelse. Din datter græder, og du står tilbage og ved ikke hvad du skal gøre.`,
          taskTitle: 'Hvad gør du som forælder?',
          taskDescription: 'Du kender denne situation. Beskriv hvordan du vil håndtere det:',
          points: [
            'Hvad gør du først når det sker?',
            'Hvordan taler du med Elias bagefter?',
            'Hvordan forebygger du det næste gang?',
            'Hvordan hjælper du begge børn?'
          ],
          placeholder: 'Skriv hvordan du ville reagere i denne situation...'
        };
      
      case 'teacher':
        return {
          title: '🎓 Klasseværelse - Oliver, 9 år (ADHD + Autisme)',
          description: `Oliver afbryder konstant andre elever i gruppearbejde, griner på forkerte tidspunkter og forstår ikke sociale signaler. I dag slog han pludselig en pige under gruppearbejdet, fordi han følte sig uretfærdigt behandlet. Klassen er urolig, og du ved dette sker igen og igen.`,
          taskTitle: 'Din undervisningsstrategi:',
          taskDescription: 'Som lærer skal du håndtere både situationen og forebygge fremtidige konflikter:',
          points: [
            'Hvordan strukturerer du gruppearbejde for Oliver?',
            'Hvilke visuelle hjælpemidler bruger du?',
            'Hvordan lærer du ham sociale regler?',
            'Hvordan involverer du klassen positivt?'
          ],
          placeholder: 'Beskriv din pædagogiske tilgang til Oliver...'
        };

      case 'specialist':
        return {
          title: '👩‍⚕️ Klinisk case - Sofia, 14 år (ASF + Angst)',
          description: `Sofia præsenterer masking-adfærd med høj akademisk kompensation. Hun opretholder social facade i skolen, men rapporterer omfattende energiudmattelse hjemme. Forældre beskriver sammenbrud, social isolation og somatiske symptomer (hovedpine, søvnforstyrrelser). Skolepersonale er ikke opmærksom på belastning.`,
          taskTitle: 'Klinisk intervention og koordination:',
          taskDescription: 'Udarbejd evidensbaseret interventionsplan med tværfaglig koordination:',
          points: [
            'Diagnostisk differentiering og komorbiditetsvurdering',
            'Strukturelle miljøtilpasninger (skole/hjem)',
            'Energimanagement og masking-reduktion',
            'Tværfaglig koordination og forældreguidning'
          ],
          placeholder: 'Udarbejd systematisk interventionsplan baseret på trauma-informeret praksis...'
        };

      default:
        return {
          title: 'Case: Støtte til Heidi',
          description: `Heidi er en 8-årig pige med ADHD og let autisme. Hun har svært ved at koncentrere sig i klassen og bliver ofte frustreret når rutiner ændres. Hendes lærer har bemærket at hun klarer sig bedre når hun får visuelle hjælpemidler.`,
          taskTitle: 'Din opgave:',
          taskDescription: 'Beskriv hvordan du vil hjælpe Heidi med at få en bedre skoledag. Tænk på:',
          points: [
            'Struktur og rutiner',
            'Visuelle hjælpemidler', 
            'Pausestrategier',
            'Samarbejde med forældre'
          ],
          placeholder: 'Skriv din løsning her...'
        };
    }
  };

  const startDemo = () => {
    if (!selectedRole) {
      alert('Vælg venligst en rolle først');
      return;
    }
    setDemoStarted(true);
  };

  const generateFeedback = () => {
    if (userSolution.length < 50) {
      alert('Skriv venligst en mere detaljeret løsning (mindst 50 tegn)');
      return;
    }

    // Role-specific feedback
    let feedbackText = '';
    
    switch (selectedRole) {
  case 'parent':
    feedbackText = `Godt arbejde som forælder! 👨‍👩‍👧

✅ Styrker i din tilgang:
- Du tænker på begge børns følelser
- Du forstår at jalouxi er normalt

💡 Forslag til næste gang:
- Giv Elias sin egen tid hver dag (15 min kun jer to)
- Anerkend hans følelser: "Du er vred - det forstår jeg"
- Lav faste regler for søskende: "Vi hjælper hinanden"
- Ros ham for at være en god storebror

📊 Din forældrescore: 8/10

I den fulde CDT-platform får du personlige råd og konkrete redskaber til jeres hverdag.`;
        break;

      case 'teacher':
        feedbackText = `Stærk pædagogisk tilgang! 🎓

✅ Styrker i din undervisning:
- Du tænker strukturelt og forebyggende
- Du inkluderer klassefællesskabet

💡 Pædagogiske udviklingspunkter:
- Brug "sociale historier" til at lære Oliver regler
- Indfør visuelle rollefordelingskort i gruppearbejde
- Lav mikropauser hver 10. minut i social kontakt
- Koordiner med forældre om fælles strategier

📊 Din undervisningsscore: 8/10

I CDT-platformen får du 100+ konkrete undervisningsværktøjer til børn som Oliver.`;
        break;

      case 'specialist':
        feedbackText = `Professionel klinisk tilgang! 👩‍⚕️

✅ Faglige styrker:
- Systematisk differentialdiagnostisk tænkning
- Opmærksomhed på masking og energiudmattelse

💡 Kliniske udviklingsområder:
- Implementer energikurve-monitorering med visuel støtte
- Koordiner trauma-informeret miljøtilpasning i skole
- Etabler strukturerede forældresamtaler om restitution
- Anvend CBT-baserede masking-reduktionsstrategier

📊 Din specialistscore: 9/10

Den fulde CDT-platform indeholder evidensbaserede interventionsprotokol og tværfaglige koordinationsværktøjer.`;
        break;

      default:
        feedbackText = `Godt arbejde! Her er feedback på din løsning:

✅ Styrker:
- Du har fokus på at hjælpe barnet
- Din tilgang virker omsorgsfuld

💡 Forslag til forbedringer:
- Overvej mere specifikke visuelle hjælpemidler
- Tænk på hvordan pauserne kan struktureres bedre
- Husk at involvere forældrene i planen

📊 Score: 7/10`;
    }

    setFeedback(feedbackText);
    setShowFeedback(true);
  };

  const showOptimalSolution = () => {
    setShowOptimal(true);
    setShowFeedback(false);
  };

  const caseContent = getCaseContent();

  // If demo is started, show demo interface
  if (demoStarted) {
    return (
      <div className="min-h-screen bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          {/* Header with timer */}
          <div className="bg-gray-800 rounded-lg p-4 mb-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-emerald-500">CDT Demo - {roles.find(r => r.id === selectedRole)?.name}</h1>
            <div className="text-xl font-mono text-emerald-400">
              ⏱️ {formatTime(timeLeft)}
            </div>
          </div>

          {/* Demo content */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-xl font-bold text-gray-100 mb-4">{caseContent.title}</h2>
            <div className="prose prose-invert max-w-none">
              <div className="bg-emerald-900 bg-opacity-20 border-l-4 border-emerald-500 p-4 mb-6 rounded-r-lg">
                <p className="text-gray-300 mb-0">
                  {caseContent.description}
                </p>
              </div>
              
              <h3 className="text-lg font-semibold text-emerald-400 mt-6 mb-3">{caseContent.taskTitle}</h3>
              <p className="text-gray-300 mb-4">
                {caseContent.taskDescription}
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                {caseContent.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <textarea
                value={userSolution}
                onChange={(e) => setUserSolution(e.target.value)}
                className="w-full h-40 p-4 bg-gray-700 text-gray-100 rounded-lg border border-gray-600 
                         focus:border-emerald-500 focus:outline-none resize-none"
                placeholder={caseContent.placeholder}
              />

              <div className="flex gap-4 mt-6">
                <button 
                  onClick={generateFeedback}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg 
                           font-semibold transition-colors">
                  Få AI Feedback
                </button>
                <button 
                  onClick={showOptimalSolution}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg 
                           font-semibold transition-colors">
                  Se Optimal Løsning
                </button>
              </div>

              {/* Show feedback */}
              {showFeedback && (
                <div className="mt-6 p-6 bg-gray-700 rounded-lg border border-emerald-500">
                  <h3 className="text-lg font-semibold text-emerald-400 mb-3">AI Feedback:</h3>
                  <div className="text-gray-300 whitespace-pre-line">
                    {feedback}
                  </div>
                  <button 
                    onClick={() => setShowFeedback(false)}
                    className="mt-4 text-sm text-gray-400 hover:text-gray-300 underline"
                  >
                    Luk feedback
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* End demo */}
          <div className="mt-8 text-center">
            <Link href="/" className="text-gray-400 hover:text-gray-300 underline">
              Afslut demo og vend tilbage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Role selection interface (only shown if no role in URL)
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-500 mb-4">
            Velkommen til CDT Demo
          </h1>
          <p className="text-xl text-gray-300">
            Demo ID: {params.id}
          </p>
          <p className="text-gray-400 mt-2">
            Du har 30 minutter til at udforske platformen
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-100 mb-6 text-center">
            Vælg din rolle for at starte
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`p-6 rounded-lg border-2 transition-all ${
                  selectedRole === role.id
                    ? 'border-emerald-500 bg-emerald-500/10'
                    : 'border-gray-600 hover:border-gray-500 bg-gray-700/50'
                }`}
              >
                <div className="text-4xl mb-3">{role.icon}</div>
                <h3 className="font-semibold text-lg text-gray-100 mb-2">{role.name}</h3>
                <p className="text-sm text-gray-400">{role.description}</p>
              </button>
            ))}
          </div>

          <button
            onClick={startDemo}
            disabled={!selectedRole}
            className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
              selectedRole
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            Start Demo {selectedRole && '→'}
          </button>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-gray-400 hover:text-gray-300 underline">
            Tilbage til forsiden
          </Link>
        </div>
      </div>
    </div>
  );
}