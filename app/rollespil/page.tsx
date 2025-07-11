'use client';

import { useState, useEffect, Suspense } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function RollespilPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState('intro');
  const [selectedChoice, setSelectedChoice] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [showOptimal, setShowOptimal] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState('');

  // Check if it's parent roleplay
  const roleplayType = searchParams.get('type');
  
  useEffect(() => {
    if (roleplayType !== 'parent' && roleplayType !== 'teacher' && roleplayType !== 'professional') {
      router.push('/');
    }
  }, [roleplayType, router]);

  const choices = [
    {
      id: 'hard',
      text: '"Du skal stoppe NU!"',
      description: 'Bestemt og kontrollerende tilgang',
      childPerspective: 'Jeg føler mig angrebet og misforstået. Jeg var SÅ tæt på at vinde! Nu bliver jeg endnu mere frustreret og vil ikke høre på mor/far.',
      consequence: 'Barnet eskalerer meltdown og lukker helt i. Tillidsforholdet bliver skadet.',
      feedback: 'Din frustation er forståelig, men den hårde tilgang kan forværre situationen. Børn med ADHD/autisme har svært ved pludselige stop og har brug for hjælp til overgange.'
    },
    {
      id: 'negotiate',
      text: '"Skal vi ikke lige..."',
      description: 'Forsøg på forhandling',
      childPerspective: 'Nu bliver jeg forvirret. Vi havde en aftale om 45 minutter, men nu vil mor/far forhandle? Betyder det at aftaler kan ændres når som helst?',
      consequence: 'Barnet lærer at aftaler kan brydes og vil teste grænser næste gang.',
      feedback: 'Forhandling i krisen sender blandede signaler. Det er bedre at holde aftalen, men hjælpe med overgangen på en struktureret måde.'
    },
    {
      id: 'empathy',
      text: '"Jeg kan se du er ked af det..."',
      description: 'Anerkendelse af følelser',
      childPerspective: 'Det føles godt at mor/far forstår at jeg har det svært. Men jeg ved stadig ikke hvordan jeg skal stoppe spillet. Jeg er stadig frustreret.',
      consequence: 'Bedre følelsesmæssig forbindelse, men mangler struktur til at løse problemet.',
      feedback: 'Godt at du anerkender følelserne! Det skaber forbindelse. Nu mangler du bare en konkret plan for at hjælpe barnet gennem overgangen.'
    },
    {
      id: 'structured',
      text: '"Vi laver en plan sammen..."',
      description: 'Struktureret problemløsning',
      childPerspective: 'Mor/far hjælper mig med at finde en måde at stoppe på. Jeg får tid til at gemme spillet og forberede mig på det næste. Det føles mere sikkert.',
      consequence: 'Barnet lærer coping-strategier og får hjælp til fremtidige overgange.',
      feedback: 'Perfekt tilgang! Du kombinerer empati med struktur og lærer barnet værktøjer til selv at håndtere overgange.'
    }
  ];

  const bedtimeChoices = [
  {
    id: 'strict',
    text: '"Du SKAL i seng nu!"',
    description: 'Bestemt og ultimativ tilgang',
    childPerspective: 'Mor/far lyder sur og jeg bliver bange. Jeg føler mig presset og bliver endnu mere vågen. Jeg vil ikke skuffe, men jeg kan simpelthen ikke falde til ro.',
    consequence: 'Barnet bliver mere stresset og vågen. Kan tage timer før hun falder i søvn.',
    feedback: 'Stress og pres gør det sværere for børn med ADHD at falde til ro. Deres nervesystem skal berolige sig før søvn er mulig.'
  },
  {
    id: 'give_up',
    text: '"Okay, bare 10 minutter mere..."',
    description: 'Giver efter for undgå konflikt',
    childPerspective: 'Yes! Jeg vandt igen. Sengetid er bare et forslag, ikke en rigtig regel. Jeg bliver mere vågen fordi jeg ved mor/far ikke mener det alvorligt.',
    consequence: 'Barnet lærer at regler kan forhandles og vil teste grænser hver aften.',
    feedback: 'At give efter signalerer usikkerhed. Børn med ADHD har særligt brug for forudsigelige rammer for at føle sig trygge.'
  },
  {
    id: 'supportive',
    text: '"Jeg hjælper dig med at falde til ro"',
    description: 'Omsorg og støtte',
    childPerspective: 'Det føles rart at mor/far vil hjælpe mig. Men jeg ved stadig ikke præcis hvad der skal ske eller hvor længe det tager. Jeg er stadig urolig.',
    consequence: 'Bedre følelsesmæssig kontakt, men mangler struktur til at løse problemet effektivt.',
    feedback: 'Fin empati! Nu skal du også give konkrete værktøjer og struktur så barnet ved hvad der forventes.'
  },
  {
    id: 'structured_bedtime',
    text: '"Vi følger vores aftale om sengerutine"',
    description: 'Struktureret og rolig tilgang',
    childPerspective: 'Okay, mor/far hjælper mig huske hvad vi skal. Først tænder, så pyjamas, så læsning. Jeg ved hvad der kommer og det føles trygt.',
    consequence: 'Barnet følger rutinen og lærer selvstændighed. Søvn kommer lettere.',
    feedback: 'Perfekt! Du kombinerer struktur med ro og giver barnet forudsigelig ramme til at lykkes med sengetid.'
  }
];

