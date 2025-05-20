
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
