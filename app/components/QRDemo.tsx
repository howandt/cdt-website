'use client';
import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function QRDemo() {
  const [showDemo, setShowDemo] = useState(false);
  const [demoUrl, setDemoUrl] = useState('');

  useEffect(() => {
    // Generer unik demo URL
    const baseUrl = window.location.origin;
    const demoId = Math.random().toString(36).substring(7);
    setDemoUrl(`${baseUrl}/demo/${demoId}`);
  }, []);

  return (
    <section id="demo" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-emerald-500 mb-12">
          Prøv CDT Demo - Se Hvordan Det Virker! 📚
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
  {/* QR Code i stedet for Demo Preview */}
  <div className="text-center">
    <div className="bg-gray-900 p-4 rounded-xl inline-block border-2 border-emerald-500">
      {demoUrl && (
        <QRCodeSVG 
          value={demoUrl}
          size={180}
          level="H"
          includeMargin={false}
        />
      )}
    </div>
    <p className="text-gray-300 mt-4">Scan QR koden for at starte demo</p>
    <p className="text-gray-400 text-sm mt-2">Eller klik på knappen nedenfor</p>
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
              onClick={() => window.location.href = demoUrl}
              className="mt-8 bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition font-semibold"
            >
              Start Interaktiv Demo →
            </button>
          </div>
        </div>

        {/* Demo info box */}
        <div className="max-w-2xl mx-auto mt-12 bg-gray-700/50 p-6 rounded-lg border border-gray-600">
          <h4 className="text-emerald-400 font-semibold mb-2">Demo Information:</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• 30 minutters gratis prøveperiode</li>
            <li>• Ingen kreditkort påkrævet</li>
            <li>• Fuld adgang til alle funktioner</li>
            <li>• Automatisk tracking af din fremgang</li>
          </ul>
        </div>
      </div>
    </section>
  );
}