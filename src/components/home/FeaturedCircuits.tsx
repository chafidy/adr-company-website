
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CircuitCard from "@/components/CircuitCard";
import { Circuit } from "@/types";

interface FeaturedCircuitsProps {
  circuits: Circuit[];
}

const FeaturedCircuits = ({ circuits }: FeaturedCircuitsProps) => {
  // Nous limitons l'affichage à 6 circuits
  const displayedCircuits = circuits.slice(0, 6);

  return (
    <section id="featured" className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos circuits populaires à Madagascar</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explorez les merveilles de la Grande Île avec nos circuits les plus appréciés
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCircuits.map((circuit) => (
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
  );
};

export default FeaturedCircuits;
