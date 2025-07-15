export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section - Above the fold */}
      <section className="relative px-4 py-8 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full font-bold text-sm mb-6 animate-pulse">
            🌟 VERDENS FØRSTE LEVENDE FAGBOG
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            Hej! Jeg er 
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}Heidi{" "}
            </span>
            🌱
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-3xl font-semibold mb-8 text-cyan-100 max-w-4xl mx-auto">
            Din intelligente partner der <strong>aldrig bliver forældet</strong> og 
            altid ser verden fra <strong>børnenes perspektiv</strong>
          </p>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">🔄</div>
              <h3 className="font-bold text-cyan-300">Opdateres løbende</h3>
              <p className="text-sm text-gray-300">Ny forskning hver måned</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">👶</div>
              <h3 className="font-bold text-purple-300">Børnenes perspektiv</h3>
              <p className="text-sm text-gray-300">Altid barnets verden først</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="font-bold text-pink-300">Intelligent AI</h3>
              <p className="text-sm text-gray-300">Personlig tilpasning</p>
            </div>
          </div>

          {/* CTA Button - HIGH UP! */}
          <div className="mb-12">
            <a 
              href="/platform"
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-black py-6 px-12 rounded-2xl text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25"
            >
              KLIK HER OG TEST FAGBOGEN! →
            </a>
          </div>

          {/* Bridge Visual */}
          <div className="grid md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">🏫</span>
              </div>
              <h3 className="font-bold text-blue-300">Skole</h3>
              <p className="text-sm text-blue-200">Lærere & specialister</p>
            </div>
            
            <div className="text-center relative">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl animate-bounce">
                <span className="text-4xl">🌉</span>
              </div>
              <h3 className="font-bold text-green-300 text-xl">HEIDI</h3>
              <p className="text-sm text-green-200 font-semibold">Din intelligente bro</p>
              
              {/* Bridge lines */}
              <div className="hidden md:block absolute top-10 -left-16 w-16 h-1 bg-gradient-to-r from-transparent to-green-400"></div>
              <div className="hidden md:block absolute top-10 -right-16 w-16 h-1 bg-gradient-to-l from-transparent to-green-400"></div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="font-bold text-yellow-300">Hjem</h3>
              <p className="text-sm text-yellow-200">Forældre & familie</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="px-4 py-16 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Hvorfor CDT er revolutionerende
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl p-8 border border-red-500/30">
              <h3 className="text-2xl font-bold text-red-300 mb-4">📚 Gamle fagbøger</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center"><span className="text-red-500 mr-2">✗</span> Samler støv i reolen</li>
                <li className="flex items-center"><span className="text-red-500 mr-2">✗</span> Forældede metoder</li>
                <li className="flex items-center"><span className="text-red-500 mr-2">✗</span> Kun teoretisk viden</li>
                <li className="flex items-center"><span className="text-red-500 mr-2">✗</span> Generisk tilgang</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-300 mb-4">🌱 CDT Levende Fagbog</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Direkte i din hånd</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Opdateres hver måned</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Praksis-baseret læring</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Personlig AI-rådgiver</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Child Perspective Focus */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-bold text-lg mb-8">
            👶 BØRNENES PERSPEKTIV FØRST
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-8">
            Sådan gør vi en forskel
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Alt i CDT starter med spørgsmålet: <strong className="text-cyan-300">"Hvordan føles det for barnet?"</strong> 
            Vi bygger bro mellem voksenverdenen og børnenes oplevelse, så alle kan forstå hinanden bedre.
          </p>

          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur border border-purple-500/30">
            <h3 className="text-2xl font-bold text-purple-300 mb-4">🔄 Levende opdateringer</h3>
            <p className="text-gray-300">
              <strong>Nye cases hver måned</strong> · <strong>Seneste forskning hver kvartal</strong> · 
              <strong>Bruger-feedback integreres løbende</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Klar til at revolutionere din tilgang?
          </h2>
          <p className="text-xl mb-8 text-cyan-100">
            Bliv en del af fremtiden for støtte til børn med særlige behov
          </p>
          
          <a 
            href="/platform"
            className="inline-block bg-white text-purple-600 font-black py-6 px-12 rounded-2xl text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25"
          >
            KLIK HER: TEST ER REJSE MED HEIDI! 🚀
          </a>
        </div>
      </section>
    </div>
  );
}