const optimalSolution = {
  title: 'Den optimale tilgang',
  steps: [
    '1. Anerkend følelserne: "Jeg kan se du er rigtig ked af at skulle stoppe"',
    '2. Gentag aftalen roligt: "Vi aftalte 45 minutter, og nu er tiden gået"',
    '3. Hjælp med struktur: "Lad os sammen finde et godt sted at gemme dit spil"',
    '4. Giv kontrol: "Vil du gemme selv, eller skal jeg hjælpe?"',
    '5. Plan næste gang: "I morgen kan du spille igen efter lektier"'
  ],
  explanation: 'Denne tilgang kombinerer empati, konsistens og struktur. Du anerkender barnets følelser uden at give efter, og du giver konkrete værktøjer til at håndtere overgangen.'
};

const bedtimeOptimalSolution = {
  title: 'Den optimale sengerutine',
  steps: [
    '1. Rolig påmindelse: "Om 10 minutter starter sengerutinen"',
    '2. Følg samme rækkefølge hver dag: tænder → pyjamas → toilet → læsning',
    '3. Gør det til teamwork: "Skal vi børste tænder sammen?"',
    '4. Brug timer: "5 minutters læsning, så slukker vi lyset"',
    '5. Beroligende afslutning: "Jeg tjekker dig om 10 minutter"',
    '6. Hvis hun kalder: Kort besøg uden lang snak'
  ],
  explanation: 'Struktur og forudsigelige rutiner hjælper ADHD-hjernen med at slappe af. Ved at følge samme mønster hver dag, ved barnet hvad der kommer næst og kan forberede sig mentalt.'
};

