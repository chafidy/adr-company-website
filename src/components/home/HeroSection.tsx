
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/lovable-uploads/fc11a08f-7dae-4d4b-b399-825bb63eafbf.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
        <div className="max-w-4xl p-6 rounded-lg border border-white/10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-white drop-shadow-lg">
            Découvrez Madagascar avec ADR COMPANY
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 animate-fade-in animate-delay-100 text-white/90 drop-shadow-md">
            Voyages organisés pour groupes, écoles et familles vers la Grande Île
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-200">
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
        </div>
        <a 
          href="#featured" 
          className="absolute bottom-8 flex items-center justify-center flex-col opacity-80 hover:opacity-100 transition-opacity"
        >
          <span className="mb-2 text-sm font-semibold bg-black/30 px-3 py-1 rounded-full">Découvrir</span>
          <ArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
