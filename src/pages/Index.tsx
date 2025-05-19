
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import CircuitCard from "@/components/CircuitCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteCalculator from "@/components/QuoteCalculator";
import { circuits } from "@/data/circuits";

const Index = () => {
  const featuredCircuits = circuits.filter(circuit => circuit.featured);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero section - Mise à jour de l'image de fond */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/43b2c832-7a2b-485a-b1db-1c823a63cbf2.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Découvrez Madagascar avec ADR COMPANY
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl animate-fade-in animate-delay-100">
            Voyages organisés pour groupes, écoles et familles vers la Grande Île
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200">
            <Button asChild size="lg" className="text-lg bg-adr-900 hover:bg-adr-800">
              <Link to="/circuits">
                Nos circuits à Madagascar
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white hover:text-adr-900">
              <Link to="/contact">
                Demander un devis
              </Link>
            </Button>
          </div>
          <a 
            href="#featured" 
            className="absolute bottom-8 flex items-center justify-center flex-col opacity-80 hover:opacity-100 transition-opacity"
          >
            <span className="mb-2 text-sm">Découvrir</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </div>
      </section>

      {/* Featured circuits */}
      <section id="featured" className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos circuits populaires à Madagascar</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explorez les merveilles de la Grande Île avec nos circuits les plus appréciés
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCircuits.map((circuit) => (
            <CircuitCard key={circuit.id} circuit={circuit} featured />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-adr-900 hover:bg-adr-800">
            <Link to="/circuits">
              Voir tous nos circuits
            </Link>
          </Button>
        </div>
      </section>

      {/* Quote Calculator */}
      <section className="bg-adr-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Calculez votre devis en ligne
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Spécialistes des voyages en groupe à Madagascar, nous vous proposons un outil simple pour estimer le coût de votre aventure.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="bg-adr-900 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Organisation de voyages pour écoles et établissements éducatifs</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-adr-900 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Séjours adaptés pour les groupes familiaux de toutes tailles</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-adr-900 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Circuits sur mesure pour associations et entreprises</span>
                </li>
              </ul>
            </div>
            <div>
              <QuoteCalculator className="max-w-lg mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* About section - Mise à jour de l'image du Sprinter avec personne sur le toit */}
      <section className="section-container">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Votre spécialiste de Madagascar
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                ADR COMPANY vous fait découvrir les trésors cachés de Madagascar depuis plus de 15 ans. Notre expertise des voyages en groupe nous permet de vous offrir une expérience unique.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="bg-adr-900 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Guides locaux expérimentés et francophones</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-adr-900 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Véhicules adaptés aux groupes et aux pistes malgaches</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-adr-900 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Assistance 24/7 pendant tout votre séjour</span>
                </li>
              </ul>
              <Button asChild className="bg-adr-900 hover:bg-adr-800">
                <Link to="/a-propos">
                  En savoir plus
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/lovable-uploads/744b565e-6758-458c-98d5-88ccd0ed7046.png" 
                alt="Sprinter à Madagascar avec explorateur" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-adr-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que nos clients disent</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Témoignages de groupes ayant voyagé avec nous à Madagascar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Un voyage scolaire inoubliable pour nos 45 élèves à la découverte de la biodiversité malgache. Organisation impeccable, guides pédagogues, et une équipe à l'écoute de nos besoins spécifiques."
              </p>
              <div className="font-semibold">- Lycée Français de Tananarive</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Notre grande famille de 12 personnes a adoré le circuit des baobabs. Le logement était parfaitement adapté pour nous permettre de rester ensemble. Les enfants ont été émerveillés par la faune locale."
              </p>
              <div className="font-semibold">- Famille Rakotonirina</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Notre association a choisi ADR COMPANY pour un séjour solidaire à Madagascar. Le circuit mixant découvertes culturelles et actions sur le terrain était parfaitement équilibré. Une expérience riche en émotions."
              </p>
              <div className="font-semibold">- Association Mada-Actions</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-adr-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à découvrir Madagascar en groupe ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous dès aujourd'hui pour planifier votre prochain voyage de groupe sur la Grande Île
          </p>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-adr-900">
            <Link to="/contact">
              Nous contacter
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