// Lærer scenarier
const teacherChoices = [
  {
    id: 'authoritative',
    text: '"Marcus, sæt dig ned NU!"',
    description: 'Bestemt og kontrollerende',
    childPerspective: 'Alle kigger på mig. Jeg føler mig pinlig berørt og bliver endnu mere urolig. Jeg vil gemme mig, men kan ikke styre min krop.',
    consequence: 'Marcus bliver mere urolig og klassen bliver distraheret. Læringsmiljøet lider.',
    feedback: 'Høj autoritet kan forværre ADHD-symptomer. Marcus har brug for hjælp til selvregulering, ikke offentlig irettesættelse.'
  },
  {
    id: 'ignore',
    text: 'Ignorerer og fortsætter undervisning',
    description: 'Håber problemet går væk',
    childPerspective: 'Jeg prøver at få hjælp, men læreren ser mig ikke. Jeg bliver mere frustreret og urolig. Måske skal jeg være endnu mere højlydt?',
    consequence: 'Marcus eskalerer adfærden for at få opmærksomhed. Andre elever kopierer adfærden.',
    feedback: 'At ignorere signaler om hjælp virker ikke med ADHD-børn. De har brug for proaktiv støtte.'
  },
  {
    id: 'public_help',
    text: '"Marcus, hvad har du brug for hjælp til?"',
    description: 'Offentlig opmærksomhed på problemet',
    childPerspective: 'Det er rart at lærer vil hjælpe, men nu kigger alle på mig igen. Jeg ved ikke hvordan jeg skal forklare hvad der er galt.',
    consequence: 'Bedre intention, men Marcus føler sig stadig udstillet foran klassen.',
    feedback: 'God vilje, men ADHD-børn har brug for diskret støtte uden at blive centrum for opmærksomhed.'
  },
  {
    id: 'discrete_support',
    text: 'Går diskret hen og giver stille signal',
    description: 'Diskret og struktureret støtte',
    childPerspective: 'Lærer kommer hen og hjælper mig uden drama. Jeg får den støtte jeg har brug for uden at føle mig pinlig. Det hjælper mig med at falde til ro.',
    consequence: 'Marcus får den nødvendige støtte og kan koncentrere sig. Klassen fortsætter uforstyrret.',
    feedback: 'Perfekt! Diskret støtte bevarer Marcus\' værdighed og giver ham de værktøjer han har brug for.'
  }
];

const teacherOptimalSolution = {
  title: 'Den optimale lærer-tilgang',
  steps: [
    '1. Diskret tilgang: Gå hen til Marcus uden at gøre opmærksom',
    '2. Nonverbal signal: Brug aftalt håndtegn eller kort besked',
    '3. Tilbyd værktøjer: "Vil du bruge dit fidget-toy eller tage en pause?"',
    '4. Alternativ aktivitet: "Du kan hjælpe mig med at dele papirer ud"',
    '5. Følg op: Tjek ind med Marcus efter klassen',
    '6. Forebyggelse: Lav klare strukturer og pauser'
  ],
  explanation: 'ADHD-børn har brug for diskret støtte der bevarer deres værdighed. Ved at have klare strategier og værktøjer kan læreren hjælpe uden at forstyrre undervisningen.'
};// Fagperson scenarier
const professionalChoices = [
  {
    id: 'forceful',
    text: '"Du skal sidde stille nu!"',
    description: 'Bestemt og kontrollerende',
    childPerspective: 'Jeg bliver endnu mere bange. Frisøren lyder sur og nu er jeg sikker på at noget slemt vil ske. Jeg vil løbe væk.',
    consequence: 'Emma får panik og nægter at samarbejde. Hårklippen bliver umulig.',
    feedback: 'Tvang forværrer angst hos autistiske børn. De har brug for tid og tryghed til at føle sig sikre.'
  },
  {
    id: 'ignore_fear',
    text: 'Ignorerer frygten og begynder at klippe',
    description: 'Professionel men ikke empatisk',
    childPerspective: 'Frisøren forstår ikke hvor bange jeg er. Nu sker det jeg var mest bange for - jeg har ingen kontrol og føler mig fanget.',
    consequence: 'Emma får traumatisk oplevelse og vil ikke komme til frisør igen.',
    feedback: 'At ignorere barnets følelser skaber traumer. Børn med autisme skal føle sig hørt og forstået.'
  },
  {
    id: 'sympathy',
    text: '"Åh, stakkels lille pige..."',
    description: 'Medlidenhed og beklagelse',
    childPerspective: 'Nu synes frisøren synd for mig, men det hjælper ikke. Jeg føler mig mærkelig og anderledes. Jeg ved stadig ikke hvad der skal ske.',
    consequence: 'Emma føler sig stigmatiseret men får ikke den hjælp hun har brug for.',
    feedback: 'Medlidenhed hjælper ikke. Børn har brug for praktisk støtte og konkrete løsninger.'
  },
  {
    id: 'collaborative',
    text: '"Skal vi finde ud af hvordan vi gør det trygt?"',
    description: 'Samarbejdende og problemløsende',
    childPerspective: 'Frisøren vil hjælpe mig og lytter til hvad jeg har brug for. Vi kan lave en plan sammen så jeg føler mig tryg.',
    consequence: 'Emma får positive oplevelse og lærer at frisør kan være trygt.',
    feedback: 'Perfekt! At involvere barnet i løsningen giver kontrol og tryghed.'
  }
];

