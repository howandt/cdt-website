
import BackButton from '../components/BackButton';
export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900">
      
      
      <main className="container mx-auto px-4 py-16">
        <BackButton />
        <h1 className="text-4xl font-bold text-emerald-500 text-center mb-12">
          Kontakt CD AI Systems
        </h1>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Kontakt info */}
          <div className="bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">
              Kom i kontakt
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-emerald-500 mr-3">📧</span>
                <div>
                  <p className="text-gray-300 font-semibold">Email</p>
                  <a href="mailto:kontakt@cdaisystems.com" className="text-emerald-400 hover:text-emerald-300">
                    kontakt@cdaisystems.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-emerald-500 mr-3">🏢</span>
                <div>
                  <p className="text-gray-300 font-semibold">Firma</p>
                  <p className="text-gray-400">CD AI Systems</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <h3 className="font-bold text-emerald-400 mb-3">Åbningstider</h3>
              <p className="text-gray-300">Mandag - Fredag: 9:00 - 17:00</p>
              <p className="text-gray-400 text-sm mt-2">Vi svarer inden for 24 timer</p>
            </div>
          </div>

          {/* Kontakt formular */}
          <div className="bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">
              Book en gratis demo
            </h2>
            
            <form action="https://formsubmit.co/kontakt@cdaisystems.com" method="POST" className="space-y-4">
              <input type="hidden" name="_subject" value="CDT Demo Forespørgsel" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div>
                <label className="block text-gray-300 mb-2">Navn *</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Organisation</label>
                <input 
                  type="text" 
                  name="organisation" 
                  className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Besked</label>
                <textarea 
                  name="message" 
                  rows={4}
                  className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition font-semibold"
              >
                Send Demo Forespørgsel
              </button>
            </form>
            
            <p className="text-gray-400 text-sm mt-4 text-center">
              Vi kontakter dig inden for 24 timer
            </p>
          </div>
        </div>

        {/* Ekstra info */}
        <div className="max-w-4xl mx-auto mt-12 bg-gray-800/50 p-6 rounded-xl text-center">
          <p className="text-gray-400">
            Har du spørgsmål om CDT? Vi er her for at hjælpe dig med at forstå, 
            hvordan platformen kan støtte dig i dit arbejde med børn med diagnoser.
          </p>
        </div>
      </main>
    </div>
  );
}