
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import CircuitCard from "@/components/CircuitCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { circuits } from "@/data/circuits";

const Index = () => {
  const featuredCircuits = circuits.filter(circuit => circuit.featured);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero section */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1470&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Découvrez le monde avec ADR TRAVEL
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl animate-fade-in animate-delay-100">
            Voyagez en toute sérénité avec notre agence experte et nos circuits sur mesure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200">
            <Button asChild size="lg" className="text-lg bg-adr-900 hover:bg-adr-800">
              <Link to="/circuits">
                Découvrir nos circuits
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white hover:text-adr-900">
              <Link to="/contact">
                Nous contacter
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos circuits populaires</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos destinations les plus prisées par nos voyageurs
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

      {/* About section */}
      <section className="bg-adr-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Votre agence de voyage de confiance
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                ADR TRAVEL vous propose des circuits personnalisés et des expériences authentiques pour des vacances inoubliables.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="bg-adr-900 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Des conseillers experts à votre écoute</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-adr-900 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Des circuits soigneusement élaborés</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-adr-900 text-white p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Assistance 24/7 durant votre voyage</span>
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
                src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=1470&auto=format&fit=crop" 
                alt="À propos de ADR TRAVEL" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que nos clients disent</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez les expériences de nos voyageurs satisfaits
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Une expérience inoubliable ! L'organisation était parfaite, les guides étaient exceptionnels et les paysages à couper le souffle. Je recommande vivement ADR TRAVEL."
              </p>
              <div className="font-semibold">- {i === 1 ? "Marie L." : i === 2 ? "Thomas B." : "Sophie K."}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-adr-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à partir à l'aventure ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous dès aujourd'hui pour planifier votre prochain voyage inoubliable
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
