
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";

const AboutSection = () => {
  return (
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
                <Circle className="h-5 w-5 text-adr-900 mr-3 mt-1 flex-shrink-0" fill="currentColor" />
                <span>Guides locaux expérimentés et francophones</span>
              </li>
              <li className="flex items-start">
                <Circle className="h-5 w-5 text-adr-900 mr-3 mt-1 flex-shrink-0" fill="currentColor" />
                <span>Véhicules adaptés aux groupes et aux pistes malgaches</span>
              </li>
              <li className="flex items-start">
                <Circle className="h-5 w-5 text-adr-900 mr-3 mt-1 flex-shrink-0" fill="currentColor" />
                <span>Assistance 24/7 pendant tout votre séjour</span>
              </li>
            </ul>
            <Button asChild className="bg-adr-900 hover:bg-adr-800">
              <Link to="/a-propos">
                En savoir plus
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 flex items-center justify-center">
            <img 
              src="/lovable-uploads/06f5544e-1eb8-413c-83f9-5622b0db093a.png" 
              alt="Flotte de véhicules de transport à Madagascar" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
