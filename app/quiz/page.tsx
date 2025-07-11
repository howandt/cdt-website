'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function QuizPage() {
  const [currentQuiz, setCurrentQuiz] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState(0);

  const quizzes = [
    {
      id: 'adhd_basics',
      title: 'ADHD Grundviden',
      description: 'Test din forståelse af ADHD',
      questions: [
        {
          question: 'Hvad er det vigtigste at huske ved overgange for børn med ADHD?',
          options: [
            'De skal bare lære at tilpasse sig',
            'Overgange skal ske hurtigt for at undgå drama',
            'De har brug for forberedelse og struktur',
            'Det er ikke anderledes end for andre børn'
          ],
          correct: 2,
          feedback: {
            correct: 'Rigtigt! Børn med ADHD har svært ved at skifte fokus og har brug for forberedelse til overgange.',
            wrong: 'Børn med ADHD har et anderledes nervesystem og har brug for ekstra støtte ved overgange.'
          }
        },
        {
          question: 'Hvad er den bedste måde at give feedback til et barn med ADHD?',
          options: [
            'Vent til slutningen af dagen og giv al feedback på én gang',
            'Giv øjeblikkelig, konkret og positiv feedback',
            'Fokuser kun på det der går galt',
            'Skriv feedback ned så barnet kan læse det senere'
          ],
          correct: 1,
          feedback: {
            correct: 'Præcis! ADHD-børn har brug for øjeblikkelig feedback for at kunne lære og tilpasse adfærd.',
            wrong: 'Børn med ADHD har svært ved at forbinde feedback med handlinger hvis der går for lang tid.'
          }
        }
      ]
    },
    {
      id: 'autism_communication',
      title: 'Autisme & Kommunikation',
      description: 'Lær om kommunikation med autistiske børn',
      questions: [
        {
          question: 'Hvorfor kan autistiske børn have svært ved øjenkontakt?',
          options: [
            'De er generte eller uhøflige',
            'Det kan være overvældende sensorisk',
            'De er ikke interesserede i andre mennesker',
            'Det er bare en dårlig vane'
          ],
          correct: 1,
          feedback: {
            correct: 'Korrekt! For mange autistiske børn kan øjenkontakt være sensorisk overvældende.',
            wrong: 'Manglende øjenkontakt hos autistiske børn handler ofte om sensoriske udfordringer, ikke social interesse.'
          }
        }
      ]
    }
  ];

  const startQuiz = (quizId: string) => {
    setCurrentQuiz(quizId);
    setCurrentQuestion(0);
    setScore(0);
    setQuizStarted(true);
    setShowFeedback(false);
  };

  const selectAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const submitAnswer = () => {
    const quiz = quizzes.find(q => q.id === currentQuiz);
if (!quiz) return null; // Safety check
const question = quiz.questions[currentQuestion];
    
    if (selectedAnswer === question.correct) {
      setScore(score + 1);
    }
    
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    const quiz = quizzes.find(q => q.id === currentQuiz);
if (!quiz) return null; // Safety check
const question = quiz.questions[currentQuestion];
    
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      // Quiz færdig
      setQuizStarted(false);
      alert(`Quiz færdig! Du fik ${score + (selectedAnswer === quiz.questions[currentQuestion].correct ? 1 : 0)} ud af ${quiz.questions.length} rigtige!`);
    }
  };

  // Quiz selection
  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-emerald-500 mb-4">
                🧠 Quiz Center
              </h1>
              <p className="text-xl text-gray-300">
                Test din viden og lær af dine svar
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {quizzes.map((quiz) => (
                <div key={quiz.id} className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-emerald-400 mb-3">
                    {quiz.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {quiz.description}
                  </p>
                  <p className="text-sm text-gray-400 mb-6">
                    {quiz.questions.length} spørgsmål
                  </p>
                  <button 
                    onClick={() => startQuiz(quiz.id)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Start Quiz
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/" className="text-gray-400 hover:text-gray-300 underline">
                Tilbage til forsiden
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz interface
  const quiz = quizzes.find(q => q.id === currentQuiz);
if (!quiz) return null; // Safety check
const question = quiz.questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-emerald-500">
                {quiz.title}
              </h1>
              <div className="text-emerald-400">
                Spørgsmål {currentQuestion + 1} af {quiz.questions.length}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-100 mb-6">
                {question.question}
              </h2>

              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => selectAnswer(index)}
                    disabled={showFeedback}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selectedAnswer === index
                        ? 'border-emerald-500 bg-emerald-500/10'
                        : 'border-gray-600 hover:border-gray-500 bg-gray-700'
                    } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <span className="text-gray-100">{option}</span>
                  </button>
                ))}
              </div>
            </div>

            {!showFeedback ? (
              <button 
                onClick={submitAnswer}
disabled={selectedAnswer === null}
className={`w-full py-3 rounded-lg font-semibold ${
  selectedAnswer === null
    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
    : 'bg-emerald-600 hover:bg-emerald-700 text-white'
}`}
              >
                Svar
              </button>
            ) : (
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${
                  selectedAnswer === question.correct 
                    ? 'bg-green-500/10 border border-green-500' 
                    : 'bg-red-500/10 border border-red-500'
                }`}>
                  <div className="font-semibold mb-2">
                    {selectedAnswer === question.correct ? '✅ Korrekt!' : '❌ Forkert'}
                  </div>
                  <div className="text-gray-300">
                    {selectedAnswer === question.correct 
                      ? question.feedback.correct 
                      : question.feedback.wrong}
                  </div>
                </div>

                <button 
                  onClick={nextQuestion}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold"
                >
                  {currentQuestion < quiz.questions.length - 1 ? 'Næste Spørgsmål' : 'Afslut Quiz'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}