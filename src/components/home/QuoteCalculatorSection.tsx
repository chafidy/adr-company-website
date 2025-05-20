
import QuoteCalculator from "@/components/QuoteCalculator";
import { Circle } from "lucide-react";

const QuoteCalculatorSection = () => {
  return (
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
                <Circle className="h-5 w-5 text-adr-900 mr-3 mt-1 flex-shrink-0" fill="currentColor" />
                <span>Organisation de voyages pour écoles et établissements éducatifs</span>
              </li>
              <li className="flex items-start">
                <Circle className="h-5 w-5 text-adr-900 mr-3 mt-1 flex-shrink-0" fill="currentColor" />
                <span>Séjours adaptés pour les groupes familiaux de toutes tailles</span>
              </li>
              <li className="flex items-start">
                <Circle className="h-5 w-5 text-adr-900 mr-3 mt-1 flex-shrink-0" fill="currentColor" />
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
  );
};

export default QuoteCalculatorSection;
