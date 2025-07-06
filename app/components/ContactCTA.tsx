export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Klar til at blive en bedre støtte for børn med diagnoser?
        </h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
          Invester i din faglige udvikling og gør en reel forskel. 
          Book en gratis demo og se hvordan CDT kan transformere din tilgang til børn med særlige behov.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="mailto:kontakt@cdaisystems.com?subject=Book%20Gratis%20CDT%20Demo" className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-bold text-lg inline-block">
            Book Gratis Demo
          </a>
          <a href="#" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition font-bold text-lg inline-block">
            Download Infoark
          </a>
        </div>
        
        <div className="mt-8 text-emerald-100">
          <p className="mb-2">Eller kontakt CD AI Systems direkte:</p>
          <p className="font-bold">📧 kontakt@cdaisystems.com</p>
        </div>
      </div>
    </section>
  );
}