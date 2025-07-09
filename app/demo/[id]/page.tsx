'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DemoPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState('');
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [demoStarted, setDemoStarted] = useState(false);
  const [userSolution, setUserSolution] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');

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

  // Formater tid
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

    // Simuleret AI feedback
    const feedbackText = `Godt arbejde! Her er feedback på din løsning:

✅ Styrker:
- Du har fokus på at hjælpe Heidi
- Din tilgang virker omsorgsfuld

💡 Forslag til forbedringer:
- Overvej at inkludere mere specifikke visuelle hjælpemidler
- Tænk på hvordan pauserne kan struktureres bedre
- Husk at involvere forældrene i planen

📊 Score: 7/10

Dette er en demo-version. I den fulde version får du personlig AI-feedback baseret på din specifikke løsning.`;

    setFeedback(feedbackText);
    setShowFeedback(true);
  };

  // Hvis demo er startet, vis demo interface
  if (demoStarted) {
    return (
      <div className="min-h-screen bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          {/* Header med timer */}
          <div className="bg-gray-800 rounded-lg p-4 mb-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-emerald-500">CDT Demo - {roles.find(r => r.id === selectedRole)?.name}</h1>
            <div className="text-xl font-mono text-emerald-400">
              ⏱️ {formatTime(timeLeft)}
            </div>
          </div>

          {/* Demo indhold */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-xl font-bold text-gray-100 mb-4">Case: Støtte til Heidi</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                Heidi er en 8-årig pige med ADHD og let autisme. Hun har svært ved at koncentrere sig i klassen 
                og bliver ofte frustreret når rutiner ændres. Hendes lærer har bemærket at hun klarer sig bedre 
                når hun får visuelle hjælpemidler.
              </p>
              
              <h3 className="text-lg font-semibold text-emerald-400 mt-6 mb-3">Din opgave:</h3>
              <p className="text-gray-300 mb-4">
                Beskriv hvordan du vil hjælpe Heidi med at få en bedre skoledag. Tænk på:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Struktur og rutiner</li>
                <li>Visuelle hjælpemidler</li>
                <li>Pausestrategier</li>
                <li>Samarbejde med forældre</li>
              </ul>

              <textarea
                value={userSolution}
                onChange={(e) => setUserSolution(e.target.value)}
                className="w-full h-40 p-4 bg-gray-700 text-gray-100 rounded-lg border border-gray-600 
                         focus:border-emerald-500 focus:outline-none resize-none"
                placeholder="Skriv din løsning her..."
              />

              <div className="flex gap-4 mt-6">
                <button 
                  onClick={generateFeedback}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg 
                           font-semibold transition-colors">
                  Få AI Feedback
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg 
                                 font-semibold transition-colors">
                  Se Optimal Løsning
                </button>
              </div>

              {/* Vis feedback */}
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

          {/* Afslut demo */}
          <div className="mt-8 text-center">
            <Link href="/" className="text-gray-400 hover:text-gray-300 underline">
              Afslut demo og vend tilbage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Rolle-valg interface
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