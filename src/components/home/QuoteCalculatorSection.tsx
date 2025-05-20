
import QuoteCalculator from "@/components/QuoteCalculator";

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
  );
};

export default QuoteCalculatorSection;
