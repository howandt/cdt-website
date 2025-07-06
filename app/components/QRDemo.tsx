'use client';
import { useState } from 'react';

export default function QRDemo() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section id="demo" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-emerald-500 mb-12">
          Prøv CDT Demo - Se Hvordan Det Virker! 📚
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Demo Preview */}
          <div className="text-center">
            <div className="bg-white p-8 rounded-xl inline-block cursor-pointer" onClick={() => setShowDemo(true)}>
              <div className="w-48 h-48 bg-gray-300 flex items-center justify-center rounded">
                <span className="text-gray-600 text-lg">Demo Preview</span>
              </div>
            </div>
            <p className="text-gray-300 mt-4">Klik for at starte interaktiv demo</p>
          </div>
          
          {/* Forklaring */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">
              Oplev CDT i Aktion:
            </h3>
            <ol className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-emerald-500 font-bold mr-3">1.</span>
                Vælg din rolle (lærer, forælder, specialist)
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 font-bold mr-3">2.</span>
                Få en virkelig case fra vores bibliotek
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 font-bold mr-3">3.</span>
                Skriv din løsning og få intelligent feedback
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 font-bold mr-3">4.</span>
                Se den optimale løsning med relevante skabeloner
              </li>
            </ol>
            
            <button 
              onClick={() => setShowDemo(true)}
              className="mt-8 bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition font-semibold"
            >
              Start Interaktiv Demo →
            </button>
          </div>
        </div>

        {/* Demo Modal */}
        {showDemo && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-8 rounded-xl max-w-2xl mx-4">
              <h3 className="text-2xl font-bold text-emerald-500 mb-4">
                CDT Demo
              </h3>
              <p className="text-gray-300 mb-6">
                I den fulde version vil du her møde Heidi og gennemgå en interaktiv case.
                Kontakt os for at få adgang til hele platformen.
              </p>
              <button 
                onClick={() => setShowDemo(false)}
                className="bg-emerald-500 text-white px-6 py-2 rounded hover:bg-emerald-600 transition"
              >
                Luk Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}