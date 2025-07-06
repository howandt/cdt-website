import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Firma Info */}
          <div className="md:col-span-1">
            <h3 className="text-emerald-500 font-bold text-xl mb-4">CD AI Systems</h3>
            <p className="text-gray-300 text-sm mb-4">
              CDA/CDT/CDF - Et samlet AI-drevet støttesystem designet til at give børn med særlige behov den bedst mulige støtte.
            </p>
            <p className="text-gray-400 text-sm">
              © 2025 CD AI Systems
            </p>
          </div>

          {/* Hurtige Links */}
          <div className="md:col-span-1">
            <h4 className="text-emerald-400 font-semibold mb-4">Hurtige Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/om-cdt" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Om CDT
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/indhold" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Platform Indhold
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Kontakt Os
                </Link>
              </li>
            </ul>
          </div>

          {/* Sociale Medier */}
          <div className="md:col-span-1">
            <h4 className="text-emerald-400 font-semibold mb-4">Følg Os</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.youtube.com/@BarnetsSprog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2"
                >
                  <span>📺</span> YouTube - Barnets Sprog
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/groups/adhdangstihverdagen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2"
                >
                  <span>👥</span> ADHD & Angst i Hverdagen
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/groups/childrendiagnosistutor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2"
                >
                  <span>👥</span> Children Diagnosis Tutor
                </a>
              </li>
              <li>
                <a 
                  href="https://cdaisystems.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2"
                >
                  <span>🌐</span> cdaisystems.com
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt Info */}
          <div className="md:col-span-1">
            <h4 className="text-emerald-400 font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">📧</span>
                <a 
                  href="mailto:kontakt@cdaisystems.com" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  kontakt@cdaisystems.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">📱</span>
                <a 
                  href="tel:+4526823121" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  +45 26 82 31 21
                </a>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
              <p className="text-emerald-400 text-sm font-semibold mb-2">
                Through Their Eyes Podcast
              </p>
              <p className="text-gray-400 text-xs">
                Lyt til vores podcast på YouTube
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Alle rettigheder forbeholdes. CDT Platform er en del af CD AI Systems økosystemet.
          </p>
        </div>
      </div>
    </footer>
  );
}