const professionalOptimalSolution = {
  title: 'Den optimale fagperson-tilgang',
  steps: [
    '1. Anerkend frygten: "Jeg kan se du er nervøs - det er helt okay"',
    '2. Giv kontrol: "Vil du se redskaberne først?"',
    '3. Forklar processen: "Først vasker vi, så tørrer vi, så klipper vi lidt"',
    '4. Lav pauser: "Vi stopper når du har brug for det"',
    '5. Brug børnets interesser: "Kan du hjælpe mig tælle?"',
    '6. Giv valg: "Vil du holde min hånd eller teddy?"'
  ],
  explanation: 'Børn med autisme har brug for forudsigelse og kontrol. Ved at inddrage dem i processen og respektere deres grænser, skaber vi positive oplevelser.'
};

const currentOptimal = roleplayType === 'parent' 
  ? (selectedScenario === 'screen_time' ? optimalSolution : bedtimeOptimalSolution)
  : roleplayType === 'teacher' 
    ? teacherOptimalSolution
    : professionalOptimalSolution;
    
  const startRoleplay = () => {
    setCurrentStep('scenarioSelect');
  };

  const startScenario = (scenarioId: string) => {
    setSelectedScenario(scenarioId);
    setCurrentStep('scenario');
  };

  const makeChoice = (choiceId: string) => {
    setSelectedChoice(choiceId);
    setCurrentStep('childPerspective');
  };

  const showFeedbackStep = () => {
    setShowFeedback(true);
    setCurrentStep('feedback');
  };

  const showOptimalStep = () => {
    setShowOptimal(true);
    setShowFeedback(false);
    setCurrentStep('optimal');
  };

  const resetRoleplay = () => {
    setCurrentStep('intro');
    setSelectedChoice('');
    setShowFeedback(false);
    setShowOptimal(false);
  };

  // Intro step
  if (currentStep === 'intro') {
    return (
      <div className="min-h-screen bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-emerald-500 mb-4">
                  🎭 {roleplayType === 'parent' ? 'Forælder' : roleplayType === 'teacher' ? 'Lærer' : 'Fagperson'} Rollespil
                </h1>
                <p className="text-xl text-gray-300">
                  {roleplayType === 'parent' ? 'Hjemme situationer' : roleplayType === 'teacher' ? 'Klasseværelse udfordringer' : 'Professionelle situationer'}
                </p>
              </div>

              <div className="bg-gray-700 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-emerald-400 mb-4">Dit scenario:</h2>
                <div className="space-y-3 text-gray-300">
                  {roleplayType === 'parent' ? (
                    <>
                      <p>• Din 10-årige søn har ADHD og let autisme</p>
                      <p>• I aftalte 45 minutters skærmtid efter skole</p>
                      <p>• Timeren ringer - han skal stoppe nu</p>
                      <p>• Han er midt i et vigtigt spil og får meltdown</p>
                      <p>• Han skriger og kaster ting der er tæt på</p>
                    </>
                  ) : roleplayType === 'teacher' ? (
                    <>
                      <p>• Marcus er en 9-årig elev med ADHD</p>
                      <p>• I er midt i en matematik-time</p>
                      <p>• Marcus har svært ved at sidde stille</p>
                      <p>• Han forstyrrer andre elever og undervisningen</p>
                      <p>• Du skal håndtere situationen uden at skade hans selvværd</p>
                    </>
                  ) : (
                    <>
                      <p>• Emma er en 7-årig pige med autisme</p>
                      <p>• Hun skal have klippet hår hos frisøren</p>
                      <p>• Hun er bange for lyde og berøring</p>
                      <p>• Hun begynder at græde når hun ser saksen</p>
                      <p>• Du skal hjælpe hende gennem oplevelsen</p>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500 rounded-lg p-4 mb-8">
                <h3 className="text-yellow-400 font-semibold mb-2">💡 Sådan fungerer det:</h3>
                <ol className="list-decimal list-inside text-gray-300 space-y-1">
                  <li>Du vælger din reaktion som {roleplayType === 'parent' ? 'forælder' : roleplayType === 'teacher' ? 'lærer' : 'fagperson'}</li>
                  <li>Du ser situationen fra barnets perspektiv</li>
                  <li>Du får AI-feedback på dit valg</li>
                  <li>Du lærer den optimale løsning</li>
                </ol>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {roleplayType === 'parent' ? (
                  <>
                    <button onClick={() => startScenario('screen_time')} className="bg-gray-700 hover:bg-gray-600 rounded-lg p-6 text-left border-2 border-transparent hover:border-emerald-500 transition-all">
                      <h3 className="text-emerald-400 font-bold mb-2">🖥️ Skærm-tid Meltdown</h3>
                      <p className="text-gray-300">Timer ringer, barnet eksploderer</p>
                    </button>
                    
                    <button onClick={() => startScenario('bedtime')} className="bg-gray-700 hover:bg-gray-600 rounded-lg p-6 text-left border-2 border-transparent hover:border-emerald-500 transition-all">
                      <h3 className="text-emerald-400 font-bold mb-2">🌙 Sengetid Kaos</h3>
                      <p className="text-gray-300">Alt går galt ved sengetid</p>
                    </button>
                  </>
                ) : roleplayType === 'teacher' ? (
                  <>
                    <button onClick={() => startScenario('classroom_disruption')} className="bg-gray-700 hover:bg-gray-600 rounded-lg p-6 text-left border-2 border-transparent hover:border-emerald-500 transition-all">
                      <h3 className="text-emerald-400 font-bold mb-2">🏫 Klasseværelse Uro</h3>
                      <p className="text-gray-300">Marcus forstyrrer undervisningen</p>
                    </button>
                    
                    <button onClick={() => startScenario('homework_struggle')} className="bg-gray-700 hover:bg-gray-600 rounded-lg p-6 text-left border-2 border-transparent hover:border-emerald-500 transition-all">
                      <h3 className="text-emerald-400 font-bold mb-2">📚 Lektie Kamp</h3>
                      <p className="text-gray-300">Eleven kan ikke koncentrere sig</p>
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => startScenario('haircut_fear')} className="bg-gray-700 hover:bg-gray-600 rounded-lg p-6 text-left border-2 border-transparent hover:border-emerald-500 transition-all">
                      <h3 className="text-emerald-400 font-bold mb-2">✂️ Frisør Frygt</h3>
                      <p className="text-gray-300">Emma er bange for at få klippet hår</p>
                    </button>
                    
                    <button onClick={() => startScenario('dentist_panic')} className="bg-gray-700 hover:bg-gray-600 rounded-lg p-6 text-left border-2 border-transparent hover:border-emerald-500 transition-all">
                      <h3 className="text-emerald-400 font-bold mb-2">🦷 Tandlæge Panik</h3>
                      <p className="text-gray-300">Barnet får panik ved tandlægen</p>
                    </button>
                  </>
                )}
              </div>

              <div className="text-center mt-6">
                <Link href="/" className="text-gray-400 hover:text-gray-300 underline">
                  Tilbage til forsiden
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Scenario step
  if (currentStep === 'scenario') {
    return (
      <div className="min-h-screen bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-8">
              <h1 className="text-2xl font-bold text-emerald-500 mb-6 text-center">
                Situationen eskalerer...
              </h1>

              <div className="bg-red-500/10 border border-red-500 rounded-lg p-6 mb-8">
                <h2 className="text-red-400 font-bold mb-4">🚨 Det sker lige nu:</h2>
                <div className="text-gray-300 space-y-2">
                  {selectedScenario === 'screen_time' ? (
                    <>
                      <p>"NEEEJ! Jeg skal lige færdiggøre det her level!"</p>
                      <p className="italic">*kaster controlleren i gulvet*</p>
                      <p>"Det er ikke fair! Jeg var næsten færdig!"</p>
                      <p className="italic">*begynder at græde og skubbe til bordet*</p>
                    </>
                  ) : selectedScenario === 'bedtime' ? (
                    <>
                      <p>"Jeg gider ikke børste tænder! Det smager forfærdeligt!"</p>
                      <p className="italic">*kaster tandborsten og løber væk*</p>
                      <p>"Hvor er min lyserøde pyjamas? Den her er forkert!"</p>
                      <p className="italic">*begynder at græde*</p>
                      <p>"Jeg kan ikke sove! Tænk hvis der kommer tyve?"</p>
                    </>
                  ) : selectedScenario === 'classroom_disruption' ? (
                    <>
                      <p>"Jeg kan ikke sidde stille! Det er kedeligt!"</p>
                      <p className="italic">*vipper på stolen og taber blyanten*</p>
                      <p>"Hvornår er der pause? Jeg gider ikke høre mere!"</p>
                      <p className="italic">*begynder at summe og distrahere andre*</p>
                      <p>"Kan vi ikke lave noget sjovere?"</p>
                    </>
                  ) : (
                    <>
                      <p>"Jeg forstår det ikke! Det er for svært!"</p>
                      <p className="italic">*skubber bogen væk og krydser armene*</p>
                      <p>"Alle andre er færdige og jeg er bagefter igen!"</p>
                      <p className="italic">*begynder at blive ked af det*</p>
                      <p>"Jeg er bare dum til det her!"</p>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg p-6 mb-8">
                <h3 className="text-emerald-400 font-semibold mb-3">Du som {roleplayType === 'parent' ? 'forælder' : 'lærer'} tænker:</h3>
                <div className="text-gray-300 space-y-2">
                  {selectedScenario === 'screen_time' ? (
                    <>
                      <p>"Vi aftalte 45 minutter - aftaler skal overholdes!"</p>
                      <p>"Naboerne kan høre det hele..."</p>
                      <p>"Jeg er træt efter en lange dag på arbejde"</p>
                      <p>"Det her sker alt for tit!"</p>
                    </>
                  ) : selectedScenario === 'bedtime' ? (
                    <>
                      <p>"Vi bliver forsinket IGEN..."</p>
                      <p>"Hun skal op i morgen tidlig"</p>
                      <p>"Jeg er selv træt og har brug for ro"</p>
                      <p>"Naboerne kan høre hende råbe"</p>
                      <p>"Det her sker hver eneste aften!"</p>
                    </>
                  ) : selectedScenario === 'classroom_disruption' ? (
                    <>
                      <p>"Jeg har 25 andre elever der skal lære noget"</p>
                      <p>"Marcus forstyrrer hele tiden"</p>
                      <p>"Forældrene klager over læringsmiljøet"</p>
                      <p>"Jeg ved ikke hvad jeg skal gøre"</p>
                      <p>"Det her kan ikke fortsætte sådan!"</p>
                    </>
                  ) : (
                    <>
                      <p>"Marcus bliver mere og mere bagefter"</p>
                      <p>"Hans selvtillid daler for hver dag"</p>
                      <p>"Forældrene forventer at han følger med"</p>
                      <p>"Jeg har ikke tid til individuel hjælp"</p>
                      <p>"Hvad gør jeg galt?"</p>
                    </>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-emerald-500 mb-4">
                Hvordan reagerer du?
              </h3>

              <div className="grid gap-4">
                {(roleplayType === 'parent' 
                  ? (selectedScenario === 'screen_time' ? choices : bedtimeChoices)
                  : roleplayType === 'teacher'
                    ? teacherChoices
                    : professionalChoices
                ).map((choice) => (
                  <button
                    key={choice.id}
                    onClick={() => makeChoice(choice.id)}
                    className="text-left bg-gray-700 hover:bg-gray-600 rounded-lg p-4 
                             border-2 border-transparent hover:border-emerald-500 transition-all"
                  >
                    <div className="font-semibold text-emerald-400 mb-1">
                      {choice.text}
                    </div>
                    <div className="text-sm text-gray-400">
                      {choice.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

    // Child perspective step
  if (currentStep === 'childPerspective') {
    const currentChoices = roleplayType === 'parent' 
      ? (selectedScenario === 'screen_time' ? choices : bedtimeChoices)
      : roleplayType === 'teacher'
        ? teacherChoices
        : professionalChoices;
    const choice = currentChoices.find(c => c.id === selectedChoice);
    if (!choice) return null;
    
    return (
      <div className="min-h-screen bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-8">
              <h1 className="text-2xl font-bold text-emerald-500 mb-6 text-center">
                Fra barnets perspektiv...
              </h1>

              <div className="bg-gray-700 rounded-lg p-6 mb-6">
                <h2 className="text-emerald-400 font-semibold mb-3">Du sagde:</h2>
                <p className="text-xl text-gray-300 italic">
                  {choice.text}
                </p>
              </div>

              <div className="bg-blue-500/10 border border-blue-500 rounded-lg p-6 mb-6">
                <h2 className="text-blue-400 font-bold mb-3">💭 Hvad barnet tænker og føler:</h2>
                <p className="text-gray-300">
                  {choice.childPerspective}
                </p>
              </div>

              <div className="bg-orange-500/10 border border-orange-500 rounded-lg p-6 mb-8">
                <h2 className="text-orange-400 font-bold mb-3">⚡ Konsekvens:</h2>
                <p className="text-gray-300">
                  {choice.consequence}
                </p>
              </div>

              <button 
                onClick={showFeedbackStep}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg 
                         text-lg font-semibold transition-colors mb-4"
              >
                Få AI Feedback →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Feedback step
  if (currentStep === 'feedback' && showFeedback) {
    const currentChoices = roleplayType === 'parent' 
      ? (selectedScenario === 'screen_time' ? choices : bedtimeChoices)
      : roleplayType === 'teacher'
        ? teacherChoices
        : professionalChoices;
    const choice = currentChoices.find(c => c.id === selectedChoice);
    if (!choice) return null;
    
    return (
      <div className="min-h-screen bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-8">
              <h1 className="text-2xl font-bold text-emerald-500 mb-6 text-center">
                AI Feedback
              </h1>

              <div className="bg-purple-500/10 border border-purple-500 rounded-lg p-6 mb-8">
                <h2 className="text-purple-400 font-bold mb-3">🤖 Din personlige coach siger:</h2>
                <p className="text-gray-300 mb-4">
                  {choice.feedback}
                </p>
                
                <div className="bg-gray-700 rounded p-4">
                  <h3 className="text-emerald-400 font-semibold mb-2">💡 Husk:</h3>
                  <p className="text-gray-300 text-sm">
                    Børn med ADHD/autisme har et anderledes nervesystem. De kan ikke "bare stoppe" 
                    på samme måde som neurotypiske børn. De har brug for struktur og hjælp til overgange.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={showOptimalStep}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg 
                           font-semibold transition-colors"
                >
                  Se Optimal Løsning
                </button>
                <button 
                  onClick={resetRoleplay}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg 
                           font-semibold transition-colors"
                >
                  Prøv Igen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Optimal solution step
  if (currentStep === 'optimal' && showOptimal) {
    return (
      <div className="min-h-screen bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-8">
              <h1 className="text-2xl font-bold text-emerald-500 mb-6 text-center">
                ⭐ Den Optimale Løsning
              </h1>

              <div className="bg-emerald-500/10 border border-emerald-500 rounded-lg p-6 mb-6">
                <h2 className="text-emerald-400 font-bold mb-4">{currentOptimal.title}</h2>
                <div className="space-y-3">
                  {currentOptimal.steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-300">{step.replace(/^\d+\.\s*/, '')}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg p-6 mb-8">
                <h3 className="text-emerald-400 font-semibold mb-3">🧠 Hvorfor virker det?</h3>
                <p className="text-gray-300">
                  {currentOptimal.explanation}
                </p>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={resetRoleplay}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg 
                           font-semibold transition-colors"
                >
                  Øv Igen Med Ny Viden
                </button>
                <Link 
                  href="/"
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg 
                           font-semibold transition-colors text-center"
                >
                  Tilbage til Forsiden
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
export default function RollespilPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RollespilPageContent />
    </Suspense>
  );
}